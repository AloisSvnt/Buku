import { DateTime } from 'luxon'
import { scope, BaseModel, column, belongsTo, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'

import Category from '#models/category'
import Author from '#models/author'
import Review from '#models/review'
import Media from '#models/media'

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
  declare title: string | null
 
  @column()
  declare description: string | null
 
  @belongsTo(() => Author)
  declare author: BelongsTo<typeof Author>
 
  @column()
  declare authorId: number | null
 
  @manyToMany(() => Category, {
    pivotTable: 'book_categories',
  })
  declare categories: ManyToMany<typeof Category>
 
  @hasMany(() => Review)
  declare reviews: HasMany<typeof Review>
 
  @column()
  declare isNew: boolean | null
 
  @column()
  declare isPopular: boolean | null
 
  @column()
  declare isRecommended: boolean | null
 
  @column()
  declare isOnSale: boolean | null
 
  @column()
  declare slug: string | null
 
  @manyToMany(() => Media, {
    pivotTable: 'book_medias',
  })
  declare media: ManyToMany<typeof Media>
 
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
 
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
 }
 
