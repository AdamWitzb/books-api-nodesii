import cors from 'cors';

import { appFactory } from './app';

import { createBooksController } from './controller/books';
import { createInMemoryBooksRepository } from './repository/inMemoryBooksRepository';

import type { BooksRepository } from './types/BooksRepository';
import type { BooksController } from './types/BooksController';
import { HTTP } from './consts';

const corsOptions: cors.CorsOptions = {
  origin: process.env.NODE_ENV === 'production' ? 'http://localhost:3000' : '*',
  optionsSuccessStatus: HTTP.OK,
};

const corsMiddleware = cors(corsOptions);

const inMemoryBooksRepository: BooksRepository = createInMemoryBooksRepository();
const booksController: BooksController = createBooksController(
  inMemoryBooksRepository
);

const app = appFactory(booksController, corsMiddleware);

export default app;
