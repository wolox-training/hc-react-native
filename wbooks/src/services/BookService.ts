import { BOOKS_MOCK } from '@constants/mockBooks';
import { BookServiceMockedResponse } from '@interfaces/bookServiceMock';

const BookService = {
  getBooks: (): Promise<BookServiceMockedResponse> =>
    new Promise((resolve, reject) => {
      const data = { ok: true, data: BOOKS_MOCK };
      resolve(data);

      const error = { ok: false, problem: 'Something went wrong' };
      reject(error);
    })
};

export default BookService;
