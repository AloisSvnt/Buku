import { DateTime } from 'luxon'

export type User = {
  id: number
  fullName: string | null
  email: string
  password: string
  isAdmin: boolean
  createdAt: DateTime
  updatedAt: DateTime | null
}