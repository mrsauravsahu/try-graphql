import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Todos extends BaseSchema {
  protected tableName = 'todos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id')
      table.timestamps(true)
      table.string('title')
      table.string('description')
      table.boolean('isComplete')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
