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
import Env from '@ioc:Adonis/Core/Env'
import Logger from '@ioc:Adonis/Core/Logger'
import { ApolloServer } from 'apollo-server'

const initApolloServer = async () => {
  const schema = await buildSchema({
    resolvers: [MetaResolver],
  })

  const server = new ApolloServer({
    schema,
  })

  const port = Env.get('GRAPHQL_PORT')
  const { url: graphQLUrl } = await server.listen(port)
  Logger.info(`Apollo server running at: ${graphQLUrl}`)
  Logger.info(`GraphQL endpoint: ${graphQLUrl}graphql`)
}

initApolloServer()
