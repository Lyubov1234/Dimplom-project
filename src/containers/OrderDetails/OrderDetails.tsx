import React from 'react';
import useThemeColors from '#hooks/useThemeColors';
import { useAppSelector } from '#store/store';
import Button from '#ui/button';
import {
  OrderDetailName,
  OrderDetailRow,
  OrderDetailsStyled,
  OrderDetailValue,
  PreparatoryDetails,
  TotalDetail,
} from './OrderDetailsStyled';

const OrderDetails: React.FC = () => {
  const { booksInCart } = useAppSelector((state) => state.bookReducer);

  const { textColorBlack, textColorGray } = useThemeColors();

  let total: number = booksInCart.reduce(
    (acc, arr) =>
      acc +
      Number(arr['price'].slice(1, arr['price'].length)) *
        arr['numberOfItemsInCart'],
    0
  );

  const detailsNames = booksInCart && [
    { name: 'sum total', value: total },
    { name: 'VAT', value: (total / 100) * 20 },
  ];

  const handleSubmit = () => {};

  return (
    <OrderDetailsStyled>
      <PreparatoryDetails>
        {detailsNames.map((item) => (
          <OrderDetailRow key={item.name}>
            <OrderDetailName $color={textColorGray}>
              {item.name}:
            </OrderDetailName>
            <OrderDetailValue $color={textColorBlack}>
              ${item.value.toFixed(2)}
            </OrderDetailValue>
          </OrderDetailRow>
        ))}
      </PreparatoryDetails>
      <OrderDetailRow>
        <TotalDetail $color={textColorBlack}>total:</TotalDetail>
        <TotalDetail $color={textColorBlack}>
          {detailsNames.reduce((acc, arr) => acc + arr['value'], 0).toFixed(2)}
        </TotalDetail>
      </OrderDetailRow>
      <Button type="button" width="calc80%" onClick={handleSubmit}>
        check out
      </Button>
    </OrderDetailsStyled>
  );
};

export default OrderDetails;
