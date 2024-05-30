import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton, InputBase } from '@mui/material';
import { Clear, Search } from '@mui/icons-material';
import useThemeColors from '#hooks/useThemeColors';
import { useDebounce } from '#hooks/useDebounced';
import { useAppDispatch, useAppSelector } from '#store/store';
import {
  setActiveBookByISBN,
  setIsSearchDropdownActive,
  setSearchStringToStore,
} from '#store/reducers/bookReducer';
import { getSearchResultDataAction } from '#store/reducers/bookReducer/actions';
import { BookType } from '#models/bookTypes';
import { RouterLocationsEnum } from '#router/Router';
import {
  DropWrapper,
  GoToSearchResultButton,
  SearchedBooksDropWrapper,
  SearchInputStyled,
  SearchWrapper,
} from './SearchInputStyled';
import DropdownCard from './DropdownCard';

const SearchInput: React.FC = () => {
  const { searchResultData, searchString, isSearchDropdownActive } =
    useAppSelector((state) => state.bookReducer);

  const dispatch = useAppDispatch();

  const navigation = useNavigate();

  const { inputBgActiveColor, inputBorderColor, inputBgColor, inputTextColor } =
    useThemeColors();

  const [searchValue, setSearchValue] = useState<string>('');
  const [searchedBooks, setSearchedBooks] = useState<BookType[]>([]);


  const debouncedValue = useDebounce(searchValue);

  useEffect(() => {
    if (!debouncedValue) return;
    dispatch(setSearchStringToStore(debouncedValue));
  }, [debouncedValue]);

  useEffect(() => {
    if (!searchString) return;
    dispatch(getSearchResultDataAction(searchString, '1'));
  }, [searchString]);

  useEffect(() => {
    searchResultData && setSearchedBooks(searchResultData.books);
  }, [searchResultData]);

  const handleInputChange = (e: BaseSyntheticEvent) => {
    setSearchValue(e.target.value);
    if (e.target.value === '') {
      dispatch(setIsSearchDropdownActive(false));
      return;
    }
    dispatch(setIsSearchDropdownActive(true));
  };

  const handleSearchSubmit = () => {
    dispatch(setIsSearchDropdownActive(false));
    navigation(RouterLocationsEnum.search);
  };

  const handleClearSearch = () => {
    setSearchValue('');
    dispatch(setIsSearchDropdownActive(false));
  };

  return (
    <SearchWrapper>
      <SearchInputStyled
        $inputBorderColor={inputBorderColor}
        $inputTextColor={inputTextColor}
        $isActive={false}
        $inputBgActiveColor={inputBgActiveColor}
        $inputBgColor={inputBgColor}
      >
        <InputBase
          value={searchValue}
          sx={{ ml: 2, 
            flex: 2, 
            color: inputTextColor }}
          placeholder= "Search"
          onChange={handleInputChange}
        />
        <IconButton
          type="button"
          sx={{
            p: '10px',
            color: inputTextColor,
            '&.Mui-disabled': { visibility: 'hidden' },
          }}
          disabled={!(searchValue.length > 0)}
          onClick={handleClearSearch}
        >
          <Clear />
        </IconButton>
        <IconButton
          type="button"
          sx={{
            p: '10px',
            color: inputTextColor,
            '&.Mui-disabled': { visibility: 'hidden' },
          }}
          aria-label="search"
          disabled={!(searchValue.length > 0)}
          onClick={handleSearchSubmit}
        >
          <Search />
        </IconButton>
      </SearchInputStyled>
      {isSearchDropdownActive && (
        <DropWrapper $bgColor={inputBgColor} $textColor={inputTextColor}>
          {searchedBooks.length === 0 && (
            <>There are no books for your request '{searchString}'</>
          )}
          {searchedBooks.length > 0 && (
            <SearchedBooksDropWrapper>
              {searchedBooks.slice(0, 3).map((book: BookType) => (
                <Link
                  to={`/${book.isbn13}`}
                  onClick={() => [
                    dispatch(setIsSearchDropdownActive(false)),
                    dispatch(setActiveBookByISBN(book.isbn13)),
                    setSearchValue(''),
                  ]}
                  style={{ all: 'unset', width: '100%' }}
                  key={book.isbn13}
                >
                  {searchString && (
                    <DropdownCard
                      key={book.isbn13}
                      book={book}
                      searchValue={searchString}
                    />
                  )}
                </Link>
              ))}
            </SearchedBooksDropWrapper>
          )}
          <GoToSearchResultButton
            $textColor={inputTextColor}
            $bgColor={inputBgColor}
            $hoverBgColor={inputBgActiveColor}
            onClick={handleSearchSubmit}
          >
            View all results
          </GoToSearchResultButton>
        </DropWrapper>
      )}
    </SearchWrapper>
  );
};
export default SearchInput;
