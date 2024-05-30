import React from 'react';
import useThemeColors from '#hooks/useThemeColors';
import { DividerStyled } from './DividerStyled';

interface Props {
  width?: string;
  marginBottom?: string;
}

const Divider: React.FC<Props> = (props) => {
  const { marginBottom, width } = props;

  const { dividerColor } = useThemeColors();

  return (
    <DividerStyled
      $color={dividerColor}
      $marginBottom={marginBottom}
      $width={width}
    />
  );
};

export default Divider;
