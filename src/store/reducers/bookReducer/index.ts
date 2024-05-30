import { createSlice } from '@reduxjs/toolkit';
import {
  ActiveBookInfoType,
  BookDataType,
  SearchResultDataType,
} from '#models/bookTypes';

type BookReducerType = {
  booksData: BookDataType;
  searchString: string | null;
  activeBookISBN: string | null;
  activeBookInfo: ActiveBookInfoType | null;
  searchResultData: SearchResultDataType | null;
  favoriteBooks: ActiveBookInfoType[];
  booksInCart: ActiveBookInfoType[];
  isSearchDropdownActive: boolean;
};

const bookReducer = createSlice({
  name: 'book',
  initialState: {
    booksData: { books: [], error: '', total: '' },
    searchString: null,
    activeBookISBN: null,
    activeBookInfo: null,
    searchResultData: null,
    favoriteBooks: [],
    booksInCart: [],
    isSearchDropdownActive: false,
  } as BookReducerType,

  reducers: {
    setNewBooksDataToStore: (state, action) => {
      state.booksData = action.payload;
    },
    setActiveBookByISBN: (state, action) => {
      state.activeBookISBN = action.payload;
    },
    setActiveBookInfo: (state, action) => {
      state.activeBookInfo = action.payload;
    },
    setSearchStringToStore: (state, action) => {
      state.searchString = action.payload;
    },
    setSearchResultToStore: (state, action) => {
      state.searchResultData = action.payload;
    },
    setFavoriteBookToStore: (state, action) => {
      state.favoriteBooks = action.payload;
    },
    setBookInCartToStore: (state, action) => {
      state.booksInCart = action.payload;
    },
    setIsSearchDropdownActive: (state, action) => {
      state.isSearchDropdownActive = action.payload;
    },
  },
});

export const {
  setNewBooksDataToStore,
  setActiveBookByISBN,
  setActiveBookInfo,
  setSearchStringToStore,
  setSearchResultToStore,
  setFavoriteBookToStore,
  setBookInCartToStore,
  setIsSearchDropdownActive,
} = bookReducer.actions;

export default bookReducer.reducer;
