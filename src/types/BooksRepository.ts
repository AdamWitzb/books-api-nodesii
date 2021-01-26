import type { Book } from './Book';

export type InMemoryBooksRepository = {
  getAll: () => Book[];
  add: (book: Book) => void;
  getById: (id: number) => Book | undefined;
  updateById: (id: number, data: Book) => boolean;
  deleteById: (id: number) => boolean;
};

export type AsyncBooksRepository = {
  getAll: () => Promise<Book[]>;
  add: (book: Book) => void;
  getById: (id: number) => Promise<Book | undefined>;
  updateById: (id: number, data: Book) => Promise<boolean>;
  deleteById: (id: number) => Promise<boolean>;
};

export type BooksRepository = InMemoryBooksRepository | AsyncBooksRepository;
