import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class MetaInfo {
  @Field()
  public name!: string
  @Field()
  public version!: string
}
