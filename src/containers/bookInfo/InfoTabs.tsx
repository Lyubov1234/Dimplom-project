import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { FacebookOutlined, MoreHoriz, Twitter } from '@mui/icons-material';
import useThemeColors from '#hooks/useThemeColors';
import { ActiveBookInfoType } from '#models/bookTypes';
import Divider from '#ui/divider';
import {
  DescriptionWrapper,
  Description,
  InteractionButtonWrapper,
  InfoTabsArea,
  TabButton,
  TabsWrapper,
} from './BookInfoStyled';

interface Props {
  book: ActiveBookInfoType;
}

const InfoTabs: React.FC<Props> = (props) => {
  const { book } = props;

  const { textColorBlack, activeTabButton, inactiveTabButton } =
    useThemeColors();

  const [activeTabId, setActiveTabId] = useState<string>('1');

  const tabsItems = [
    { id: '1', name: 'description' },
    { id: '2', name: 'authors' },
    { id: '3', name: 'reviews' },
  ];

  return (
    <InfoTabsArea>
      <DescriptionWrapper>
        <TabsWrapper>
          {tabsItems.map((item) => (
            <TabButton
              key={item.id}
              id={item.id}
              onClick={() => setActiveTabId(item.id)}
              $isActive={activeTabId === item.id}
              $colorActive={activeTabButton}
              $colorInactive={inactiveTabButton}
            >
              {item.name}
            </TabButton>
          ))}
        </TabsWrapper>
        <Divider />
        <Description $color={textColorBlack}>
          {activeTabId === tabsItems[0].id && <>{book.desc}</>}
          {activeTabId === tabsItems[1].id && <>{book.authors}</>}
          {activeTabId === tabsItems[2].id && (
            <>
    Спасибо огромное. Интересный, познавательный курс. Материалы грамотно структурированы, а преподаватели объясняют все доступным языком. Это было очень продуктивное обучение. Благодарю за знания!
            </>
          )}
        </Description>
      </DescriptionWrapper>
      <InteractionButtonWrapper>
        <IconButton sx={{ color: textColorBlack }}>
          <FacebookOutlined />
        </IconButton>
        <IconButton sx={{ color: textColorBlack }}>
          <Twitter  />
        </IconButton>
        <IconButton sx={{ color: textColorBlack }}>
          <MoreHoriz />
        </IconButton>
      </InteractionButtonWrapper>
    </InfoTabsArea>
  );
};

export default InfoTabs;
