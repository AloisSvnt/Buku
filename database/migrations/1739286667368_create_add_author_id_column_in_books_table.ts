import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'books'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .integer('author_id')
        .unsigned()
        .references('id')
        .inTable('authors')
        .onDelete('CASCADE')
        .after('description')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
