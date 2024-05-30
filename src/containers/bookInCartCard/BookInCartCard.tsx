import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import { Add, CloseOutlined, Remove } from '@mui/icons-material';
import useThemeColors from '#hooks/useThemeColors';
import { useAppDispatch, useAppSelector } from '#store/store';
import {
  setActiveBookByISBN,
  setBookInCartToStore,
} from '#store/reducers/bookReducer';
import { ActiveBookInfoType } from '#models/bookTypes';
import Divider from '#ui/divider';
import {
  BookInCartCardStyled,
  BookInCartCardWrapper,
  BookImg,
  BookTitle,
  ImgWrapper,
  InfoWrapper,
  TextInfoWrapper,
  BookDescription,
  NumbersWrapper,
  Price,
  DeleteButtonWrapper,
} from './BookInCartCardStyled';

interface Props {
  book: ActiveBookInfoType;
}

const BookInCartCard: React.FC<Props> = (props) => {
  const { book } = props;

  const { booksInCart } = useAppSelector((state) => state.bookReducer);

  const dispatch = useAppDispatch();

  const navigation = useNavigate();

  const { textColorBlack, textColorGray, minusInCartColor } = useThemeColors();

  const handleGoToBookPage = () => {
    dispatch(setActiveBookByISBN(book.isbn13));
    navigation(`/${book.isbn13}`);
  };

  const removeInCartStatus = () => {
    const booksInCartClone: ActiveBookInfoType[] = structuredClone(booksInCart);
    dispatch(
      setBookInCartToStore(
        booksInCartClone.filter(
          (bookInCart: ActiveBookInfoType) => bookInCart.isbn13 !== book.isbn13
        )
      )
    );
  };

  const handleAddBook = () => {
    if (!book.numberOfItemsInCart) return;
    const booksInCartClone: ActiveBookInfoType[] = structuredClone(booksInCart);
    dispatch(
      setBookInCartToStore(
        booksInCartClone.map((item: ActiveBookInfoType) =>
          item.isbn13 === book.isbn13
            ? Object.defineProperty(item, 'numberOfItemsInCart', {
                value: item.numberOfItemsInCart + 1,
              })
            : item
        )
      )
    );
  };

  const handleRemoveBook = () => {
    if (!book.numberOfItemsInCart) return;
    const booksInCartClone: ActiveBookInfoType[] = structuredClone(booksInCart);
    dispatch(
      setBookInCartToStore(
        booksInCartClone.map((item: ActiveBookInfoType) =>
          item.isbn13 === book.isbn13
            ? Object.defineProperty(item, 'numberOfItemsInCart', {
                value: item.numberOfItemsInCart - 1,
              })
            : item
        )
      )
    );
  };

  return (
    <BookInCartCardWrapper>
      <BookInCartCardStyled>
        <InfoWrapper>
          <ImgWrapper $bgColor={book.color} onClick={handleGoToBookPage}>
            <BookImg src={book.image} alt="Favorite book" />
          </ImgWrapper>
          <TextInfoWrapper>
            <BookTitle $color={textColorBlack}>{book.title}</BookTitle>
            <BookDescription $color={textColorGray}>
              {book.subtitle}
            </BookDescription>
            <NumbersWrapper>
              <IconButton
                disabled={book.numberOfItemsInCart <= 1}
                onClick={handleRemoveBook}
                sx={{
                  color: textColorBlack,
                  '&:disabled': { color: minusInCartColor },
                }}
              >
                <Remove />
              </IconButton>
              {book.numberOfItemsInCart}
              <IconButton
                onClick={handleAddBook}
                sx={{ color: textColorBlack }}
              >
                <Add />
              </IconButton>
            </NumbersWrapper>
          </TextInfoWrapper>
        </InfoWrapper>
        <Price $color={textColorBlack}>
          $
          {(
            Number(book.price.slice(1, book.price.length)) *
            book.numberOfItemsInCart
          ).toFixed(2)}
        </Price>
        <DeleteButtonWrapper>
          <Tooltip title="Remove from cart">
            <IconButton onClick={removeInCartStatus} sx={{ padding: '10px' }}>
              <CloseOutlined />
            </IconButton>
          </Tooltip>
        </DeleteButtonWrapper>
      </BookInCartCardStyled>
      <Divider />
    </BookInCartCardWrapper>
  );
};

export default BookInCartCard;
