import { DateTime } from 'luxon';

export type Review = {
  id: number;
  bookId: number;
  userId: number;
  rating: number;
  review: string;
  createdAt: DateTime;
  updatedAt: DateTime;
};