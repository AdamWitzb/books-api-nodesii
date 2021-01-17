import express from 'express';

import type { BooksController } from '../types/BooksController';

export const createBooksRouter = (booksController: BooksController) => {
  const booksRouter = express.Router();

  booksRouter.get('/books', booksController.getAllBooks);
  booksRouter.get('/books/:id', booksController.getBookById);
  booksRouter.post('/books', booksController.createBook);
  booksRouter.put('/books/:id', booksController.updateBookById);
  booksRouter.delete('/books/:id', booksController.deleteBookById);

  return booksRouter;
};
