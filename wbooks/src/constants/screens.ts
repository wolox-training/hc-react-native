export type BookDetailType = 'BookDetails';
export type HomeType = 'Home';
export type LibraryType = 'Library';
export type WishListType = 'Wishlist';

interface Screens {
  BOOK_DETAILS: BookDetailType;
  HOME: HomeType;
  LIBRARY: LibraryType;
  WISHLIST: WishListType;
}

const SCREENS: Screens = {
  BOOK_DETAILS: 'BookDetails',
  HOME: 'Home',
  LIBRARY: 'Library',
  WISHLIST: 'Wishlist'
};

export default SCREENS;
