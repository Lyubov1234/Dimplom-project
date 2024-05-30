import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import { KeyboardBackspace } from '@mui/icons-material';

const GoBackButton: React.FC = () => {
  const navigation = useNavigate();

  const handleGoBack = () => {
    navigation(-1);
  };

  return (
    <Tooltip title="Back">
      <IconButton onClick={handleGoBack}>
        <KeyboardBackspace sx={{ fontSize: '42px' }} />
      </IconButton>
    </Tooltip>
  );
};

export default GoBackButton;
