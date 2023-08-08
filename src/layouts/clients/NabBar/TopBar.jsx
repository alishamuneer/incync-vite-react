import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button, InputBase, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';
import logo from "../../../assets/logo-dt.svg"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const TopBar = () => {
  const Navbar = styled(AppBar)(({ theme }) => ({
    height: '20vh',
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
    background: 'black',
    color: 'white'
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '34ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    
  }));

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Navbar position="static">
          <Toolbar>
            <Stack spacing={5} direction="row">
              <img src={logo} alt="logo" />
              <Search>
                <Stack>
                  <StyledInputBase
                    placeholder="Search David Jones"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                  <SearchIconWrapper>
                    <SearchOutlinedIcon />
                  </SearchIconWrapper>
                </Stack>
              </Search>
            </Stack>
          </Toolbar>
        </Navbar>
      </Box>
    </>
  )
}

export default TopBar
