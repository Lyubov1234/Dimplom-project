import styled from 'styled-components';

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const FooterInfo = styled.span<{ $color: string }>`
  color: ${(props) => props.$color};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
