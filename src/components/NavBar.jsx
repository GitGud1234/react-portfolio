import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/NavBar.css';
import {
  AppBar,
  Toolbar,
  IconButton,
  //Typography,
  Stack,
  Button,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
//import LogoDevIcon from '@mui/icons-material/LogoDev';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import CodeIcon from '@mui/icons-material/Code';
//import ReorderIcon from '@mui/icons-material/Reorder';

function NavBar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          component={Link}
          to="/"
          disableRipple
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          sx={{ paddingLeft: '40px' }}
        >
          <HomeIcon fontSize="large" />
        </IconButton>

        <Stack
          direction="row"
          spacing={5}
          justifyContent="center"
          sx={{ width: '100%' }}
        >
          <Button
            startIcon={<CodeIcon fontSize="large" />}
            component={Link}
            to="/projects"
            disableRipple
            color="inherit"
          >
            projects
          </Button>
          <Button
            startIcon={<ArticleIcon fontSize="large" />}
            component={Link}
            to="/blogs"
            disableRipple
            color="inherit"
          >
            Blogs
          </Button>
        </Stack>
        <IconButton
          component={Link}
          to="https://github.com/GitGud1234"
          target="_blank"
          disableRipple
          size="large"
          edge="end"
          color="inherit"
          aria-label="logo"
          sx={{ paddingRight: '40px' }}
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
  //<Link to="/">Home</Link>
  //    <Link to="/projects">Projects</Link>
  //  <Link to="/blogs">Blogs</Link>
}

/*
        <Typography
          variant="h6"
          component="h6"
          sx={{ border: '1px solid red' }}
        ></Typography>
*/

/*
function NavBar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? 'open' : 'close'}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar(prev => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blogs">Blogs</Link>
      </div>
    </div>
  );
}
*/
export default NavBar;
