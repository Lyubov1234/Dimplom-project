import styled from 'styled-components';

export const SearchResultModuleStyled = styled.div``;

export const SearchedBooksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 50px;

  &:last-child {
    justify-self: center;
  }

  @media screen and (max-width: 830px) {
    justify-content: center;
    margin: auto;
  }
`;
