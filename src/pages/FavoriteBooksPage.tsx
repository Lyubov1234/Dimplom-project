import React from 'react';
import ContentWithHeader from '#containers/contentWithHeader';
import FavoriteBooksModule from '#containers/favoriteBooksModule';

const FavoriteBooksPage: React.FC = () => {
  return (
    <ContentWithHeader>
      <FavoriteBooksModule />
    </ContentWithHeader>
  );
};
export default FavoriteBooksPage;
