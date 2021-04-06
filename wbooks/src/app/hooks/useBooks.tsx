import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Book } from '@interfaces/books';
import { BookState } from '@interfaces/bookState';
import { RootState } from '@interfaces/rootState';
import actionCreators from '@redux/book/actions';

function useBooks() {
  const dispatch = useDispatch();
  const { books, searchedBook } = useSelector<RootState, BookState>(state => state.books);

  useEffect(() => {
    dispatch(actionCreators.getBooks());
  }, [dispatch]);

  const filteredBooks: Book[] = useMemo(() => {
    return books.filter(item => item.title.toLowerCase().includes(searchedBook.toLowerCase()));
  }, [books, searchedBook]);

  return { books, searchedBook, filteredBooks };
}

export default useBooks;
