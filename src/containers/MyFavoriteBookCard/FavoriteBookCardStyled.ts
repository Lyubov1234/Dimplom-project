import styled from 'styled-components';
import {
  blue,
  orange,
  purple,
  green,
  ColorsEnum,
} from '#styles/colorsConstants';

export const FavoriteBookCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 48px;
`;

export const FavoriteBookCardStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;

  @media screen and (max-width: 650px) {
    width: 50%;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 48px;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    position: relative;
    margin-bottom: 24px;
  }
`;

export const ImgWrapper = styled.div<{
  $bgColor: string;
}>`
  width: 20%;
  cursor: pointer;
  display: flex;
  padding: 0 45px;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s;
  background-color: ${(props) =>
    props.$bgColor === ColorsEnum.blue
      ? blue
      : props.$bgColor === ColorsEnum.orange
      ? orange
      : props.$bgColor === ColorsEnum.purple
      ? purple
      : green};

  @media screen and (max-width: 650px) {
    width: 50%;
  }
`;

export const BookImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const TextInfoWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  @media screen and (max-width: 500px) {
    width: 75%;
  }
`;

export const BookTitle = styled.h4<{ $color: string }>`
  all: unset;
  color: ${(props) => props.$color};
  font-size: 24px;
  font-family: 'Bebas Neue';
  font-weight: 700;
  line-height: 30px;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 992px) {
    font-size: 20px;
  }
`;

export const BookDescription = styled.span<{ $color: string }>`
  color: ${(props) => props.$color};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
  margin-bottom: 24px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 992px) {
    font-size: 12px;
    margin-bottom: 12px;
  }
`;

export const BookNumbers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
`;

export const Price = styled.span<{ $color: string }>`
  color: ${(props) => props.$color};
  transition: 0.2s;
  font-size: 40px;
  transition: 0.2s;
  font-family: 'Bebas Neue';
  font-weight: 700;
  line-height: 60px;

  @media screen and (max-width: 992px) {
    font-size: 24px;
  }
`;

export const LikeButtonWrapper = styled.div`
  @media screen and (max-width: 650px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 5px;
    right: 20%;
  }

  @media screen and (max-width: 500px) {
    position: absolute;
    top: 5px;
    right: 15%;
  }
`;

export const LikeButton = styled.button<{
  $hoverColor: string;
  $red: string;
}>`
  all: unset;
  cursor: pointer;
  padding: 15px;
  color: ${(props) => props.$red};
  border-radius: 50%;
  transition: 0.2s;

  &:hover {
    color: ${(props) => props.$hoverColor};
  }

  @media screen and (max-width: 650px) {
    background-color: ${(props) => props.$hoverColor};
    padding: 10px;
  }
`;
