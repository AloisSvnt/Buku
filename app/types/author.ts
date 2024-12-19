import { DateTime } from 'luxon';

export type Author = {
  id: number;
  name: string;
  bio: string;
  createdAt: DateTime;
  updatedAt: DateTime;
};