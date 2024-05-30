import styled from 'styled-components';

export const NewBooksModuleStyled = styled.div``;

export const NewBooksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 50px;

  @media screen and (max-width: 833px) {
    justify-content: center;
    margin: auto;
  }
`;