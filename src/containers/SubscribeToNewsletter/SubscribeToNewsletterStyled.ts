import styled from 'styled-components';
import { purple, black, gray60} from '#styles/colorsConstants';

export const SubscribeToNewsletterStyled = styled.div`
  background-color: ${purple};
  width: calc(100% - 128px);
  padding: 56px 64px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 50px;
`;

export const SubscribeTitle = styled.span`
  color: ${black};
  font-size: 40px;
  font-family: 'Bebas Neue';
  font-weight: 700;
  line-height: 60px;

  @media screen and (max-width: 450px) {
    font-size: 28px;
  }
`;

export const SubscribeSubtitle = styled.span`
  font-size: 18px;
  color: ${black};
  font-weight: 400;
  line-height: 28px;

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;

export const EmailArea = styled.div`
  width: 100%;
  border-radius: 4px;
  display: flex;
  gap: 0px;
  flex-wrap: nowrap;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const EmailInput = styled.input<{ $bgColor: string; $color: string }>`
  all: unset;
  border: 1px solid ${gray60};
  border-right: none;
  padding: 15px;
  border-radius: 0px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$color};
  width: calc(100% - 147px - 128px);

  &:focus {
    border: 1px solid ${black};
  }

  @media screen and (max-width: 700px) {
    width: calc(100% - 32px);
    border: 1px solid ${gray60};
    margin-bottom: 15px;
  }
`;
