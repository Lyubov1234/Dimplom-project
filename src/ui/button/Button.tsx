import React, { PropsWithChildren } from 'react';
import useThemeColors from '#hooks/useThemeColors';
import { ButtonStyled } from './ButtonStyled';

interface Props extends PropsWithChildren {
  onClick: () => void;
  type: 'button' | 'submit' | 'reset';
  width?: string;
  disabled?: boolean;
}

const Button: React.FC<Props> = (props) => {
  const { children, onClick, type, width, disabled } = props;

  const {
    buttonBgColor,
    buttonTextColor,
    buttonBgHoverColor,
    reverseButtonHoverColor,
  } = useThemeColors();

  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      $width={width}
      $bgColor={buttonBgColor}
      $color={buttonTextColor}
      $bgHoverColor={buttonBgHoverColor}
      $darkDisabledColor={reverseButtonHoverColor}
      disabled={disabled}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
