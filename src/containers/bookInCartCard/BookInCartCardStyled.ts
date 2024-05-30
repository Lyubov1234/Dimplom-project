import styled from 'styled-components';
import {
  blue,
  orange,
  purple,
  green,
  ColorsEnum,
} from '#styles/colorsConstants';

export const BookInCartCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 48px;

  @media screen and (max-width: 650px) {
    align-items: center;
  }
`;

export const BookInCartCardStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    width: 50%;
    position: relative;
  }
`;

export const InfoWrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 650px) {
    width: 100%;
    flex-direction: column;
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
    width: 75%;
  }
`;

export const BookImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const TextInfoWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  @media screen and (max-width: 650px) {
    width: 100%;
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

export const NumbersWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  font-family: 'Bebas Neue';
  font-weight: 700;
  line-height: 32px;
  word-wrap: break-word;

  @media screen and (max-width: 992px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media screen and (max-width: 650px) {
    align-self: center;
  }
`;

export const Price = styled.span<{ $color: string }>`
  font-size: 40px;
  font-family: 'Bebas Neue';
  font-weight: 700;
  line-height: 60px;
  word-wrap: break-word;
  color: ${(props) => props.$color};

  @media screen and (max-width: 992px) {
    font-size: 32px;
  }
`;

export const DeleteButtonWrapper = styled.div<{}>`
  @media screen and (max-width: 650px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 5px;
  }

  @media screen and (max-width: 500px) {
    position: absolute;
    top: 5px;
    right: 0px;
  }
`;
