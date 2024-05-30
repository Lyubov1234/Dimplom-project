import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '#store/store';
import { getBooksDataAction } from '#store/reducers/bookReducer/actions';
import { BookType } from '#models/bookTypes';
import { UpdateBooksByDataType } from '#models/UpdateBooksType';
import BookCard from '#containers/bookCard';
import PageTitle from '#components/pageTitle';
import Pagination from '#components/pagination';
import SubscribeToNewsletter from '#containers/SubscribeToNewsletter';
import Divider from '#ui/divider';
import InfoMessage from '#ui/infoMessage';
import { NewBooksModuleStyled, NewBooksWrapper } from './NewBooksModuleStyled'

const NewBooksModule: React.FC = () => {
  const { booksData } = useAppSelector((state) => state.bookReducer);

  const dispatch = useAppDispatch();

  const [activePage, setActivePage] = useState<number>(1);
  const [booksToShow, setBooksToShow] = useState<BookType[]>([]);

  useEffect(() => {
    booksData.books.length === 0 && dispatch(getBooksDataAction());
  }, []);

  const booksPerPage = 12;

  const updateBooks = (data: UpdateBooksByDataType) => {
    const { currentPage } = data;
    setActivePage(currentPage);
    const booksForCurrentPage = booksData.books.slice(
      booksPerPage * (currentPage - 1),
      booksPerPage * currentPage
    );
    setBooksToShow(booksForCurrentPage);
  };

  const handlePageSelect = (newPage: number) => {
    updateBooks({ currentPage: newPage });
  };

  useEffect(() => {
    handlePageSelect(activePage);
  }, [booksData, activePage]);

  return (
    <NewBooksModuleStyled>
      <PageTitle>new releases books</PageTitle>
      <NewBooksWrapper>
        {booksData.error !== '0' && (
          <InfoMessage>{booksData.error}</InfoMessage>
        )}
        {booksToShow.map((book: BookType) => (
          <BookCard book={book} key={book.isbn13} />
        ))}
      </NewBooksWrapper>
      <Divider />
      <Pagination
        onPageChange={handlePageSelect}
        activePage={activePage}
        totalBooksCount={Number(booksData.total)}
        rowsPerPage={booksPerPage}
      />
      <SubscribeToNewsletter />
    </NewBooksModuleStyled>
  );
};

export default NewBooksModule;