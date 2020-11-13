import { MetaInfo } from 'Contracts/meta-info'
import { Query, Resolver } from 'type-graphql'

@Resolver()
export class MetaResolver {
  @Query((_) => MetaInfo)
  public async meta() {
    return Promise.resolve({ name: 'hello-graphQL', version: '0.0.0-alpha.1' })
  }
}
