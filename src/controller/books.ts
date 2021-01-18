import { Request, Response } from 'express';

import { HTTP } from '../consts';

import type { Book } from '../types/Book';
import type { BooksRepository } from '../types/BooksRepository';
import type { BooksController } from '../types/BooksController';
import { BookNotFoundException } from '../exception/bookNotFound';

export const createBooksController = (
  booksRepository: BooksRepository
): BooksController => {
  return {
    createBook(req: Request, res: Response) {
      const body: Book = req.body;
      booksRepository.add(body);

      res.sendStatus(HTTP.CREATED);
    },
    getAllBooks(req: Request, res: Response) {
      res.status(HTTP.OK).json(booksRepository.getAll());
    },
    getBookById(req: Request, res: Response) {
      const id = Number(req.params.id);
      const book = booksRepository.getById(id);

      if (!book) {
        throw new BookNotFoundException(id);
      }

      res.status(HTTP.OK).json();
    },
    updateBookById(req: Request, res: Response) {
      const id = Number(req.params.id);
      const body: Book = req.body;

      const result = booksRepository.updateById(id, body);

      if (!result) {
        throw new BookNotFoundException(id);
      }

      res.sendStatus(HTTP.ACCEPTED);
    },
    deleteBookById(req: Request, res: Response) {
      const id = Number(req.params.id);
      const result = booksRepository.deleteById(id);

      if (!result) {
        throw new BookNotFoundException(id);
      }

      res.sendStatus(HTTP.ACCEPTED);
    },
  };
};
