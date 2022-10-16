import * as React from 'react';
import {Link, Outlet} from 'react-router-dom';
import { styled, ThemeProvider, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import theme from '../theme';

export default function SiteLayout() {
  const [open, setOpen] = React.useState(true);

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" dense="true">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Site Layout
          </Typography>
          
          <List sx={{ display: 'flex', ml: 3 }}>
        
            <ListItem>
                <Link to="/" className="text-white"> Home </Link>
            </ListItem>

            <ListItem>
                <Link to="/media" className="text-white"> Media </Link>
            </ListItem>

            <ListItem>
                <Link to="/news" className="text-white"> News </Link>
            </ListItem>

            <ListItem>
                <Link to="/dashboard" className="text-white"> Dashboard </Link>
            </ListItem>

          </List>
        </Toolbar>
      </AppBar>
      <Box>
       <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
    </ThemeProvider>
  );
}
