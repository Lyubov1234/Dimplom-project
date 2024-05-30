import styled from 'styled-components';

export const ContentWithHeaderStyled = styled.div<{
  $color: string;
  $bgColor: string;
}>`
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$color};

  @media screen and (min-width: 1200px) {
    padding: 0 35px;
  }

  @media screen and (max-width: 833px) {
    justify-content: center;
    margin: auto;
  }
`;

export const ChildrenWrapper = styled.div`
  min-height: calc(100vh - 139px - 59px - 31px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
