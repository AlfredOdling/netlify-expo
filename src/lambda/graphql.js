const { ApolloServer, gql } = require('apollo-server-lambda')
const { RESTDataSource } = require('apollo-datasource-rest')
const casual = require('casual')
const ENGINE_API_KEY = 'service:AlfredOdling-3783:_5bAC7Q-cWxmC4RV0Cy0kw'

// -------------- Datasources ---------------
class RandomUserAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = "https://api.randomuser.me/"
  }

  async getPerson() {
    const { results } = await this.get("")
    return results
  }
}

const dataSources = () => ({
  randomUserAPI: new RandomUserAPI(),
})

// -------------- Schema ---------------
const typeDefs = gql`
  """ QUERIES """
  type Query {
    hello: String!,
    persons: [Person!]!,
  },

  """ TYPES """
  type Person {
    gender: String,
    email: String,
    phone: Int,
  }
`

const mocks = {
  Person: () => ({
    gender: 'man',
    email: casual.email,
    phone: casual.phone,
  }),
}

const resolvers = {
  Query: {
    hello: () => 'hello',
    persons: (_, __, { dataSources }) => {
      return dataSources.randomUserAPI.getPerson()
    }
  },
}

const server = new ApolloServer({
  engine: {
    apiKey: ENGINE_API_KEY,
  },
  dataSources,
  typeDefs,
  resolvers,
  mocks,
  introspection: true,
  playground: true,
  mockEntireSchema: false,
})

exports.handler = server.createHandler()
