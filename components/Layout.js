import React from 'react'
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
  createMuiTheme
} from '@material-ui/core';
import useStyles from '../utils/styles';

export default function Layout({ title, description, children }) {
  const theme = createMuiTheme({
    typography: {
      h1: { fontSize: '1.6rem', fontWeight: 450, margin: '1rem 0' },
      h2: { fontSize: '1.4rem', fontWeight: 400, margin: '1rem 0' },
      bodi1: { fontWeight: 'normal'},
    },
    palette: {
      type: 'light',
      primary: {
          main: '#a9b665',
          secondary: '#e78a5e',
    }
  }
  });
  const classes = useStyles();
  return (
    <>
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
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>All Rights Reserved</footer>
        </ThemeProvider>
      </div>
    </>
  );
}
