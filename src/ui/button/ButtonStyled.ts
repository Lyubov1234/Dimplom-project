import styled from 'styled-components';

export const ButtonStyled = styled.button<{
  $width: string | undefined;
  $bgColor: string;
  $color: string;
  $bgHoverColor: string;
  $darkDisabledColor: string;
}>`
  all: unset;
  width: ${(props) => (props.$width ? props.$width : '')};
  cursor: pointer;
  font-family: 'Bebas Neue';
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$color};
  padding: 16px 40px;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.9px;
  text-align: center;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.$bgHoverColor};
  }

  &:active {
    background-color: ${(props) => props.$bgColor};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${(props) => props.$bgHoverColor};
    &:hover {
      background-color: ${(props) => props.$bgColor};
    }
  }
`;
