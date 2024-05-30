import React, { useCallback } from 'react';
import useThemeColors from '#hooks/useThemeColors';
import { BookType } from '#models/bookTypes';
import {
  BookImage,
  BookTitle,
  BookTitleBold,
  BookTitleWrapper,
  SearchedBookCard,
  SearchedBookImageWrapper,
} from './SearchInputStyled';

const Highlight = (props: { value: string; strings: string }) => {
  const { value, strings } = props;
  if (!value) {
    return <>{strings}</>;
  }
  const regexp = new RegExp(value);
  const matchValue = strings.match(regexp);
  if (matchValue) {
    return (
      <>
        {strings
          .split(regexp)
          .map((s: string, index: number, array: string[]) => {
            if (index < array.length - 1) {
              const matchWord = matchValue.shift();
              if (matchWord) {
                return (
                  <>
                    {s}
                    <BookTitleBold>{matchWord}</BookTitleBold>
                    {strings.split(matchWord)[1]}
                  </>
                );
              }
              return <>{strings}</>;
            }
          })}
      </>
    );
  }
  return <>{strings}</>;
};

interface Props {
  book: BookType;
  searchValue: string;
}

const DropdownCard: React.FC<Props> = (props) => {
  const { book, searchValue } = props;

  const { inputBgActiveColor } = useThemeColors();

  const boldText = useCallback(
    (strings: string) => {
      return <Highlight value={searchValue} strings={strings} />;
    },
    [searchValue]
  );

  return (
    <SearchedBookCard $bgColor={inputBgActiveColor}>
      <SearchedBookImageWrapper $bgColor={book.color}>
        <BookImage src={book.image} alt="book" />
      </SearchedBookImageWrapper>
      <BookTitleWrapper>
        <BookTitle>{boldText(book.title)}</BookTitle>
      </BookTitleWrapper>
    </SearchedBookCard>
  );
};

export default DropdownCard;
