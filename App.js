import React, { Component } from 'react'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import ExampleComponent from './src/ExampleComponent'
import { ApolloProvider } from 'react-apollo'

const NETLIFY_URL = 'https://nifty-dijkstra-5d4938.netlify.com'
const NGROK_URL = 'http://49e52e4b.ngrok.io'
const NODE_ENV = 'DEVELOPMENT'
const baseURL = NODE_ENV === 'DEVELOPMENT' ? NGROK_URL : NETLIFY_URL

const cache = new InMemoryCache()
const client = new ApolloClient({
  cache,
  uri: baseURL + '/.netlify/functions/graphql',
  // connectToDevTools: false, // Enabling devtools in production if true
})

// Default State
cache.writeData({
  data: {
    someField: 'some value!!',
  },
})
export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ExampleComponent />
      </ApolloProvider>
    )
  }
}
