import styled from 'styled-components';

export const DividerStyled = styled.hr<{
  $width: string | undefined;
  $color: string;
  $marginBottom: string | undefined;
}>`
  width: ${(props) => (props.$width ? props.$width : '100%')};
  margin: 0;
  padding: 0;
  margin-bottom: ${(props) =>
    props.$marginBottom ? props.$marginBottom : '50px'};
  border: none;
  border-top: 10px solid ${(props) => props.$color};
`;
