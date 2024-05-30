import React, { PropsWithChildren } from 'react';
import useThemeColors from '#hooks/useThemeColors';
import { PageTitleStyled, PageTitleWrapper } from './PageTitleStyled';

interface Props extends PropsWithChildren {}

const PageTitle: React.FC<Props> = (props) => {
  const { children } = props;
  const { textColorBlack } = useThemeColors();

  return (
    <PageTitleWrapper>
      <PageTitleStyled $textColor={textColorBlack}>{children}</PageTitleStyled>
    </PageTitleWrapper>
  );
};

export default PageTitle;
