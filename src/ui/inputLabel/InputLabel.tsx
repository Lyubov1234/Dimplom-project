import React, { PropsWithChildren } from 'react';
import useThemeColors from '#hooks/useThemeColors';
import { InputLabelStyled } from './InputLabelStyled';

interface Props extends PropsWithChildren {
  labelFor: string;
}

const InputLabel: React.FC<Props> = (props) => {
  const { labelFor, children } = props;

  const { textColorBlack } = useThemeColors();

  return (
    <InputLabelStyled htmlFor={labelFor} $color={textColorBlack}>
      {children}
    </InputLabelStyled>
  );
};

export default InputLabel;
