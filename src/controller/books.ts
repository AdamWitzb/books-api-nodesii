import { Request, Response } from 'express';

import { HTTP } from '../consts';

import type { Book } from '../types/Book';
import type { BooksRepository } from '../types/BooksRepository';
import type { BooksController } from '../types/BooksController';

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

      res.status(HTTP.OK).json(booksRepository.getById(id));
    },
    updateBookById(req: Request, res: Response) {
      const id = Number(req.params.id);
      const body: Book = req.body;

      booksRepository.updateById(id, body);

      res.sendStatus(HTTP.ACCEPTED);
    },
    deleteBookById(req: Request, res: Response) {
      const id = Number(req.params.id);

      booksRepository.deleteById(id);

      res.sendStatus(HTTP.ACCEPTED);
    },
  };
};
