import styled from 'styled-components';

export const PageTitleWrapper = styled.div`
  margin-bottom: 25px;
`;

export const PageTitleStyled = styled.h2<{ $textColor?: string }>`
  all: unset;
  padding-right: 200px;
  font-family: 'Bebas Neue';
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
  overflow: auto;
  text-overflow: ellipsis;

  @media screen and (max-width: 620px) {
    font-size: 46px;
  }

  @media screen and (max-width: 450px) {
    font-size: 32px;
  }
`;
