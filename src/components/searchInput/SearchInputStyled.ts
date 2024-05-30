import styled from 'styled-components';
import {
  blue,
  ColorsEnum,
  green,
  orange,
  purple,
} from '#styles/colorsConstants';

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchInputStyled = styled.div<{
  $inputBorderColor: string;
  $inputTextColor: string;
  $isActive: boolean;
  $inputBgActiveColor: string;
  $inputBgColor: string;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid ${(props) => props.$inputBorderColor};
  color: ${(props) => props.$inputTextColor};
  background-color: ${(props) =>
    props.$isActive === true ? props.$inputBgActiveColor : props.$inputBgColor};
  gap: 3px;
`;

export const DropWrapper = styled.div<{
  $bgColor: string;
  $textColor: string;
}>`
  position: absolute;
  width: 100%;
  top: 50;
  left: 0;
  z-index: 10;
  padding: 10px;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
`;

export const SearchedBooksDropWrapper = styled.ul`
  all: unset;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  margin-bottom: 5px;
`;

export const SearchedBookCard = styled.li<{ $bgColor: string }>`
  all: unset;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.$bgColor};
  }
`;

export const SearchedBookImageWrapper = styled.div<{ $bgColor: string }>`
  width: 80px;
  height: 60px;
  background-color: ${(props) =>
    props.$bgColor === ColorsEnum.green
      ? green
      : props.$bgColor === ColorsEnum.blue
      ? blue
      : props.$bgColor === ColorsEnum.orange
      ? orange
      : purple};
  padding: 5px;
`;

export const BookImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const BookTitleWrapper = styled.span`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  gap: 0px;
`;

export const BookTitle = styled.p`
  display: inline;
  font-weight: 400;
`;

export const BookTitleBold = styled.p`
  display: inline;
  font-weight: 700;
`;

export const GoToSearchResultButton = styled.button<{
  $textColor: string;
  $bgColor: string;
  $hoverBgColor: string;
}>`
  all: unset;
  width: 100%;
  cursor: pointer;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 42px;
  word-wrap: break-all;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.$hoverBgColor};
  }

  &:active {
    background-color: ${(props) => props.$bgColor};
  }
`;
