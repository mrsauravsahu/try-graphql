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
import { DateTime } from 'luxon'
import { ApolloServer } from 'apollo-server'

import { MetaResolver } from 'App/GraphQL/Resolvers/MetaInfoResolver'
import Env from '@ioc:Adonis/Core/Env'
import Logger from '@ioc:Adonis/Core/Logger'
import { TodosResolver } from 'App/GraphQL/Resolvers/TodosResolver'
import GraphQLLuxonDateTime from 'App/Utils/GraphQLLuxonDateTime'

const initApolloServer = async () => {
  const schema = await buildSchema({
    resolvers: [MetaResolver, TodosResolver],
    scalarsMap: [{ type: DateTime, scalar: GraphQLLuxonDateTime }],
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
