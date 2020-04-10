import { GraphQLServer } from 'graphql-yoga';

// Mutation bootcamp

const typeDefs = `
  type Query {
  }

  
`
// Resolvers - set of function used to get the data from db etc
// Resolvers function have 4 arguments | parent ==>  when working with relation data, 
// args ==> info we need operation args,
// ctx ==> like if user is logged in this will have the id so we can use it further  
// info ==> info regarding operation regadin server.
const resolvers = {
  Query: {}
}

const server = new GraphQLServer({
  typeDefs, 
  resolvers
})

server.start(() => {
  console.log("server is up at localhost:4000")
})