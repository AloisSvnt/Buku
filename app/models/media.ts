import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

import Book from '#models/book'
import Author from '#models/author'

export default class Media extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @manyToMany(() => Book, {
    pivotTable: 'book_medias',
  })
  declare books: ManyToMany<typeof Book>

  @manyToMany(() => Author, {
    pivotTable: 'author_medias',
  })
  declare authors: ManyToMany<typeof Author>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}