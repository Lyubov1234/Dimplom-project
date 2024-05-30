import { red } from '#styles/colorsConstants';
import { styled } from 'styled-components';

export const AccountFormStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const FormSubtitle = styled.h5<{ $color: string }>`
  all: unset;
  color: ${(props) => props.$color};
  font-size: 32px;
  font-family: 'Bebas Neue';
  font-weight: 700;
  line-height: 46px;
`;

export const InputGroupWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 10px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const InputWrapper = styled.div`
  width: 45%;

  @media screen and (max-width: 767px) {
    width: calc(100% - 14px);
  }
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

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.$borderColor};
  }
`;

export const ButtonWrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 32px;
  align-self: flex-end;
  margin-bottom: 50px;

  @media screen and (max-width: 767px) {
    width: 100%;
    align-self: center;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const VisibilityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ReverseButton = styled.button<{
  $bgColor: string;
  $color: string;
  $borderColor: string;
  $darkHoverColor: string;
  $theme: string;
}>`
  all: unset;
  width: 40%;
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
  border: 1px solid ${(props) => props.$borderColor};

  &:hover {
    background-color: ${(props) =>
      props.$theme === 'light' ? props.$borderColor : props.$darkHoverColor};
  }

  &:active {
    background-color: ${(props) => props.$bgColor};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.$darkHoverColor};
    color: ${(props) => props.$borderColor};
  }
`;

export const InputInfoMessage = styled.p`
  padding: 0;
  margin: 0;
  color: ${red};
  font-size: 10px;
`;
