import {
  AppBar,
  IconButton,
  styled,
  Button,
  Badge,
  BadgeProps,
  MenuItem,
  Box,
} from '@mui/material';

export const MuiTopBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '& .MuiToolbar-root': {
    minHeight: '30px',
    fontSize: '10px',
    justifyContent: 'space-between',
  },
  boxShadow: 'none',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

export const MuiMiddleBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  color: theme.palette.common.black,
  '& .MuiToolbar-root': {
    fontSize: '10px',
    gap: 10,
    [theme.breakpoints.down('lg')]: {
      paddingTop: '10px',
      flexWrap: 'wrap',
    },
  },
  boxShadow: 'none',
}));

export const SearchWrapBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    width: '100%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '20%',
  },
}));

export const NavbarButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  [theme.breakpoints.down('lg')]: {
    color: theme.palette.common.white,
  },
}));

export const LoginButton = styled(Button)<{
  component?: React.ElementType;
  to?: string;
}>(({ theme }) => ({
  color: theme.palette.primary.main,
  textTransform: 'capitalize',
}));

export const ShoppingCartBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 5,
    backgroundColor: theme.palette.primary.main,
    padding: '0 4px',
    [theme.breakpoints.down('lg')]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.primary.main,
    },
  },
}));

export const MuiBottomBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: 'none',
  [theme.breakpoints.down('lg')]: {
    marginTop: '13px',
  },
}));

export const MobileMenuItemWrap = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const DesktopMenuItemWrap = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
  },
}));

export const MenuItemList = styled(MenuItem)<{
  component?: React.ElementType;
  to?: string;
}>(({ theme }) => ({
  color: theme.palette.common.white,
  [theme.breakpoints.down('lg')]: {
    padding: '10px 30px',
    borderBottom: '1px solid',
    borderBottomColor: theme.palette.primary.main,
    color: theme.palette.common.black,
  },
}));
