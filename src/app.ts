import express, { Request, Response } from 'express';

import type { Book } from './types/Book';
import type { BooksRepository } from './types/BooksRepository';

export const appFactory = (booksRepository: BooksRepository) => {
  const app = express();

  app.use(express.json());

  app.get('/books', (req: Request, res: Response) => {
    res.status(200).json(booksRepository.getAll());
  });

  app.get('/books/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);

    res.status(200).json(booksRepository.getById(id));
  });

  app.post('/books', (req: Request, res: Response) => {
    const body: Book = req.body;
    booksRepository.add(body);

    res.sendStatus(201);
  });

  app.put('/books/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const body: Book = req.body;

    booksRepository.updateById(id, body);

    res.sendStatus(202);
  });

  app.delete('/books/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);

    booksRepository.deleteById(id);

    res.sendStatus(202);
  });

  return app;
};
