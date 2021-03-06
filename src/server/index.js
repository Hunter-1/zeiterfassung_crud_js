const {ApolloServer} = require("apollo-server");
const {typeDefs} = require("./type-defs")
const {resolvers} = require("./resolvers")

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`Api is running | Url: ${url}`)
})