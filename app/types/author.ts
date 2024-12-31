import { DateTime } from 'luxon';
import { Book } from '#types/book';

export type Author = {
  id: number
  name: string
  bio: string
  books: Book[]
  createdAt: DateTime
  updatedAt: DateTime
};