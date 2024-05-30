import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  margin: 0 0 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  margin-bottom: 24px;
`;

export const HeaderTitle = styled.h1<{ $color: string }>`
  all: unset;
  font-family: 'Bebas Neue';
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  cursor: pointer;
  color: ${(props) => props.$color};
`;

export const InputWrapperForBigScreen = styled.div`
  width: 50%;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const InteractionArea = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavButtonWrapper = styled.a``;

export const SmallMenuWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
