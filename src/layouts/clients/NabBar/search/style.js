import { IconButton, Input, alpha, styled } from '@mui/material';

export const NavbarSearchInput = styled(Input)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  border: '1px solid',
  borderColor: theme.palette.primary.main,
  padding: '0 5px 0 10px',
  fontSize: 16,
  borderRadius: '25px',
  '& .MuiInputBase-input': {
    '&::placeholder': {
      fontSize: '14px',
      fontStyle: 'italic',
      color: theme.palette.primary.main,
    },
  },
  '&:hover': {
    borderColor: alpha(theme.palette.primary.main, 0.7),
  },
}));

export const NavbarSearchButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: theme.palette.primary.main,
  padding: 0,
  '&:hover': {
    backgroundColor: 'transparent',
    color: alpha(theme.palette.primary.main, 0.7),
  },
}));
