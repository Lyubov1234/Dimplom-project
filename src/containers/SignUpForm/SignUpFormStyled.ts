import styled from 'styled-components';
import { red } from '#styles/colorsConstants';

export const SignFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-right: 10px;
`;

export const Input = styled.input<{ $borderColor: string; $color: string }>`
  all: unset;
  width: 100%;
  padding: 7px;
  border: 1px solid ${(props) => props.$borderColor};
  color: ${(props) => props.$color};
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  cursor: text;
`;

export const ErrorMessage = styled.span`
  padding: 0;
  margin: 0;
  color: ${red};
  font-size: 12px;
`;
