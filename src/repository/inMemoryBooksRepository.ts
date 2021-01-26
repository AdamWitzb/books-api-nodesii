import type { Book } from '../types/Book';
import type { InMemoryBooksRepository } from '../types/BooksRepository';

export const createInMemoryBooksRepository = (): InMemoryBooksRepository => {
  let books: Book[] = [
    {
      id: 1,
      authors: ['Jonathan Haidt'],
      title: 'Coddling of the American Mind',
    },
    {
      id: 2,
      authors: ['Dan Heath', 'Chip Heath'],
      title: 'Switch: How to change when change is hard',
    },
    { id: 3, authors: ['Kathy Sierra'], title: 'Badass: Making users awesome' },
    {
      id: 4,
      authors: ['Daniel Kahneman'],
      title: 'Thinking fast, thinking slow',
    },
    { id: 5, authors: ['Caroline Dweck'], title: 'Mindset' },
    { id: 6, authors: ['Michael Walker'], title: 'Why we sleep?' },
  ];

  return {
    getAll() {
      return books;
    },
    add(data: Book) {
      books = books.concat(data);
    },
    getById(id: number) {
      return books.filter((book) => book.id === id).pop();
    },
    updateById(id: number, data: Book) {
      let result = false;

      const markUpdated = (book: Book) => {
        result = true;
        return book;
      };

      books = books.map((book) => (book.id === id ? markUpdated(data) : book));

      return result;
    },
    deleteById(id: number) {
      const count = books.length;
      books = books.filter((book) => book.id !== id);

      return books.length !== count;
    },
  };
};
