import { MetaResolver } from 'App/GraphQL/Resolvers/MetaInfoResolver'
import { buildSchema } from 'type-graphql'
import { graphql } from 'graphql'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class GraphQLRootController {
  public async index({ request }: HttpContextContract) {
    var graphQLQuery = request.input('query')

    var schema = await buildSchema({
      resolvers: [MetaResolver],
    })

    var response = await graphql(schema, graphQLQuery)
    return response
  }
}
