/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import 'reflect-metadata'
import 'regenerator-runtime'
import { buildSchema } from 'type-graphql'
import { MetaResolver } from 'App/GraphQL/Resolvers/MetaInfoResolver'
import { ApolloServer } from 'apollo-server'

const initApolloServer = async () => {
  const schema = await buildSchema({
    resolvers: [MetaResolver],
  })

  const server = new ApolloServer({
    schema,
  })

  const { url } = await server.listen(3000)
  console.log(`Apollo server running at: ${url}`)
}

initApolloServer()
