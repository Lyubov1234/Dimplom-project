import {
  black,
  white,
  gray20,
  gray40,
  gray60,
  gray80,
  red,
  orange,
} from './colorsConstants';

type ThemeColorType = {
  backgroundColor: string;
  cardBgColor: string;
  textColorBlack: string;
  textColorGray: string;
  titleColor: string;
  buttonBgColor: string;
  buttonTextColor: string;
  inputBgColor: string;
  inputBgActiveColor: string;
  inputTextColor: string;
  inputBorderColor: string;
  buttonBgHoverColor: string;
  iconButtonColor: string;
  ratingColor: string;
  paginationButtonColor: string;
  paginationButtonActiveColor: string;
  activeTabButton: string;
  inactiveTabButton: string;
  redColor: string;
  dividerColor: string;
  emailInputBgColor: string;
  emailInputTextColor: string;
  minusInCartColor: string;
  reverseButtonBgColor: string;
  reverseButtonHoverColor: string;
};

type ThemeVariant = {
  dark: ThemeColorType;
  light: ThemeColorType;
};

export const colors: ThemeVariant = {
  light: {
    backgroundColor: white,
    cardBgColor: white,
    textColorBlack: black,
    textColorGray: gray60,
    titleColor: black,
    buttonBgColor: black,
    buttonBgHoverColor: gray80,
    buttonTextColor: white,
    inputBgColor: white,
    inputBgActiveColor: gray20,
    inputBorderColor: gray40,
    inputTextColor: gray80,
    iconButtonColor: black,
    ratingColor: black,
    paginationButtonColor: gray40,
    paginationButtonActiveColor: black,
    activeTabButton: black,
    inactiveTabButton: gray60,
    redColor: red,
    dividerColor: gray40,
    emailInputBgColor: white,
    emailInputTextColor: gray80,
    minusInCartColor: gray20,
    reverseButtonBgColor: white,
    reverseButtonHoverColor: gray20,
  },
  dark: {
    backgroundColor: black,
    cardBgColor: orange,
    textColorBlack: gray40,
    textColorGray: gray60,
    titleColor: gray40,
    buttonBgColor: gray40,
    buttonBgHoverColor: gray20,
    buttonTextColor: black,
    inputBgColor: black,
    inputBgActiveColor: gray80,
    inputBorderColor: gray80,
    inputTextColor: gray20,
    iconButtonColor: gray20,
    ratingColor: white,
    paginationButtonColor: gray80,
    paginationButtonActiveColor: white,
    activeTabButton: gray40,
    inactiveTabButton: gray60,
    redColor: red,
    dividerColor: gray40,
    emailInputBgColor: gray60,
    emailInputTextColor: black,
    minusInCartColor: gray80,
    reverseButtonBgColor: black,
    reverseButtonHoverColor: gray80,
  },
};
