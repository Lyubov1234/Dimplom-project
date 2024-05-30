import React, { PropsWithChildren } from 'react';
import useThemeColors from '#hooks/useThemeColors';
import { InfoMessageStyled } from './InfoMessageStyled';

interface Props extends PropsWithChildren {}

const InfoMessage: React.FC<Props> = (props) => {
  const { children } = props;

  const { textColorGray } = useThemeColors();

  return (
    <InfoMessageStyled $color={textColorGray}>{children}</InfoMessageStyled>
  );
};

export default InfoMessage;
