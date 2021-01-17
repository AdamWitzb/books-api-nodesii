import express from 'express';

import { createBooksRouter } from './router/books';

import type { BooksController } from './types/BooksController';

export const appFactory = (booksController: BooksController) => {
  const app = express();
  const booksRouter = createBooksRouter(booksController);

  app.use(express.json());
  app.use(booksRouter);

  return app;
};
