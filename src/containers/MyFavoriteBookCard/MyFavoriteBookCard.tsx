import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FavoriteOutlined} from '@mui/icons-material';
import { Rating, Tooltip } from '@mui/material';
import useThemeColors from '#hooks/useThemeColors';
import {
  setActiveBookByISBN,
  setFavoriteBookToStore,
} from '#store/reducers/bookReducer';
import { useAppDispatch, useAppSelector } from '#store/store';
import { ActiveBookInfoType } from '#models/bookTypes';
import Divider from '#ui/divider';
import {
  BookDescription,
  BookImg,
  BookNumbers,
  BookTitle,
  ImgWrapper,
  InfoWrapper,
  LikeButton,
  Price,
  FavoriteBookCardStyled,
  FavoriteBookCardWrapper,
  TextInfoWrapper,
  LikeButtonWrapper,
} from './FavoriteBookCardStyled'

interface Props {
  book: ActiveBookInfoType;
}

const favoriteBookCard: React.FC<Props> = (props) => {
  const { book } = props;

  const { favoriteBooks } = useAppSelector((state) => state.bookReducer);

  const dispatch = useAppDispatch();

  const navigation = useNavigate();

  const {
    textColorBlack,
    ratingColor,
    redColor,
    buttonBgHoverColor,
    textColorGray,
  } = useThemeColors();

  const removeLikeStatus = () => {
    const favoriteBooksClone: ActiveBookInfoType[] =
      structuredClone(favoriteBooks);
    dispatch(
      setFavoriteBookToStore(
        favoriteBooksClone.filter(
          (favoriteBook: ActiveBookInfoType) =>
            favoriteBook.isbn13 !== book.isbn13
        )
      )
    );
  };

  const handleGoToBookPage = () => {
    dispatch(setActiveBookByISBN(book.isbn13));
    navigation(`/${book.isbn13}`);
  };

  return (
    <FavoriteBookCardWrapper>
      <FavoriteBookCardStyled>
        <InfoWrapper>
          <ImgWrapper $bgColor={book.color} onClick={handleGoToBookPage}>
            <BookImg src={book.image} alt={book.title} />
          </ImgWrapper>
          <TextInfoWrapper>
            <BookTitle $color={textColorBlack}>{book.title}</BookTitle>
            <BookDescription $color={textColorGray}>
              {book.subtitle}
            </BookDescription>
            <BookNumbers>
              <Price $color={textColorBlack}>{book.price}</Price>
              <Rating
                value={Number(book.rating)}
                sx={{ color: ratingColor }}
                readOnly
              />
            </BookNumbers>
          </TextInfoWrapper>
          <LikeButtonWrapper>
            <Tooltip title="Remove from favorites">
              <LikeButton
                $hoverColor={buttonBgHoverColor}
                $red={redColor}
                onClick={removeLikeStatus}
              >
                <FavoriteOutlined />
              </LikeButton>
            </Tooltip>
          </LikeButtonWrapper>
        </InfoWrapper>
      </FavoriteBookCardStyled>
      <Divider marginBottom={'0px'} />
    </FavoriteBookCardWrapper>
  );
};
export default favoriteBookCard;
