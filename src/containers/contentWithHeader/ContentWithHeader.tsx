import React, {
  PropsWithChildren
} from 'react';
import { useAppDispatch } from '#store/store';
import { setIsSearchDropdownActive } from '#store/reducers/bookReducer';
import useThemeColors from '#hooks/useThemeColors';
import Header from '#containers/header';
import Footer from '#containers/footer';
import {
  ChildrenWrapper,
  ContentWithHeaderStyled,
} from './ContentWithHeaderStyled';

interface Props extends PropsWithChildren {}

const ContentWithHeader: React.FC<Props> = (props) => {
  const { children } = props;

  const dispatch = useAppDispatch();

  const { textColorBlack, backgroundColor } = useThemeColors();

  const handleSearchDropdownClose = (e: any) => {
    if (e.id !== 'searchInputWrapper') {
      dispatch(setIsSearchDropdownActive(false));
    }
  };

  return (
    <ContentWithHeaderStyled
      $color={textColorBlack}
      $bgColor={backgroundColor}
      onClick={handleSearchDropdownClose}
    >
      <Header />
      <ChildrenWrapper>{children}</ChildrenWrapper>
      <Footer />
    </ContentWithHeaderStyled>
  );
};

export default ContentWithHeader;
