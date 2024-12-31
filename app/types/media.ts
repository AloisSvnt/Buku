import { Book } from '#types/book';
import { Author } from '#types/author';

export type Media = {
  id: number
  name: string
  path: string
  altText: string
  books: Book[] | null
  authors: Author[] | null
  createdAt: string
  updatedAt: string
};