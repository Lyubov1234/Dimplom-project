import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, MenuItem, Menu, Box } from '@mui/material';
import {
  FavoriteBorderOutlined,
  LocalGroceryStoreOutlined,
  Menu as MenuIcon,
  Person2Outlined,
} from '@mui/icons-material';
import useThemeColors from '#hooks/useThemeColors';
import { RouterLocationsEnum } from '#router/Router';
import SearchInput from '#components/searchInput';
import Divider from '#ui/divider';
import { SmallMenuWrapper } from './HeaderStyled';

const SmallScreenMenu: React.FC = () => {
  const navigation = useNavigate();

  const { iconButtonColor, textColorBlack, backgroundColor } = useThemeColors();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <SmallMenuWrapper>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ color: iconButtonColor }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          onClick={() => {
            navigation(RouterLocationsEnum.favorite);
          }}
          sx={{
            padding: '15px',
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            color: textColorBlack,
            backgroundColor: backgroundColor,
          }}
        >
          <FavoriteBorderOutlined />
          Favorite books
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigation(RouterLocationsEnum.cart);
          }}
          sx={{
            padding: '15px',
            display: 'flex',
            gap: '11px',
            alignItems: 'center',
            color: textColorBlack,
            backgroundColor: backgroundColor,
          }}
        >
          <LocalGroceryStoreOutlined  />
          Cart
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigation(RouterLocationsEnum.account);
          }}
          sx={{
            padding: '15px',
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            color: textColorBlack,
            backgroundColor: backgroundColor,
          }}
        >
          <Person2Outlined />
          Settings
        </MenuItem>
        <Divider />
        <Box sx={{ padding: '10px' }}>
          <SearchInput />
        </Box>
      </Menu>
    </SmallMenuWrapper>
  );
};

export default SmallScreenMenu;
