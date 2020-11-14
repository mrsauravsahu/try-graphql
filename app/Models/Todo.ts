import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { ObjectType, Field } from 'type-graphql'
@ObjectType()
export default class Todo extends BaseModel {
  @Field()
  @column({ isPrimary: true })
  public id: string

  @Field()
  @column()
  public title: string

  @Field()
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
