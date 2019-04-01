!function(e,n){for(var t in n)e[t]=n[t]}(exports,function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=626)}({1:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"})},16:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var r=t(5);function a(e,n,t){return new r.a("Syntax Error: ".concat(t),void 0,e,[n])}},2:function(e,n,t){"use strict";t.d(n,"b",function(){return o}),t.d(n,"a",function(){return s}),t.d(n,"c",function(){return l});var r=t(20),a=t(16),i=t(40);function o(e,n){var t=new f(s.SOF,0,0,0,0,null);return{source:e,options:n,lastToken:t,token:t,line:1,lineStart:0,advance:c,lookahead:u}}function c(){return this.lastToken=this.token,this.token=this.lookahead()}function u(){var e=this.token;if(e.kind!==s.EOF)do{e=e.next||(e.next=E(this,e))}while(e.kind===s.COMMENT);return e}var s=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"});function l(e){var n=e.value;return n?"".concat(e.kind,' "').concat(n,'"'):e.kind}function f(e,n,t,r,a,i,o){this.kind=e,this.start=n,this.end=t,this.line=r,this.column=a,this.value=o,this.prev=i,this.next=null}function d(e){return isNaN(e)?s.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function E(e,n){var t=e.source,r=t.body,o=r.length,c=function(e,n,t){var r=e.length,a=n;for(;a<r;){var i=e.charCodeAt(a);if(9===i||32===i||44===i||65279===i)++a;else if(10===i)++a,++t.line,t.lineStart=a;else{if(13!==i)break;10===e.charCodeAt(a+1)?a+=2:++a,++t.line,t.lineStart=a}}return a}(r,n.end,e),u=e.line,l=1+c-e.lineStart;if(c>=o)return new f(s.EOF,o,o,u,l,n);var E=r.charCodeAt(c);switch(E){case 33:return new f(s.BANG,c,c+1,u,l,n);case 35:return function(e,n,t,r,a){var i,o=e.body,c=n;do{i=o.charCodeAt(++c)}while(!isNaN(i)&&(i>31||9===i));return new f(s.COMMENT,n,c,t,r,a,o.slice(n+1,c))}(t,c,u,l,n);case 36:return new f(s.DOLLAR,c,c+1,u,l,n);case 38:return new f(s.AMP,c,c+1,u,l,n);case 40:return new f(s.PAREN_L,c,c+1,u,l,n);case 41:return new f(s.PAREN_R,c,c+1,u,l,n);case 46:if(46===r.charCodeAt(c+1)&&46===r.charCodeAt(c+2))return new f(s.SPREAD,c,c+3,u,l,n);break;case 58:return new f(s.COLON,c,c+1,u,l,n);case 61:return new f(s.EQUALS,c,c+1,u,l,n);case 64:return new f(s.AT,c,c+1,u,l,n);case 91:return new f(s.BRACKET_L,c,c+1,u,l,n);case 93:return new f(s.BRACKET_R,c,c+1,u,l,n);case 123:return new f(s.BRACE_L,c,c+1,u,l,n);case 124:return new f(s.PIPE,c,c+1,u,l,n);case 125:return new f(s.BRACE_R,c,c+1,u,l,n);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return function(e,n,t,r,a){var i=e.body,o=i.length,c=n+1,u=0;for(;c!==o&&!isNaN(u=i.charCodeAt(c))&&(95===u||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122);)++c;return new f(s.NAME,n,c,t,r,a,i.slice(n,c))}(t,c,u,l,n);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return function(e,n,t,r,i,o){var c=e.body,u=t,l=n,E=!1;45===u&&(u=c.charCodeAt(++l));if(48===u){if((u=c.charCodeAt(++l))>=48&&u<=57)throw Object(a.a)(e,l,"Invalid number, unexpected digit after 0: ".concat(d(u),"."))}else l=v(e,l,u),u=c.charCodeAt(l);46===u&&(E=!0,u=c.charCodeAt(++l),l=v(e,l,u),u=c.charCodeAt(l));69!==u&&101!==u||(E=!0,43!==(u=c.charCodeAt(++l))&&45!==u||(u=c.charCodeAt(++l)),l=v(e,l,u));return new f(E?s.FLOAT:s.INT,n,l,r,i,o,c.slice(n,l))}(t,c,E,u,l,n);case 34:return 34===r.charCodeAt(c+1)&&34===r.charCodeAt(c+2)?function(e,n,t,r,o,c){var u=e.body,l=n+3,E=l,v=0,N="";for(;l<u.length&&!isNaN(v=u.charCodeAt(l));){if(34===v&&34===u.charCodeAt(l+1)&&34===u.charCodeAt(l+2))return N+=u.slice(E,l),new f(s.BLOCK_STRING,n,l+3,t,r,o,Object(i.a)(N));if(v<32&&9!==v&&10!==v&&13!==v)throw Object(a.a)(e,l,"Invalid character within String: ".concat(d(v),"."));10===v?(++l,++c.line,c.lineStart=l):13===v?(10===u.charCodeAt(l+1)?l+=2:++l,++c.line,c.lineStart=l):92===v&&34===u.charCodeAt(l+1)&&34===u.charCodeAt(l+2)&&34===u.charCodeAt(l+3)?(N+=u.slice(E,l)+'"""',E=l+=4):++l}throw Object(a.a)(e,l,"Unterminated string.")}(t,c,u,l,n,e):function(e,n,t,r,i){var o=e.body,c=n+1,u=c,l=0,E="";for(;c<o.length&&!isNaN(l=o.charCodeAt(c))&&10!==l&&13!==l;){if(34===l)return E+=o.slice(u,c),new f(s.STRING,n,c+1,t,r,i,E);if(l<32&&9!==l)throw Object(a.a)(e,c,"Invalid character within String: ".concat(d(l),"."));if(++c,92===l){switch(E+=o.slice(u,c-1),l=o.charCodeAt(c)){case 34:E+='"';break;case 47:E+="/";break;case 92:E+="\\";break;case 98:E+="\b";break;case 102:E+="\f";break;case 110:E+="\n";break;case 114:E+="\r";break;case 116:E+="\t";break;case 117:var v=(I=o.charCodeAt(c+1),T=o.charCodeAt(c+2),O=o.charCodeAt(c+3),h=o.charCodeAt(c+4),N(I)<<12|N(T)<<8|N(O)<<4|N(h));if(v<0)throw Object(a.a)(e,c,"Invalid character escape sequence: "+"\\u".concat(o.slice(c+1,c+5),"."));E+=String.fromCharCode(v),c+=4;break;default:throw Object(a.a)(e,c,"Invalid character escape sequence: \\".concat(String.fromCharCode(l),"."))}u=++c}}var I,T,O,h;throw Object(a.a)(e,c,"Unterminated string.")}(t,c,u,l,n)}throw Object(a.a)(t,c,function(e){if(e<32&&9!==e&&10!==e&&13!==e)return"Cannot contain the invalid character ".concat(d(e),".");if(39===e)return"Unexpected single quote character ('), did you mean to use a double quote (\")?";return"Cannot parse the unexpected character ".concat(d(e),".")}(E))}function v(e,n,t){var r=e.body,i=n,o=t;if(o>=48&&o<=57){do{o=r.charCodeAt(++i)}while(o>=48&&o<=57);return i}throw Object(a.a)(e,i,"Invalid number, expected digit but got: ".concat(d(o),"."))}function N(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}Object(r.a)(f,function(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}})},20:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var r=t(41);function a(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.prototype.toString;e.prototype.toJSON=n,e.prototype.inspect=n,r.a&&(e.prototype[r.a]=n)}},26:function(e,n,t){"use strict";function r(e){"function"==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e.prototype,Symbol.toStringTag,{get:function(){return this.constructor.name}})}t.d(n,"a",function(){return r})},28:function(e,n,t){"use strict";t.r(n),t.d(n,"parse",function(){return l}),t.d(n,"parseValue",function(){return f}),t.d(n,"parseType",function(){return d}),t.d(n,"parseConstValue",function(){return S}),t.d(n,"parseTypeReference",function(){return D}),t.d(n,"parseNamedType",function(){return P});var r=t(3),a=t(20),i=t(34),o=t(16),c=t(2),u=t(1),s=t(7);function l(e,n){var t="string"==typeof e?new i.a(e):e;if(!(t instanceof i.a))throw new TypeError("Must provide Source. Received: ".concat(Object(r.a)(t)));return function(e){var n=e.token;return{kind:u.a.DOCUMENT,definitions:ae(e,c.a.SOF,v,c.a.EOF),loc:H(e,n)}}(Object(c.b)(t,n||{}))}function f(e,n){var t="string"==typeof e?new i.a(e):e,r=Object(c.b)(t,n||{});W(r,c.a.SOF);var a=C(r,!1);return W(r,c.a.EOF),a}function d(e,n){var t="string"==typeof e?new i.a(e):e,r=Object(c.b)(t,n||{});W(r,c.a.SOF);var a=D(r);return W(r,c.a.EOF),a}function E(e){var n=W(e,c.a.NAME);return{kind:u.a.NAME,value:n.value,loc:H(e,n)}}function v(e){if($(e,c.a.NAME))switch(e.token.value){case"query":case"mutation":case"subscription":case"fragment":return N(e);case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return w(e);case"extend":return function(e){var n=e.lookahead();if(n.kind===c.a.NAME)switch(n.value){case"schema":return function(e){var n=e.token;ee(e,"extend"),ee(e,"schema");var t=L(e,!0),r=$(e,c.a.BRACE_L)?ae(e,c.a.BRACE_L,j,c.a.BRACE_R):[];if(0===t.length&&0===r.length)throw te(e);return{kind:u.a.SCHEMA_EXTENSION,directives:t,operationTypes:r,loc:H(e,n)}}(e);case"scalar":return function(e){var n=e.token;ee(e,"extend"),ee(e,"scalar");var t=E(e),r=L(e,!0);if(0===r.length)throw te(e);return{kind:u.a.SCALAR_TYPE_EXTENSION,name:t,directives:r,loc:H(e,n)}}(e);case"type":return function(e){var n=e.token;ee(e,"extend"),ee(e,"type");var t=E(e),r=U(e),a=L(e,!0),i=x(e);if(0===r.length&&0===a.length&&0===i.length)throw te(e);return{kind:u.a.OBJECT_TYPE_EXTENSION,name:t,interfaces:r,directives:a,fields:i,loc:H(e,n)}}(e);case"interface":return function(e){var n=e.token;ee(e,"extend"),ee(e,"interface");var t=E(e),r=L(e,!0),a=x(e);if(0===r.length&&0===a.length)throw te(e);return{kind:u.a.INTERFACE_TYPE_EXTENSION,name:t,directives:r,fields:a,loc:H(e,n)}}(e);case"union":return function(e){var n=e.token;ee(e,"extend"),ee(e,"union");var t=E(e),r=L(e,!0),a=J(e);if(0===r.length&&0===a.length)throw te(e);return{kind:u.a.UNION_TYPE_EXTENSION,name:t,directives:r,types:a,loc:H(e,n)}}(e);case"enum":return function(e){var n=e.token;ee(e,"extend"),ee(e,"enum");var t=E(e),r=L(e,!0),a=q(e);if(0===r.length&&0===a.length)throw te(e);return{kind:u.a.ENUM_TYPE_EXTENSION,name:t,directives:r,values:a,loc:H(e,n)}}(e);case"input":return function(e){var n=e.token;ee(e,"extend"),ee(e,"input");var t=E(e),r=L(e,!0),a=X(e);if(0===r.length&&0===a.length)throw te(e);return{kind:u.a.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:r,fields:a,loc:H(e,n)}}(e)}throw te(e,n)}(e)}else{if($(e,c.a.BRACE_L))return N(e);if(B(e))return w(e)}throw te(e)}function N(e){if($(e,c.a.NAME))switch(e.token.value){case"query":case"mutation":case"subscription":return I(e);case"fragment":return function(e){var n=e.token;if(ee(e,"fragment"),e.options.experimentalFragmentVariables)return{kind:u.a.FRAGMENT_DEFINITION,name:y(e),variableDefinitions:O(e),typeCondition:(ee(e,"on"),P(e)),directives:L(e,!1),selectionSet:A(e),loc:H(e,n)};return{kind:u.a.FRAGMENT_DEFINITION,name:y(e),typeCondition:(ee(e,"on"),P(e)),directives:L(e,!1),selectionSet:A(e),loc:H(e,n)}}(e)}else if($(e,c.a.BRACE_L))return I(e);throw te(e)}function I(e){var n=e.token;if($(e,c.a.BRACE_L))return{kind:u.a.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:A(e),loc:H(e,n)};var t,r=T(e);return $(e,c.a.NAME)&&(t=E(e)),{kind:u.a.OPERATION_DEFINITION,operation:r,name:t,variableDefinitions:O(e),directives:L(e,!1),selectionSet:A(e),loc:H(e,n)}}function T(e){var n=W(e,c.a.NAME);switch(n.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw te(e,n)}function O(e){return $(e,c.a.PAREN_L)?ae(e,c.a.PAREN_L,h,c.a.PAREN_R):[]}function h(e){var n=e.token;return{kind:u.a.VARIABLE_DEFINITION,variable:p(e),type:(W(e,c.a.COLON),D(e)),defaultValue:Z(e,c.a.EQUALS)?C(e,!0):void 0,directives:L(e,!0),loc:H(e,n)}}function p(e){var n=e.token;return W(e,c.a.DOLLAR),{kind:u.a.VARIABLE,name:E(e),loc:H(e,n)}}function A(e){var n=e.token;return{kind:u.a.SELECTION_SET,selections:ae(e,c.a.BRACE_L,_,c.a.BRACE_R),loc:H(e,n)}}function _(e){return $(e,c.a.SPREAD)?function(e){var n=e.token;W(e,c.a.SPREAD);var t=ne(e,"on");if(!t&&$(e,c.a.NAME))return{kind:u.a.FRAGMENT_SPREAD,name:y(e),directives:L(e,!1),loc:H(e,n)};return{kind:u.a.INLINE_FRAGMENT,typeCondition:t?P(e):void 0,directives:L(e,!1),selectionSet:A(e),loc:H(e,n)}}(e):function(e){var n,t,r=e.token,a=E(e);Z(e,c.a.COLON)?(n=a,t=E(e)):t=a;return{kind:u.a.FIELD,alias:n,name:t,arguments:m(e,!1),directives:L(e,!1),selectionSet:$(e,c.a.BRACE_L)?A(e):void 0,loc:H(e,r)}}(e)}function m(e,n){var t=n?k:b;return $(e,c.a.PAREN_L)?ae(e,c.a.PAREN_L,t,c.a.PAREN_R):[]}function b(e){var n=e.token,t=E(e);return W(e,c.a.COLON),{kind:u.a.ARGUMENT,name:t,value:C(e,!1),loc:H(e,n)}}function k(e){var n=e.token;return{kind:u.a.ARGUMENT,name:E(e),value:(W(e,c.a.COLON),S(e)),loc:H(e,n)}}function y(e){if("on"===e.token.value)throw te(e);return E(e)}function C(e,n){var t=e.token;switch(t.kind){case c.a.BRACKET_L:return function(e,n){var t=e.token,r=n?S:g;return{kind:u.a.LIST,values:re(e,c.a.BRACKET_L,r,c.a.BRACKET_R),loc:H(e,t)}}(e,n);case c.a.BRACE_L:return function(e,n){var t=e.token;return{kind:u.a.OBJECT,fields:re(e,c.a.BRACE_L,function(){return function(e,n){var t=e.token,r=E(e);return W(e,c.a.COLON),{kind:u.a.OBJECT_FIELD,name:r,value:C(e,n),loc:H(e,t)}}(e,n)},c.a.BRACE_R),loc:H(e,t)}}(e,n);case c.a.INT:return e.advance(),{kind:u.a.INT,value:t.value,loc:H(e,t)};case c.a.FLOAT:return e.advance(),{kind:u.a.FLOAT,value:t.value,loc:H(e,t)};case c.a.STRING:case c.a.BLOCK_STRING:return R(e);case c.a.NAME:return"true"===t.value||"false"===t.value?(e.advance(),{kind:u.a.BOOLEAN,value:"true"===t.value,loc:H(e,t)}):"null"===t.value?(e.advance(),{kind:u.a.NULL,loc:H(e,t)}):(e.advance(),{kind:u.a.ENUM,value:t.value,loc:H(e,t)});case c.a.DOLLAR:if(!n)return p(e)}throw te(e)}function R(e){var n=e.token;return e.advance(),{kind:u.a.STRING,value:n.value,block:n.kind===c.a.BLOCK_STRING,loc:H(e,n)}}function S(e){return C(e,!0)}function g(e){return C(e,!1)}function L(e,n){for(var t=[];$(e,c.a.AT);)t.push(F(e,n));return t}function F(e,n){var t=e.token;return W(e,c.a.AT),{kind:u.a.DIRECTIVE,name:E(e),arguments:m(e,n),loc:H(e,t)}}function D(e){var n,t=e.token;return Z(e,c.a.BRACKET_L)?(n=D(e),W(e,c.a.BRACKET_R),n={kind:u.a.LIST_TYPE,type:n,loc:H(e,t)}):n=P(e),Z(e,c.a.BANG)?{kind:u.a.NON_NULL_TYPE,type:n,loc:H(e,t)}:n}function P(e){var n=e.token;return{kind:u.a.NAMED_TYPE,name:E(e),loc:H(e,n)}}function w(e){var n=B(e)?e.lookahead():e.token;if(n.kind===c.a.NAME)switch(n.value){case"schema":return function(e){var n=e.token;ee(e,"schema");var t=L(e,!0),r=ae(e,c.a.BRACE_L,j,c.a.BRACE_R);return{kind:u.a.SCHEMA_DEFINITION,directives:t,operationTypes:r,loc:H(e,n)}}(e);case"scalar":return function(e){var n=e.token,t=M(e);ee(e,"scalar");var r=E(e),a=L(e,!0);return{kind:u.a.SCALAR_TYPE_DEFINITION,description:t,name:r,directives:a,loc:H(e,n)}}(e);case"type":return function(e){var n=e.token,t=M(e);ee(e,"type");var r=E(e),a=U(e),i=L(e,!0),o=x(e);return{kind:u.a.OBJECT_TYPE_DEFINITION,description:t,name:r,interfaces:a,directives:i,fields:o,loc:H(e,n)}}(e);case"interface":return function(e){var n=e.token,t=M(e);ee(e,"interface");var r=E(e),a=L(e,!0),i=x(e);return{kind:u.a.INTERFACE_TYPE_DEFINITION,description:t,name:r,directives:a,fields:i,loc:H(e,n)}}(e);case"union":return function(e){var n=e.token,t=M(e);ee(e,"union");var r=E(e),a=L(e,!0),i=J(e);return{kind:u.a.UNION_TYPE_DEFINITION,description:t,name:r,directives:a,types:i,loc:H(e,n)}}(e);case"enum":return function(e){var n=e.token,t=M(e);ee(e,"enum");var r=E(e),a=L(e,!0),i=q(e);return{kind:u.a.ENUM_TYPE_DEFINITION,description:t,name:r,directives:a,values:i,loc:H(e,n)}}(e);case"input":return function(e){var n=e.token,t=M(e);ee(e,"input");var r=E(e),a=L(e,!0),i=X(e);return{kind:u.a.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:r,directives:a,fields:i,loc:H(e,n)}}(e);case"directive":return function(e){var n=e.token,t=M(e);ee(e,"directive"),W(e,c.a.AT);var r=E(e),a=G(e);ee(e,"on");var i=function(e){Z(e,c.a.PIPE);var n=[];do{n.push(Q(e))}while(Z(e,c.a.PIPE));return n}(e);return{kind:u.a.DIRECTIVE_DEFINITION,description:t,name:r,arguments:a,locations:i,loc:H(e,n)}}(e)}throw te(e,n)}function B(e){return $(e,c.a.STRING)||$(e,c.a.BLOCK_STRING)}function M(e){if(B(e))return R(e)}function j(e){var n=e.token,t=T(e);W(e,c.a.COLON);var r=P(e);return{kind:u.a.OPERATION_TYPE_DEFINITION,operation:t,type:r,loc:H(e,n)}}function U(e){var n=[];if(ne(e,"implements")){Z(e,c.a.AMP);do{n.push(P(e))}while(Z(e,c.a.AMP)||e.options.allowLegacySDLImplementsInterfaces&&$(e,c.a.NAME))}return n}function x(e){return e.options.allowLegacySDLEmptyFields&&$(e,c.a.BRACE_L)&&e.lookahead().kind===c.a.BRACE_R?(e.advance(),e.advance(),[]):$(e,c.a.BRACE_L)?ae(e,c.a.BRACE_L,V,c.a.BRACE_R):[]}function V(e){var n=e.token,t=M(e),r=E(e),a=G(e);W(e,c.a.COLON);var i=D(e),o=L(e,!0);return{kind:u.a.FIELD_DEFINITION,description:t,name:r,arguments:a,type:i,directives:o,loc:H(e,n)}}function G(e){return $(e,c.a.PAREN_L)?ae(e,c.a.PAREN_L,Y,c.a.PAREN_R):[]}function Y(e){var n=e.token,t=M(e),r=E(e);W(e,c.a.COLON);var a,i=D(e);Z(e,c.a.EQUALS)&&(a=S(e));var o=L(e,!0);return{kind:u.a.INPUT_VALUE_DEFINITION,description:t,name:r,type:i,defaultValue:a,directives:o,loc:H(e,n)}}function J(e){var n=[];if(Z(e,c.a.EQUALS)){Z(e,c.a.PIPE);do{n.push(P(e))}while(Z(e,c.a.PIPE))}return n}function q(e){return $(e,c.a.BRACE_L)?ae(e,c.a.BRACE_L,K,c.a.BRACE_R):[]}function K(e){var n=e.token,t=M(e),r=E(e),a=L(e,!0);return{kind:u.a.ENUM_VALUE_DEFINITION,description:t,name:r,directives:a,loc:H(e,n)}}function X(e){return $(e,c.a.BRACE_L)?ae(e,c.a.BRACE_L,Y,c.a.BRACE_R):[]}function Q(e){var n=e.token,t=E(e);if(s.a.hasOwnProperty(t.value))return t;throw te(e,n)}function H(e,n){if(!e.options.noLocation)return new z(n,e.lastToken,e.source)}function z(e,n,t){this.start=e.start,this.end=n.end,this.startToken=e,this.endToken=n,this.source=t}function $(e,n){return e.token.kind===n}function W(e,n){var t=e.token;if(t.kind===n)return e.advance(),t;throw Object(o.a)(e.source,t.start,"Expected ".concat(n,", found ").concat(Object(c.c)(t)))}function Z(e,n){var t=e.token;if(t.kind===n)return e.advance(),t}function ee(e,n){var t=e.token;if(t.kind===c.a.NAME&&t.value===n)return e.advance(),t;throw Object(o.a)(e.source,t.start,'Expected "'.concat(n,'", found ').concat(Object(c.c)(t)))}function ne(e,n){var t=e.token;if(t.kind===c.a.NAME&&t.value===n)return e.advance(),t}function te(e,n){var t=n||e.token;return Object(o.a)(e.source,t.start,"Unexpected ".concat(Object(c.c)(t)))}function re(e,n,t,r){W(e,n);for(var a=[];!Z(e,r);)a.push(t(e));return a}function ae(e,n,t,r){W(e,n);for(var a=[t(e)];!Z(e,r);)a.push(t(e));return a}Object(a.a)(z,function(){return{start:this.start,end:this.end}})},3:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var r=t(41);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=10,o=2;function c(e){return u(e,[])}function u(e,n){switch(a(e)){case"string":return JSON.stringify(e);case"function":return e.name?"[function ".concat(e.name,"]"):"[function]";case"object":return function(e,n){if(-1!==n.indexOf(e))return"[Circular]";var t=[].concat(n,[e]);if(e){var a=function(e){var n=e[String(r.a)];if("function"==typeof n)return n;if("function"==typeof e.inspect)return e.inspect}(e);if(a){var c=a.call(e);if(c!==e)return"string"==typeof c?c:u(c,t)}else if(Array.isArray(e))return function(e,n){if(0===e.length)return"[]";if(n.length>o)return"[Array]";for(var t=Math.min(i,e.length),r=e.length-t,a=[],c=0;c<t;++c)a.push(u(e[c],n));1===r?a.push("... 1 more item"):r>1&&a.push("... ".concat(r," more items"));return"["+a.join(", ")+"]"}(e,t);return function(e,n){var t=Object.keys(e);if(0===t.length)return"{}";if(n.length>o)return"["+function(e){var n=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if("Object"===n&&"function"==typeof e.constructor){var t=e.constructor.name;if("string"==typeof t)return t}return n}(e)+"]";return"{ "+t.map(function(t){var r=u(e[t],n);return t+": "+r}).join(", ")+" }"}(e,t)}return String(e)}(e,n);default:return String(e)}}},32:function(e,n,t){"use strict";function r(e,n){for(var t,r=/\r\n|[\n\r]/g,a=1,i=n+1;(t=r.exec(e.body))&&t.index<n;)a+=1,i=n+1-(t.index+t[0].length);return{line:a,column:i}}t.d(n,"a",function(){return r})},34:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t(6),a=t(26),i=function(e,n,t){this.body=e,this.name=n||"GraphQL request",this.locationOffset=t||{line:1,column:1},this.locationOffset.line>0||Object(r.a)(0,"line in locationOffset is 1-indexed and must be positive"),this.locationOffset.column>0||Object(r.a)(0,"column in locationOffset is 1-indexed and must be positive")};Object(a.a)(i)},40:function(e,n,t){"use strict";function r(e){for(var n=e.split(/\r\n|[\n\r]/g),t=null,r=1;r<n.length;r++){var o=n[r],c=a(o);if(c<o.length&&(null===t||c<t)&&0===(t=c))break}if(t)for(var u=1;u<n.length;u++)n[u]=n[u].slice(t);for(;n.length>0&&i(n[0]);)n.shift();for(;n.length>0&&i(n[n.length-1]);)n.pop();return n.join("\n")}function a(e){for(var n=0;n<e.length&&(" "===e[n]||"\t"===e[n]);)n++;return n}function i(e){return a(e)===e.length}function o(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=-1===e.indexOf("\n"),a=" "===e[0]||"\t"===e[0],i='"'===e[e.length-1],o=!r||i||t,c="";return!o||r&&a||(c+="\n"+n),c+=n?e.replace(/\n/g,"\n"+n):e,o&&(c+="\n"),'"""'+c.replace(/"""/g,'\\"""')+'"""'}t.d(n,"a",function(){return r}),t.d(n,"b",function(){return o})},41:function(e,n,t){"use strict";var r="function"==typeof Symbol?Symbol.for("nodejs.util.inspect.custom"):void 0;n.a=r},5:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t(66),a=t(32);function i(e,n,t,r,o,c,u){var s=Array.isArray(n)?0!==n.length?n:void 0:n?[n]:void 0,l=t;if(!l&&s){var f=s[0];l=f&&f.loc&&f.loc.source}var d,E=r;!E&&s&&(E=s.reduce(function(e,n){return n.loc&&e.push(n.loc.start),e},[])),E&&0===E.length&&(E=void 0),r&&t?d=r.map(function(e){return Object(a.a)(t,e)}):s&&(d=s.reduce(function(e,n){return n.loc&&e.push(Object(a.a)(n.loc.source,n.loc.start)),e},[]));var v=u||c&&c.extensions;Object.defineProperties(this,{message:{value:e,enumerable:!0,writable:!0},locations:{value:d||void 0,enumerable:Boolean(d)},path:{value:o||void 0,enumerable:Boolean(o)},nodes:{value:s||void 0},source:{value:l||void 0},positions:{value:E||void 0},originalError:{value:c},extensions:{value:v||void 0,enumerable:Boolean(v)}}),c&&c.stack?Object.defineProperty(this,"stack",{value:c.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,i):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}i.prototype=Object.create(Error.prototype,{constructor:{value:i},name:{value:"GraphQLError"},toString:{value:function(){return Object(r.a)(this)}}})},6:function(e,n,t){"use strict";function r(e,n){if(!e)throw new Error(n)}t.d(n,"a",function(){return r})},626:function(e,n,t){"use strict";t.r(n),t.d(n,"getSomeField",function(){return s}),t.d(n,"ADD_FIELD",function(){return l}),t.d(n,"getPersons",function(){return f});var r=t(80),a=t.n(r);function i(){const e=u(["\nquery {\n  persons {\n    email\n  }\n}\n"]);return i=function(){return e},e}function o(){const e=u(["\n  mutation addField($field: String!) {\n    addField(field: $field) @client {\n      field\n    }\n  }\n"]);return o=function(){return e},e}function c(){const e=u(["\n  {\n    someField @client\n  }\n"]);return c=function(){return e},e}function u(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}const s=a()(c()),l=a()(o()),f=a()(i())},66:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var r=t(32);function a(e){var n=[];if(e.nodes){var t=!0,a=!1,o=void 0;try{for(var c,u=e.nodes[Symbol.iterator]();!(t=(c=u.next()).done);t=!0){var s=c.value;s.loc&&n.push(i(s.loc.source,Object(r.a)(s.loc.source,s.loc.start)))}}catch(e){a=!0,o=e}finally{try{t||null==u.return||u.return()}finally{if(a)throw o}}}else if(e.source&&e.locations){var l=e.source,f=!0,d=!1,E=void 0;try{for(var v,N=e.locations[Symbol.iterator]();!(f=(v=N.next()).done);f=!0){var I=v.value;n.push(i(l,I))}}catch(e){d=!0,E=e}finally{try{f||null==N.return||N.return()}finally{if(d)throw E}}}return 0===n.length?e.message:[e.message].concat(n).join("\n\n")+"\n"}function i(e,n){var t=e.locationOffset.column-1,r=o(t)+e.body,a=n.line-1,i=e.locationOffset.line-1,c=n.line+i,u=1===n.line?t:0,s=n.column+u,l=r.split(/\r\n|[\n\r]/g);return"".concat(e.name," (").concat(c,":").concat(s,")\n")+function(e){var n=e.filter(function(e){e[0];var n=e[1];return void 0!==n}),t=0,r=!0,a=!1,i=void 0;try{for(var c,u=n[Symbol.iterator]();!(r=(c=u.next()).done);r=!0){var s=c.value,l=s[0];t=Math.max(t,l.length)}}catch(e){a=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n.map(function(e){var n,r=e[0],a=e[1];return o(t-(n=r).length)+n+a}).join("\n")}([["".concat(c-1,": "),l[a-1]],["".concat(c,": "),l[a]],["",o(s-1)+"^"],["".concat(c+1,": "),l[a+1]]])}function o(e){return Array(e+1).join(" ")}},7:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"})},80:function(e,n,t){var r=t(28).parse;function a(e){return e.replace(/[\s,]+/g," ").trim()}var i={},o={};var c=!0;var u=!1;function s(e){var n=a(e);if(i[n])return i[n];var t=r(e,{experimentalFragmentVariables:u});if(!t||"Document"!==t.kind)throw new Error("Not a valid GraphQL document.");return t=function e(n,t){var r=Object.prototype.toString.call(n);if("[object Array]"===r)return n.map(function(n){return e(n,t)});if("[object Object]"!==r)throw new Error("Unexpected input.");t&&n.loc&&delete n.loc,n.loc&&(delete n.loc.startToken,delete n.loc.endToken);var a,i,o,c=Object.keys(n);for(a in c)c.hasOwnProperty(a)&&(i=n[c[a]],"[object Object]"!==(o=Object.prototype.toString.call(i))&&"[object Array]"!==o||(n[c[a]]=e(i,!0)));return n}(t=function(e){for(var n,t={},r=[],i=0;i<e.definitions.length;i++){var u=e.definitions[i];if("FragmentDefinition"===u.kind){var s=u.name.value,l=a((n=u.loc).source.body.substring(n.start,n.end));o.hasOwnProperty(s)&&!o[s][l]?(c&&console.warn("Warning: fragment with name "+s+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"),o[s][l]=!0):o.hasOwnProperty(s)||(o[s]={},o[s][l]=!0),t[l]||(t[l]=!0,r.push(u))}else r.push(u)}return e.definitions=r,e}(t),!1),i[n]=t,t}function l(){for(var e=Array.prototype.slice.call(arguments),n=e[0],t="string"==typeof n?n:n[0],r=1;r<e.length;r++)e[r]&&e[r].kind&&"Document"===e[r].kind?t+=e[r].loc.source.body:t+=e[r],t+=n[r];return s(t)}l.default=l,l.resetCaches=function(){i={},o={}},l.disableFragmentWarnings=function(){c=!1},l.enableExperimentalFragmentVariables=function(){u=!0},l.disableExperimentalFragmentVariables=function(){u=!1},e.exports=l}}));