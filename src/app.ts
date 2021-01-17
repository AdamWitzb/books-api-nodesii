import express from 'express';

import { BooksController } from './types/BooksController';

export const appFactory = (booksController: BooksController) => {
  const app = express();

  app.use(express.json());

  app.get('/books', booksController.getAllBooks);
  app.get('/books/:id', booksController.getBookById);
  app.post('/books', booksController.createBook);
  app.put('/books/:id', booksController.updateBookById);
  app.delete('/books/:id', booksController.deleteBookById);

  return app;
};
