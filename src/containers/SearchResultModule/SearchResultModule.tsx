import React, { useState } from 'react';
import { getSearchResultDataAction } from '#store/reducers/bookReducer/actions';
import { useAppDispatch, useAppSelector } from '#store/store';
import { BookType } from '#models/bookTypes';
import { UpdateBooksByDataType } from '#models/UpdateBooksType';
import BookCard from '#containers/bookCard';
import PageTitle from '#components/pageTitle';
import Pagination from '#components/pagination';
import {
  SearchedBooksWrapper,
  SearchResultModuleStyled,
} from './SearchResultModuleStyled';

const SearchResultModule: React.FC = () => {
  const { searchString, searchResultData } = useAppSelector(
    (state) => state.bookReducer
  );

  const dispatch = useAppDispatch();

  const [activePage, setActivePage] = useState<string>('1');

  const booksPerPage = 10;

  const updateBooks = (data: UpdateBooksByDataType) => {
    if (searchString === null) return;

    const { currentPage } = data;
    setActivePage(String(currentPage));
    dispatch(getSearchResultDataAction(searchString, String(currentPage)));
  };

  const handlePageSelect = (newPage: number) => {
    updateBooks({ currentPage: newPage });
  };

  return (
    <>
      {searchResultData === null ? (
        'Error'
      ) : (
        <SearchResultModuleStyled>
          <PageTitle>'{searchString}' search results</PageTitle>
          {searchResultData.books.length === 0 &&
            `
            There are no books for this request '${searchString}'`}
          {searchResultData.books.length > 0 && (
            <SearchedBooksWrapper>
              {searchResultData.books.map((book: BookType) => (
                <BookCard key={book.isbn13} book={book} />
              ))}
            </SearchedBooksWrapper>
          )}
          <Pagination
            onPageChange={handlePageSelect}
            activePage={Number(activePage)}
            totalBooksCount={Number(searchResultData.total)}
            rowsPerPage={booksPerPage}
          />
        </SearchResultModuleStyled>
      )}
    </>
  );
};

export default SearchResultModule;
