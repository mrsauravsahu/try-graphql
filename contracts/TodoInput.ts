import { ArgsType, Field, InputType } from 'type-graphql'

@InputType()
export class TodoInput {
  @Field()
  public title!: string
  @Field({ nullable: true })
  public description?: string
  @Field()
  public isComplete: boolean = false
}
