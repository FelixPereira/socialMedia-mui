import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, styled, InputBase, Badge, Menu, MenuItem } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { SetMealSharp } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center"
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center"
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return(
    <Box>
      <AppBar position="static">
        <StyledToolbar>
          <Typography sx={{display: { xs: "none", sm: "block"}}}>
            FÉLIX
          </Typography>
          <PetsIcon sx={{display: { xs: "block", sm: "none"}}} />
          <Search>
            <InputBase placeholder="Search..." />
          </Search>
          <Icons sx={{display: { xs: "none", sm: "flex"}}}>
            <Badge badgeContent={4} color="error">
              <EmailIcon/>
            </Badge>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon/>
            </Badge>
            <Avatar 
              onClick={() => setOpen(true)}
              sx={{width: 30, height: 30}} 
              alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Icons>
          <UserBox sx={{display: { xs: "flex", sm: "none"}}}>
            <Avatar 
              onClick={() => setOpen(true)}  
              sx={{width: 30, height: 30}} 
              alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography> Félix </Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={() => setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
      </Menu>
      </AppBar>
    </Box>
  )
}

export default Navbar;