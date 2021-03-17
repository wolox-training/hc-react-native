export type LibraryType = 'Library';
export type BookDetailType = 'BookDetails';

interface Screens {
  LIBRARY: LibraryType;
  BOOK_DETAILS: BookDetailType;
}

const SCREENS: Screens = {
  LIBRARY: 'Library',
  BOOK_DETAILS: 'BookDetails'
};

export default SCREENS;
