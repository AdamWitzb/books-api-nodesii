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
    async createBook(req: Request, res: Response) {
      const body: Book = req.body;

      await booksRepository.add(body);

      res.sendStatus(HTTP.CREATED);
    },
    async getAllBooks(req: Request, res: Response) {
      res.status(HTTP.OK).json(await booksRepository.getAll());
    },
    async getBookById(req: Request, res: Response) {
      const id = Number(req.params.id);
      const book = await booksRepository.getById(id);

      if (!book) {
        throw new BookNotFoundException(id);
      }

      res.status(HTTP.OK).json();
    },
    async updateBookById(req: Request, res: Response) {
      const id = Number(req.params.id);
      const body: Book = req.body;

      const result = await booksRepository.updateById(id, body);

      if (!result) {
        throw new BookNotFoundException(id);
      }

      res.sendStatus(HTTP.ACCEPTED);
    },
    async deleteBookById(req: Request, res: Response) {
      const id = Number(req.params.id);
      const result = await booksRepository.deleteById(id);

      if (!result) {
        throw new BookNotFoundException(id);
      }

      res.sendStatus(HTTP.ACCEPTED);
    },
  };
};
