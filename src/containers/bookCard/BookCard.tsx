import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material';
import useThemeColors from '#hooks/useThemeColors';
import { useAppDispatch } from '#store/store';
import { setActiveBookByISBN } from '#store/reducers/bookReducer';
import { BookType } from '#models/bookTypes';
import {
  BookCardStyled,
  BookImg,
  BookPrice,
  BookSubtitle,
  BookTitle,
  ClickableArea,
  ImgWrapper,
  InfoArea,
} from './BookCardStyled';

interface Props {
  book: BookType;
}

const BookCard: React.FC<Props> = (props) => {
  const { book } = props;

  const { ratingColor, textColorBlack, textColorGray } = useThemeColors();

  const navigation: NavigateFunction = useNavigate();

  const dispatch = useAppDispatch();

  const handleGoToBookPage = () => {
    dispatch(setActiveBookByISBN(book.isbn13));
    navigation(`/${book.isbn13}`);
  };

  return (
    <BookCardStyled>
      <ClickableArea onClick={handleGoToBookPage}>
        <ImgWrapper $color={book.color}>
          <BookImg src={book.image} />
        </ImgWrapper>
        <BookTitle $color={textColorBlack}>{book.title}</BookTitle>
        <BookSubtitle $color={textColorGray}>{book.subtitle}</BookSubtitle>
      </ClickableArea>
      <InfoArea>
        <BookPrice $color={textColorBlack}>{book.price}</BookPrice>
        <Rating value={book.rating} sx={{ color: ratingColor }} readOnly />
      </InfoArea>
    </BookCardStyled>
  );
};

export default BookCard;
