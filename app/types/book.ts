import { DateTime } from 'luxon'
import { Category } from '#types/category'
import { Author } from '#types/author'
import { Review } from '#types/review'
import { Media } from '#types/media'

export type Book = {
 id: number
 title: string
 description: string
 categories: Category[]
 author: Author[]
 reviews: Review[]
 isNew: boolean | null
 isPopular: boolean | null
 isRecommended: boolean | null
 isOnSale: boolean | null
 slug: string | null
 media: Media[]
 createdAt: DateTime
 updatedAt: DateTime
}