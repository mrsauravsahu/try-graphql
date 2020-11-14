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

  @Field((_) => String)
  @column.dateTime({
    autoCreate: true,
    serialize: (value: DateTime) => value.toISOTime()
  })
  public createdAt: DateTime

  @Field((_) => String)
  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    serialize: (value: DateTime) => value.toISOTime()
  })
  public updatedAt: DateTime
}
