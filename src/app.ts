import 'express-async-errors';
import express from 'express';

import { createBooksRouter } from './router/books';
import { notFoundHandler, serverErrorHandler } from './error';

import type { BooksController } from './types/BooksController';

export const appFactory = (booksController: BooksController, cors: any) => {
  const app = express();
  const booksRouter = createBooksRouter(booksController);

  app.use(cors);

  app.use(express.json());
  app.use(booksRouter);

  app.use(notFoundHandler);
  app.use(serverErrorHandler);

  return app;
};
