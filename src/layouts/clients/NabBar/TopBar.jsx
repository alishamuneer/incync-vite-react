import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button, InputBase, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';
import logo from "../../../assets/logo-dt.svg"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';


const TopBar = () => {
  const options = ['Designer', 'Women', 'Men', 'Shoes', 'Bags & Accessories', 'Beauty', 'Kids', 'Home & Food', 'Electrical', 'Gifts', 'Sale', 'Brands', 'Inspiration']

  const Navbar = styled(AppBar)(() => ({
    height: '16vh',
    color: 'black',
    background: "none"

  }));

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    right: 0,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  }));

  const CartWrapper = styled('div')(({ theme }) => ({
    padding: '0 8px 0 8px',
    border: '1px solid',
    borderRadius: '9px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: '4px 4px 4px 10px',
      // vertical padding + font size from searchIcon
      // paddingLeft: `calc(1em + ${theme.spacing(1)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '25ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    '& ::placeholder': {
      color: 'black',
      opacity: '1',
      fontWeight: '600px',
      fontSize: '13px',
    },

    border: '1px solid',
    borderRadius: '22px'
  }));

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Navbar position="static">
          <Toolbar>
            <Stack spacing={8} direction="row">
              <Search>
                <Stack>
                  <SearchIconWrapper>
                    <SearchOutlinedIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search David Jones"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Stack>
              </Search>
              <img src={logo} alt="logo" style={{ paddingLeft: '260px' }} />
              <Stack spacing={2} direction="row" style={{ paddingLeft: '260px' }}>
                <PersonOutlineOutlinedIcon />
                <FavoriteBorderIcon />
                <CartWrapper >
                  <ShoppingBagOutlinedIcon style={{ fontSize: '16px' }} /> $0.00
                </CartWrapper>
              </Stack>
            </Stack>
          </Toolbar>
          <Toolbar style={{justifyContent : 'center'}}>
            <Stack direction="row" spacing={4}>
              {options.map((o) => (
                <Typography  variant="subtitle2">{o}</Typography>
              ))}
            </Stack>
          </Toolbar>
        </Navbar>
      </Box>
    </>
  )
}

export default TopBar
