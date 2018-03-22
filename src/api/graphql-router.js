const fs = require('fs')
const path = require('path')
const merge = require('lodash.merge')
const { makeExecutableSchema } = require('graphql-tools')
const { graphqlExpress } = require('apollo-server-express')

const userResolvers = require('./resources/user/resolvers')
const postResolvers = require('./resources/post/resolvers')

function loadTypes(moduleName) {
  return (
    fs.readFileSync(path.join(__dirname, `./resources/${moduleName}/schema.graphql`))
      .toString()
  )
}

const baseSchema = `
  schema {
    query: Query
  }
`

const schema = makeExecutableSchema({
  typeDefs: [
    baseSchema,
    loadTypes('user'),
    loadTypes('post'),
    loadTypes('comment'),
  ],
  resolvers: merge(
    {},
    userResolvers,
    postResolvers
  )
})


const graphQLRouter = graphqlExpress(req => ({
  schema,
  context: {
    req
  }
}))

module.exports = graphQLRouter
