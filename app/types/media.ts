import { Book } from '#types/book';
import { Author } from '#types/author';

export type Media = {
  id: number
  books: Book[]
  authors: Author[]
  createdAt: string
  updatedAt: string
};