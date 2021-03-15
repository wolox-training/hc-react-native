import React from 'react';
import SingleBook from '@app/components/SingleBook';
import { BOOKS_MOCK } from '@constants/mockBooks';

import LibraryWrapper from './LibraryWrapper';

function Library() {
  return (
    <LibraryWrapper>
      <SingleBook
        bookCover={BOOKS_MOCK[2].imageUrl}
        bookTitle={BOOKS_MOCK[2].title}
        bookAuthor={BOOKS_MOCK[2].author}
      />
    </LibraryWrapper>
  );
}

export default Library;
