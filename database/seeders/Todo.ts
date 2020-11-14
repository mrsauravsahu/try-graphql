import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { TodosFactory } from 'Database/factories/TodosFactory'

export default class TodoSeeder extends BaseSeeder {
  public async run() {
    await TodosFactory.createMany(10)
  }
}
