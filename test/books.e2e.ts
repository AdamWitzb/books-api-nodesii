import assert from 'assert';
import supertest from 'supertest';

import app from '../src/createApp';
import { books } from './data.mock';

import type { Book } from '../src/types/Book';

const request = supertest(app);

describe('Books', () => {
  it('lists books', async () => {
    const getBooksRequest = await request
      .get('/books')
      .set('Accept', 'application/json')
      .expect(200);

    assert.deepStrictEqual(getBooksRequest.body, books);
  });

  it('add book', async () => {
    const payload: Book = {
      id: 9,
      authors: 'test',
      title: 'test',
    };

    // add new book
    await request
      .post('/books')
      .set('Accept', 'application/json')
      .send(payload)
      .expect(201);

    // fetch list of books to verify if the added one is present
    const getBooksRequest = await request
      .get('/books')
      .set('Accept', 'application/json')
      .expect(200);

    const booksAfterAdd = books.concat(payload);

    // we expect the test book set plus the payload
    assert.deepStrictEqual(getBooksRequest.body, booksAfterAdd);
  });

  it('edit book', async () => {
    const payload: Book = {
      id: 9,
      authors: 'Edited test',
      title: 'Edited test',
    };

    // update test book
    await request
      .put(`/books/${payload.id}`)
      .set('Accept', 'application/json')
      .send(payload)
      .expect(202);

    // fetch list of books to verify if the added one is present
    const getBooksRequest = await request
      .get('/books')
      .set('Accept', 'application/json')
      .expect(200);

    const booksAfterPut = books.concat(payload);

    // we expect the test book set plus the edited payload
    assert.deepStrictEqual(getBooksRequest.body, booksAfterPut);
  });

  it('delete book', async () => {
    const payload: Book = {
      id: 9,
      authors: 'Edited test',
      title: 'Edited test',
    };

    // update test book
    await request
      .delete(`/books/${payload.id}`)
      .set('Accept', 'application/json')
      .expect(202);

    // fetch list of books to verify if the added one is present
    const getBooksRequest = await request
      .get('/books')
      .set('Accept', 'application/json')
      .expect(200);

    // we expect the test book set again
    assert.deepStrictEqual(getBooksRequest.body, books);
  });
});
