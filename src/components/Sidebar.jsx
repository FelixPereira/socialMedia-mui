import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const Sidebar = () => {
  return(
    <Box 
      flex={1} 
      p={2} 
      sx={{ display: {xs: "none", sm: "block"}}}>
      <List>
        <ListItem>
          <ListItemButton component="a" href="">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default Sidebar;