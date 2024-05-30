import styled from 'styled-components';
import {
  blue,
  ColorsEnum,
  green,
  orange,
  purple,
} from '#styles/colorsConstants';

export const BookInfoWrapper = styled.div`
  width: 100%;
`;

export const BookInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const ImgAndPriceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ImgWrapper = styled.div<{
  $bgColor?: string;
}>`
  position: relative;
  width: 35%;
  display: flex;
  padding: 40px 80px;
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

  @media screen and (max-width: 767px) {
    width: 80%;
    padding: 20px 40px;
    align-self: center;
    margin-bottom: 20px;
  }
`;

export const BookImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const LikeButtonWrapper = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 56px;
  height: 56px;
`;

export const LikeButton = styled.button<{
  $color: string;
  $hoverColor: string;
  $iconColor: string;
  $isLiked: boolean;
  $red: string;
}>`
  all: unset;
  background-color: ${(props) => props.$color};
  color: ${(props) => (props.$isLiked ? props.$red : props.$iconColor)};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.$hoverColor};
  }

  &:active {
    background-color: ${(props) => props.$color};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${(props) => props.$hoverColor};

    &:hover {
      background-color: ${(props) => props.$color};
    }
  }
`;

export const PriceCard = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const NumbersLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.span<{ $color: string }>`
  color: ${(props) => props.$color};
  transition: 0.2s;
  font-size: 40px;
  transition: 0.2s;
  font-family: 'Bebas Neue';
  font-weight: 700;
  line-height: 60px;
`;

export const DetailArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

export const DetailRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DetailName = styled.span<{ $color: string }>`
  font-size: 16px;
  transition: 0.2s;
  color: ${(props) => props.$color};
  font-weight: 400;
  line-height: 32px;
  text-transform: capitalize;
`;

export const DetailValue = styled.span<{ $color: string }>`
  font-size: 16px;
  max-width: 60%;
  text-align: right;
  transition: 0.2s;
  color: ${(props) => props.$color};
  font-weight: 400;
  line-height: 32px;
`;

export const LinkToChapter = styled.a<{ $color: string }>`
  all: unset;
  cursor: pointer;
  align-self: center;
  color: ${(props) => props.$color};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-transform: capitalize;
  transition: 0.2s;

  &:hover {
    font-size: 17px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const InfoTabsArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;

  @media screen and (max-width: 620px) {
    gap: 20px;
  }

  @media screen and (max-width: 450px) {
  }
`;

export const TabButton = styled.button<{
  $isActive: boolean;
  $colorActive: string;
  $colorInactive: string;
}>`
  all: unset;
  cursor: pointer;
  padding: 0 20px;
  color: ${(props) =>
    props.$isActive ? props.$colorActive : props.$colorInactive};
  font-size: 16px;
  font-weight: 400;
  line-height: 50px;
  text-transform: capitalize;
  transition: 0.2s;
  border-bottom: ${(props) => (props.$isActive ? '1px solid' : 'none')};
  border-color: ${(props) => props.$colorActive};

  &:hover {
    color: ${(props) => props.$colorActive};
  }

  @media screen and (max-width: 450px) {
    padding: 0 10px;
  }
`;

export const Description = styled.div<{ $color: string }>`
  color: ${(props) => props.$color};
  transition: 0.2s;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  min-height: 100px;
`;

export const InteractionButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 50px;
`;
