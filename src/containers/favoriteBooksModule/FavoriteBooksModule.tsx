import React from 'react';
import { useAppSelector } from '#store/store';
import { ActiveBookInfoType } from '#models/bookTypes';
import FavoriteBookCard from '#containers/MyFavoriteBookCard';
import PageTitle from '#components/pageTitle';
import GoBackButton from '#ui/goBackButton';
import InfoMessage from '#ui/infoMessage';
import { FavoriteBooksModuleStyled } from './FavoriteBooksModuleStyled';

const FavoriteBooksModule: React.FC = () => {
  const { favoriteBooks } = useAppSelector((state) => state.bookReducer);

  return (
    <FavoriteBooksModuleStyled>
      <GoBackButton />
      <PageTitle>favorites</PageTitle>
      {favoriteBooks.length === 0 ? (
        <InfoMessage>Please add some books to your favorite</InfoMessage>
      ) : (
        favoriteBooks.map((book: ActiveBookInfoType) => (
          <FavoriteBookCard key={book.isbn13} book={book} />
        ))
      )}
    </FavoriteBooksModuleStyled>
  );
};

export default FavoriteBooksModule;
