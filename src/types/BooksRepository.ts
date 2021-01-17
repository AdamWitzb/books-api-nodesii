import type { Book } from './Book';

export type BooksRepository = {
  getAll: () => Book[];
  add: (book: Book) => void;
  getById: (id: number) => Book | undefined;
  updateById: (id: number, data: Book) => void;
  deleteById: (id: number) => void;
};
