import React from 'react';
import ContentWithHeader from '#containers/contentWithHeader';
import BooksInCartModule from '#containers/booksInCartModule';

const CartPage: React.FC = () => {
  return (
    <ContentWithHeader>
      <BooksInCartModule />
    </ContentWithHeader>
  );
};
export default CartPage;
