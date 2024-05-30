export type BookTypeFromResponse = {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
};

export type BookType = {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
  color: 'blue' | 'orange' | 'purple' | 'green';
  rating: number;
};

export type ResponseNewBooksDataType = {
  error: string;
  total: string;
  books: BookTypeFromResponse[];
};

export type BookDataType = {
  error: string;
  total: string;
  books: BookType[];
};

export type ActiveBookInfoFromResponseType = {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf: object;
};

export type ActiveBookInfoType = {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  color: 'blue' | 'orange' | 'purple' | 'green';
  pdf: object;
  numberOfItemsInCart: number;
};

export type ResponseSearchResultDataType = {
  total: string;
  page: string;
  books: BookTypeFromResponse[];
};

export type SearchResultDataType = {
  total: string;
  page: string;
  books: BookType[];
};
