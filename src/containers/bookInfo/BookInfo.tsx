import React, { useEffect, useState } from 'react';
import { Tooltip } from '@mui/material';
import { FavoriteBorder, FavoriteOutlined } from '@mui/icons-material';
import useThemeColors from '#hooks/useThemeColors';
import { useAppDispatch, useAppSelector } from '#store/store';
import { setFavoriteBookToStore } from '#store/reducers/bookReducer';
import { ActiveBookInfoType } from '#models/bookTypes';
import PageTitle from '#components/pageTitle';
import InfoMessage from '#ui/infoMessage';
import InfoTabs from './InfoTabs';
import PriceCard from './PriceCard';
import {
  BookInfoWrapper,
  BookInfoStyled,
  ImgAndPriceWrapper,
  ImgWrapper,
  BookImg,
  LikeButton,
  LikeButtonWrapper,
} from './BookInfoStyled';

const BookInfo: React.FC = () => {
  const { activeBookInfo, favoriteBooks, booksInCart } = useAppSelector(
    (state) => state.bookReducer
  );
  const { activeUser } = useAppSelector((state) => state.userReducer);

  const { buttonBgColor, buttonBgHoverColor, backgroundColor, redColor } =
    useThemeColors();

  const dispatch = useAppDispatch();

  const [linkToBook, setLinkToBook] = useState<string | null>(null);
  const [isLikedStatusFromStore, setIsLikedStatusFromStore] =
    useState<boolean>(false);
  const [isInCartStatusFromStore, setIsInCartStatusFromStore] =
    useState<boolean>(false);

  useEffect(() => {
    setLinkToBook(null);
    setIsLikedStatusFromStore(false);
    setIsInCartStatusFromStore(false);

    if (!activeBookInfo) return;

    if (
      favoriteBooks.find(
        (book: ActiveBookInfoType) => book.isbn13 === activeBookInfo.isbn13
      )
    ) {
      setIsLikedStatusFromStore(true);
    }

    if (
      booksInCart.find(
        (book: ActiveBookInfoType) => book.isbn13 === activeBookInfo.isbn13
      )
    ) {
      setIsInCartStatusFromStore(true);
    }

    if (activeBookInfo.pdf === undefined) return;
    setLinkToBook(Object.values(activeBookInfo.pdf)[0]);
  }, [activeBookInfo, favoriteBooks, booksInCart]);

  const toggleLikeStatus = () => {
    if (!activeBookInfo) return;

    const favoriteBooksClone: ActiveBookInfoType[] =
      structuredClone(favoriteBooks);

    if (isLikedStatusFromStore) {
      setIsLikedStatusFromStore(false);
      dispatch(
        setFavoriteBookToStore(
          favoriteBooksClone.filter(
            (book: ActiveBookInfoType) => book.isbn13 !== activeBookInfo.isbn13
          )
        )
      );
    } else {
      setIsLikedStatusFromStore(true);
      favoriteBooksClone.unshift(activeBookInfo);
      dispatch(setFavoriteBookToStore(favoriteBooksClone));
    }
  };

  return (
    <BookInfoWrapper>
      {activeBookInfo === null ? (
        <InfoMessage>Server error. Please try again later</InfoMessage>
      ) : activeBookInfo.error !== '0' ? (
        <InfoMessage>{activeBookInfo.error} </InfoMessage>
      ) : (
        <BookInfoStyled>
          <PageTitle>{activeBookInfo.title}</PageTitle>
          <ImgAndPriceWrapper>
            <ImgWrapper $bgColor={activeBookInfo.color}>
              <Tooltip
                title={
                  activeUser ? 'Add to favorites' : 'Sing in to use favorites'
                }
              >
                <LikeButtonWrapper>
                  <LikeButton
                    $color={buttonBgColor}
                    $hoverColor={buttonBgHoverColor}
                    $iconColor={backgroundColor}
                    $isLiked={isLikedStatusFromStore}
                    $red={redColor}
                    onClick={toggleLikeStatus}
                    disabled={!activeUser}
                  >
                    {isLikedStatusFromStore ? (
                      <FavoriteOutlined />
                    ) : (
                      <FavoriteBorder />
                    )}
                  </LikeButton>
                </LikeButtonWrapper>
              </Tooltip>
              <BookImg src={activeBookInfo.image} />
            </ImgWrapper>
            <PriceCard
              book={activeBookInfo}
              linkToBook={linkToBook}
              isInCartStatus={isInCartStatusFromStore}
            />
          </ImgAndPriceWrapper>
          <InfoTabs book={activeBookInfo} />
        </BookInfoStyled>
      )}
    </BookInfoWrapper>
  );
};

export default BookInfo;
