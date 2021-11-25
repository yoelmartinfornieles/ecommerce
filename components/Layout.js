import React, {useContext} from 'react'
import Head from 'next/head'
import NextLink from 'next/link';
import { AppBar } from '@material-ui/core';
import {
  Toolbar,
  Typography,
  Container,
  Link,
  ThemeProvider,
  CssBaseline,
  createMuiTheme,
  Switch,
  Badge,
} from '@material-ui/core';
import useStyles from '../utils/styles';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';

export default function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart } = state;
  const theme = createMuiTheme({
    typography: {
      h1: { fontSize: '1.6rem', fontWeight: 450, margin: '1rem 0' },
      h2: { fontSize: '1.4rem', fontWeight: 400, margin: '1rem 0' },
      bodi1: { fontWeight: 'normal' },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#a9b665',
        secondary: '#e78a5e',
      },
    },
  });
  const classes = useStyles();
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };
  return (
    <div>
      <Head>
        <title>{title ? `${title} - theSTORYshop` : `theSTORYshop`}</title>
        {description && (
          <meta name="description" content={description}>
            {' '}
          </meta>
        )}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar className={classes.navbar} position="static">
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>theSTORYshop</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
              <NextLink href="/cart" passHref>
                <Link>
                  {cart.cartItems.length > 0 ? (
                    <Badge
                    color="secondary"
                      badgeContent={cart.cartItems.length}
                    >Cart</Badge>
                  ) : (
                    'Cart'
                  )}
                </Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>All Rights Reserved</footer>
      </ThemeProvider>
    </div>
  );
}
