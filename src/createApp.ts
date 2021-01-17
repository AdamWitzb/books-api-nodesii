import { appFactory } from './app';

import { createBooksController } from './controller/books';
import { createInMemoryBooksRepository } from './repository/inMemoryBooksRepository';

import type { BooksRepository } from './types/BooksRepository';
import type { BooksController } from './types/BooksController';

const inMemoryBooksRepository: BooksRepository = createInMemoryBooksRepository();
const booksController: BooksController = createBooksController(
  inMemoryBooksRepository
);

const app = appFactory(booksController);

export default app;
