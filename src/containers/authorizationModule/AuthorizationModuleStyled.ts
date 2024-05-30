import styled from 'styled-components';

export const AuthorizationModuleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthorizationModuleStyled = styled.div<{ $borderColor: string }>`
  width: 50%;
  padding: 20px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.$borderColor};

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 0;
`;

export const TabButton = styled.button<{
  $isActive: boolean;
  $colorActive: string;
  $colorInactive: string;
}>`
  all: unset;
  cursor: pointer;
  padding: 0 25px 32px 25px;
  color: ${(props) =>
    props.$isActive ? props.$colorActive : props.$colorInactive};
  font-size: 24px;
  font-family: 'Bebas Neue';
  font-weight: 700;
  letter-spacing: 1.2px;
  word-wrap: break-word;
  text-transform: capitalize;
  transition: 0.2s;
  border-bottom: ${(props) => (props.$isActive ? '1px solid black' : 'none')};

  &:hover {
    color: ${(props) => props.$colorActive};
  }
`;

export const Divider = styled.hr<{ $color: string }>`
  width: calc(100% + 40px);
  color: ${(props) => props.$color};
  margin: 0 -20px 32px -20px;
`;
