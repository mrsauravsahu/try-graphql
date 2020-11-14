import Factory from '@ioc:Adonis/Lucid/Factory'
import Todo from 'App/Models/Todo'
import { DateTime } from 'luxon'

export const TodosFactory = Factory.define(Todo, ({ faker }) => {
  return {
    title: faker.lorem.words(3),
    description: faker.lorem.words(5),
    isComplete: faker.random.boolean(),
    createdAt: DateTime.fromJSDate(faker.date.past()),
    updatedAt: DateTime.fromJSDate(faker.date.past()),
  }
}).build()
