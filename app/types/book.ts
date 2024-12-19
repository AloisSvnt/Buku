import { DateTime } from "luxon"

export type Book = {
  id: number
  title: string
  description: string
  category: string
  author: string
  reviews: string
  isNew: boolean
  isPopular: boolean
  isRecommended: boolean
  isOnSale: boolean
  createdAt: DateTime
  updatedAt: DateTime
}