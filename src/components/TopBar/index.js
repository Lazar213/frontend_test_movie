import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MoonIcon from '@material-ui/icons/Brightness4';
import SunIcon from '@material-ui/icons/BrightnessHigh';

import { changeThemeAction } from 'store/actions/theme';

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: 'space-between',
    padding: 0,
  },
  toggleButton: {
    marginLeft: theme.spacing(2),
  },
}));

function TopBar() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const toggleTheme = useCallback(
    () => dispatch(changeThemeAction(theme === 'light' ? 'dark' : 'light')),
    [dispatch, theme],
  );

  return (
    <Box className={classes.container}>
      <AppBar position="static">
        <Container>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h5">Movie App</Typography>

            <Tooltip title="Toggle Theme">
              <IconButton
                className={classes.toggleButton}
                edge="end"
                color="inherit"
                aria-label="Toggle Theme"
                onClick={toggleTheme}
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </IconButton>
            </Tooltip>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default withRouter(TopBar);
