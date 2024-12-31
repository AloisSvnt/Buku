import { DateTime } from "luxon";

export type Category = {
  id: number
  name: string
  description: string
  createdAt: DateTime
  updatedAt: DateTime
};