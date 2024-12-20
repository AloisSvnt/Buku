import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'books'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('slug').unique().notNullable().defaultTo('').after('isOnSale')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
