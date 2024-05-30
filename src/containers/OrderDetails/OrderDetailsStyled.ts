import styled from 'styled-components';

export const OrderDetailsStyled = styled.div`
  width: 25%;
  align-self: end;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 50px;

  @media screen and (max-width: 767px) {
    width: 30%;
  }

  @media screen and (max-width: 600px) {
    width: 40%;
  }

  @media screen and (max-width: 500px) {
    width: 50%;
  }
`;

export const PreparatoryDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const OrderDetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
`;

export const OrderDetailName = styled.span<{ $color: string }>`
  color: ${(props) => props.$color};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
  text-transform: capitalize;

  @media screen and (max-width: 992px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const OrderDetailValue = styled.span<{ $color: string }>`
  color: ${(props) => props.$color};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-all;

  @media screen and (max-width: 992px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const TotalDetail = styled.span<{ $color: string }>`
  color: ${(props) => props.$color};
  font-size: 40px;
  font-family: 'Bebas Neue';
  font-weight: 700;
  line-height: 60px;
  word-wrap: break-all;
  text-transform: uppercase;

  @media screen and (max-width: 992px) {
    font-size: 32px;
    line-height: 48px;
  }
`;
