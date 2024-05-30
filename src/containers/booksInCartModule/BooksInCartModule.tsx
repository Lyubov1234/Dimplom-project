import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '#store/store';
import { setBookInCartToStore } from '#store/reducers/bookReducer';
import { ActiveBookInfoType } from '#models/bookTypes';
import PageTitle from '#components/pageTitle';
import BookInCartCard from '#containers/bookInCartCard';
import OrderDetails from '#containers/OrderDetails';
import GoBackButton from '#ui/goBackButton';
import InfoMessage from '#ui/infoMessage';
import { BooksInCartModuleStyled } from './BooksInCartModuleStyled';

const BooksInCartModule: React.FC = () => {
  const { booksInCart } = useAppSelector((state) => state.bookReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!booksInCart) return;

    const booksInCartClone: ActiveBookInfoType[] = structuredClone(booksInCart);
    booksInCartClone.map((item: ActiveBookInfoType) =>
      item.numberOfItemsInCart === 0
        ? (item.numberOfItemsInCart = 1)
        : item.numberOfItemsInCart
    );
    dispatch(setBookInCartToStore(booksInCartClone));
  }, []);

  return (
    <BooksInCartModuleStyled>
      <GoBackButton />
      <PageTitle>your cart</PageTitle>
      {booksInCart.length === 0 ? (
        <InfoMessage>Please add some books to your cart</InfoMessage>
      ) : (
        <>
          {booksInCart.map((book: ActiveBookInfoType) => (
            <BookInCartCard key={book.isbn13} book={book} />
          ))}
          <OrderDetails />
        </>
      )}
    </BooksInCartModuleStyled>
  );
};

export default BooksInCartModule;
