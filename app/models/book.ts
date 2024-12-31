import { DateTime } from 'luxon'
import { scope, BaseModel, column, belongsTo, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'

import Category from '#models/category'
import Author from '#models/author'
import Review from '#models/review'

export default class Book extends BaseModel {
  
  static existingTitle = scope((query, title: string) => {
    query.where('title', 'like', title)
  })

  static existingSlug = scope((query, slug: string) => {
    query.where('slug', 'like', `${slug}%`)
  })

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare description: string

  @column()
  declare categoryId: number

  @manyToMany(() => Category, {
    pivotTable: 'book_categories',
  })
  declare categories: ManyToMany<typeof Category>

  @column()
  declare authorId: number

  @belongsTo(() => Author)
  declare author: BelongsTo<typeof Author>

  @hasMany(() => Review)
  declare reviews: HasMany<typeof Review>

  @column()
  declare isNew: boolean

  @column()
  declare isPopular: boolean

  @column()
  declare isRecommended: boolean

  @column()
  declare isOnSale: boolean

  @column()
  declare slug: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
