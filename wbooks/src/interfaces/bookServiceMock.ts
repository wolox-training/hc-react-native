import { Book } from '@interfaces/books';

export interface BookServiceMockedResponse {
  data: Book[];
  ok: boolean;
  problem: string;
}
