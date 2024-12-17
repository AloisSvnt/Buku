import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare description: string

  @column()
  declare category: string // TODO: add pivot table for categories

  @column()
  declare author: string // TODO: add pivot table for authors

  @column()
  declare reviews: string // TODO: add pivot table for reviews

  @column()
  declare isNew : boolean

  @column()
  declare isPopular: boolean

  @column()
  declare isRecommended: boolean

  @column()
  declare isOnSale: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}