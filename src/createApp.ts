import { appFactory } from './app';
import { createInMemoryBooksRepository } from './repository/inMemoryBooksRepository';

import type { BooksRepository } from './types/BooksRepository';

const booksRepository: BooksRepository = createInMemoryBooksRepository();
const app = appFactory(booksRepository);

export default app;
