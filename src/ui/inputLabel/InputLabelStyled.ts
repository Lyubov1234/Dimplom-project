import styled from 'styled-components';

export const InputLabelStyled = styled.label<{ $color: string }>`
  display: block;
  color: ${(props) => props.$color};
  font-size: 16px;
  font-weight: 700;
  line-height: 32px;
  text-transform: lowercase;

  &::first-letter {
    text-transform: uppercase;
  }
`;
