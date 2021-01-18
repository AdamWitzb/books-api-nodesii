import assert from 'assert';
import supertest from 'supertest';

import app from '../src/createApp';
import { books } from './data.mock';
import { HTTP } from '../src/consts';

import type { Book } from '../src/types/Book';

const request = supertest(app);

describe('Books', () => {
  it('list books', async () => {
    const getBooksRequest = await request
      .get('/books')
      .set('Accept', 'application/json')
      .expect(HTTP.OK);

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
      .expect(HTTP.CREATED);

    // fetch list of books to verify if the added one is present
    const getBooksRequest = await request
      .get('/books')
      .set('Accept', 'application/json')
      .expect(HTTP.OK);

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
      .expect(HTTP.ACCEPTED);

    // fetch list of books to verify if the added one is present
    const getBooksRequest = await request
      .get('/books')
      .set('Accept', 'application/json')
      .expect(HTTP.OK);

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

    // delete test book
    await request
      .delete(`/books/${payload.id}`)
      .set('Accept', 'application/json')
      .expect(HTTP.ACCEPTED);

    // fetch list of books to verify if the added one is present
    const getBooksRequest = await request
      .get('/books')
      .set('Accept', 'application/json')
      .expect(HTTP.OK);

    // we expect the test book set again
    assert.deepStrictEqual(getBooksRequest.body, books);
  });

  it('handles fetching non-existing book', async () => {
    // delete non-existing book
    await request
      .get(`/books/99999`)
      .set('Accept', 'application/json')
      .expect(HTTP.NOT_FOUND);
  });

  it('handles deleting non-existing book', async () => {
    // delete non-existing book
    await request
      .delete(`/books/99999`)
      .set('Accept', 'application/json')
      .expect(HTTP.NOT_FOUND);
  });
});
