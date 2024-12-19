import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'books'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable()
      table.text('description').notNullable()
      table.integer('category_id').unsigned().references('id').inTable('categories').onDelete('CASCADE')
      table.integer('author_id').unsigned().references('id').inTable('authors').onDelete('CASCADE')
      table.boolean('is_new').defaultTo(false)
      table.boolean('is_popular').defaultTo(false)
      table.boolean('is_recommended').defaultTo(false)
      table.boolean('is_on_sale').defaultTo(false)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}