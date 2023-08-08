import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';


const TopBar = () => {
  const Navbar = styled(AppBar)(({ theme }) => ({
    height : '20vh',
    color: 'black',
    background : "none"
    
  }));
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Navbar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </Navbar>
      </Box>  
    </>
  )
}

export default TopBar
