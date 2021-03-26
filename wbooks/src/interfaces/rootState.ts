import { $CombinedState } from 'redux';
import { BookState } from '@interfaces/bookState';

export type RootState = {
  readonly [$CombinedState]?: undefined;
} & {
  books: BookState;
};
