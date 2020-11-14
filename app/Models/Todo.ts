import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { ObjectType, Field } from 'type-graphql'
import { v4 as uuid } from 'uuid'
@ObjectType()
export default class Todo extends BaseModel {
  @Field()
  @column({ isPrimary: true })
  public id: string = uuid()

  @Field()
  @column()
  public title: string

  @Field({ nullable: true })
  @column()
  public description?: string

  @Field()
  @column()
  public isComplete: boolean = false

  @Field()
  @column.dateTime({
    autoCreate: true,
  })
  public createdAt: DateTime

  @Field()
  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
  })
  public updatedAt: DateTime
}
