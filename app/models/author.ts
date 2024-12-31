import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

import Media from '#models/media'
import Book from '#models/book'

export default class Author extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare bio: string

  @manyToMany(() => Media, {
    pivotTable: 'author_medias',
  })
  declare media: ManyToMany<typeof Media>

  @manyToMany(() => Book, {
    pivotTable: 'book_authors',
  })
  declare books: ManyToMany<typeof Book>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}