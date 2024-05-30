import React from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { IconButton, List, ListItem } from '@mui/material';
import useThemeColors from '#hooks/useThemeColors';
import { NumbersWrapper } from './PaginationStyled';

interface Props {
  onPageChange: (newPage: number) => void;
  activePage: number;
  totalBooksCount: number;
  rowsPerPage: number;
}

export const TotalCountOfPages = (total: number, rows: number): number => {
  return Math.ceil(total / rows) <= 100 ? Math.ceil(total / rows) : 100;
};

const Pagination: React.FC<Props> = (props) => {
  const { onPageChange, activePage, totalBooksCount, rowsPerPage } = props;

  const { paginationButtonColor, paginationButtonActiveColor } =
    useThemeColors();

  const handleBackwardClick = () => {
    onPageChange(activePage - 1);
  };

  const handleForwardClick = () => {
    onPageChange(activePage + 1);
  };

  const handlePageSelect = (newPage: number) => {
    onPageChange(newPage);
  };

  const buttonStyle = {
    color: paginationButtonActiveColor,
    transition: '0.3s',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '24px',
  };

  const pageNumbersToShow = (i: number) => {
    const set = new Set([
      1,
      2,
      i - 1,
      i,
      i + 1,
      TotalCountOfPages(totalBooksCount, rowsPerPage) - 1,
      TotalCountOfPages(totalBooksCount, rowsPerPage),
    ]);
    set.forEach((element) => {
      if (element <= 0) {
        set.delete(element);
      }
    });
    return set;
  };

  return (
    <List
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '24px',
        marginBottom: '50px',
      }}
    >
      <ListItem key={0}>
        <IconButton
          onClick={handleBackwardClick}
          sx={buttonStyle}
          disabled={activePage === 1}
        >
          <ArrowBack /> PREV
        </IconButton>
      </ListItem>
      <NumbersWrapper>
        {Array.from({ length: TotalCountOfPages(totalBooksCount, rowsPerPage) })
          .map((_, index) => (
            <ListItem key={index + 1}>
              <IconButton
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '8px',
                  width: '24px',
                  height: '24px',
                  fontSize: '16px',
                  fontWeight: '700',
                  lineHeight: '24px',
                  color:
                    index + 1 === activePage
                      ? paginationButtonActiveColor
                      : paginationButtonColor,
                  cursor: 'pointer',
                }}
                onClick={() => handlePageSelect(index + 1)}
              >
                {index + 1}
              </IconButton>
            </ListItem>
          ))
          .filter((_, index) => pageNumbersToShow(activePage).has(index + 1))}
      </NumbersWrapper>
      <ListItem key={101} sx={{ justifyContent: 'flex-end' }}>
        <IconButton
          onClick={handleForwardClick}
          sx={buttonStyle}
          disabled={
            activePage === TotalCountOfPages(totalBooksCount, rowsPerPage)
          }
        >
          NEXT
          <ArrowForward />
        </IconButton>
      </ListItem>
    </List>
  );
};

export default Pagination;
