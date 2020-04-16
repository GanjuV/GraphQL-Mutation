import { GraphQLServer } from 'graphql-yoga'
import db from './db'
import Mutation from './resolvers/mutation'
import Query from './resolvers/query'
import Post from './resolvers/post'
import User from './resolvers/user'
import Comment from './resolvers/comment'
// Mutation 
// mutation is used for creating and updating data in graphQL
// Same like query 

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    Post,
    Comment,
    User
  },
  context: {
    // User for auth token or database
    db
  }
})

server.start(() => {
  console.log('The server is up!')
})