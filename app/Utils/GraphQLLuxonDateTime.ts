import { GraphQLScalarType } from 'graphql'
import { DateTime } from 'luxon'

const config = {
  name: 'LuxonDateTime',
  description: "GraphQL Scalar type for Luxon's DateTime",
  serialize: (value: DateTime) => {
    return value.toUTC().toISO()
  },
  parseValue: (value: string) => {
    return DateTime.fromISO(value)
  },
}

export default new GraphQLScalarType(config)
