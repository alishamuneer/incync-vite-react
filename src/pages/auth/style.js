import { Box, Button, Container, styled } from '@mui/material';

export const MuiContainer = styled(Container)(() => ({
  backgroundColor: '#F2F2F2',
  marginTop: '50px',
  borderRadius: '5px',
}));

export const Wrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  margin: '20px 0',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));
