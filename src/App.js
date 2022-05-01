import React from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Box } from '@mui/system';
import { Stack } from '@mui/material';
import Navbar from './components/Navbar';


const App = () => {
  return(
    <Box>
      <Navbar />
      <Stack direction='row' justifyContent='space-between' spacing={2} >
        <Sidebar /> 
        <Feed />
        <Rightbar />
      </Stack> 
    </Box>
  )
}

export default App;