import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { lightTheme, darkTheme } from 'theme';
import { loadThemeAction } from 'store/actions/theme';
import Routes from 'routes';
import TopBar from 'components/TopBar';

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
    height: 'calc(100vh - 64px)',
    boxSizing: 'border-box',
  },
}));

function App() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    dispatch(loadThemeAction());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Router>
        <TopBar />

        <Box className={classes.container}>
          <PerfectScrollbar>
            <Routes />
          </PerfectScrollbar>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
