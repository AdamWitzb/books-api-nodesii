import type { Request, Response } from 'express';

export type BooksController = {
  createBook: (req: Request, res: Response) => void;
  getAllBooks: (req: Request, res: Response) => void;
  getBookById: (req: Request, res: Response) => void;
  updateBookById: (req: Request, res: Response) => void;
  deleteBookById: (req: Request, res: Response) => void;
};
