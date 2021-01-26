import Knex from 'knex';

import type { Book } from '../types/Book';
import type { AsyncBooksRepository } from '../types/BooksRepository';

export const createPgSQLBooksRepository = (db: Knex): AsyncBooksRepository => {
  return {
    getAll() {
      return db<Book>('books').orderBy('id');
    },
    add(data: Book) {
      return db<Book>('books').insert(data);
    },
    async getById(id: number) {
      return db<Book>('books')
        .where({
          id,
        })
        .first();
    },
    updateById(id: number, data: Book) {
      return db<Book>('books').where({ id }).update(data);
    },
    deleteById(id: number) {
      return db<Book>('books').where({ id }).delete();
    },
  };
};
