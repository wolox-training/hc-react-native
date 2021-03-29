import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Book } from '@interfaces/books';
import { BookState } from '@interfaces/bookState';
import { RootState } from '@interfaces/rootState';
import actionCreators from '@redux/book/actions';

function useFilteredBooks() {
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  const dispatch = useDispatch();
  const { books, searchedBook } = useSelector<RootState, BookState>(state => state.books);

  useEffect(() => {
    dispatch(actionCreators.getBooks());
  }, [dispatch]);

  useEffect(() => {
    setFilteredBooks(books.filter(item => item.title.toLowerCase().includes(searchedBook.toLowerCase())));
  }, [books, searchedBook]);

  return filteredBooks;
}

export default useFilteredBooks;
