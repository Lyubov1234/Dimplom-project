import { Dispatch } from '@reduxjs/toolkit';
import {
  getActiveBookInfo,
  getBooksData,
  getSearchResultData,
} from '#api/bookService/bookService';
import {
  setActiveBookInfo,
  setNewBooksDataToStore,
  setSearchResultToStore,
} from '.';
import { AnyAction } from '#store/store';

export const getBooksDataAction =
  () => async (dispatch: Dispatch<AnyAction>) => {
    const booksData = await getBooksData();
    if (!booksData) return;
    const { error, total, books } = booksData;
    dispatch(
      setNewBooksDataToStore({ books: books, error: error, total: total })
    );
  };

export const getActiveBookDataAction =
  (isbn: string) => async (dispatch: Dispatch<AnyAction>) => {
    const activeBookData = await getActiveBookInfo(isbn);
    if (!activeBookData) return;
    dispatch(setActiveBookInfo(activeBookData));
  };

export const getSearchResultDataAction =
  (searchString: string, activePage: string) =>
  async (dispatch: Dispatch<AnyAction>) => {
    const searchResultData = await getSearchResultData(
      searchString,
      activePage
    );
    if (!searchResultData) return;
    dispatch(setSearchResultToStore(searchResultData));
  };
