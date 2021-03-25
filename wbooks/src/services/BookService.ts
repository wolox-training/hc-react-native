import { BOOKS_MOCK } from '@constants/mockBooks';
import { BookServiceMockedResponse } from '@interfaces/bookServiceMock';

const BookService = {
  getBooks: (): Promise<BookServiceMockedResponse> =>
    new Promise(resolve => {
      const data = { ok: true, data: BOOKS_MOCK, problem: 'Something went wrong' };
      resolve(data);
    })
};

export default BookService;
