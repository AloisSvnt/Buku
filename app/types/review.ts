import { DateTime } from 'luxon';
import { Book } from '#types/book';
import { User } from '#types/user';

export type Review = {
  id: number
  bookId: number
  book: Book[]
  userId: number
  user: User[]
  rating: number
  content: string
  createdAt: DateTime
  updatedAt: DateTime
};