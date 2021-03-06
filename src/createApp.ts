import cors from 'cors';

import { db } from './connection/db';
import { getAllowedHosts, HTTP, NODE_ENV } from './consts';

import type { BooksController } from './types/BooksController';
import type { BooksRepository } from './types/BooksRepository';

import { appFactory } from './app';
import { createBooksController } from './controller/books';
import { createPgSQLBooksRepository } from './repository/pgSQLBooksRepository';

const corsOptions: cors.CorsOptions = {
  origin: process.env.NODE_ENV === NODE_ENV ? getAllowedHosts() : '*',
  optionsSuccessStatus: HTTP.OK,
};

const corsMiddleware = cors(corsOptions);
const pgSQLBooksRepository: BooksRepository = createPgSQLBooksRepository(db);
const booksController: BooksController = createBooksController(
  pgSQLBooksRepository
);

const app = appFactory(booksController, corsMiddleware);

export default app;
