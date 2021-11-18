import React from 'react'
import Head from 'next/head'
import NextLink from 'next/link';
import { AppBar } from '@material-ui/core';
import { Toolbar, Typography, Container, Link } from '@material-ui/core';
import useStyles from '../utils/styles';

export default function Layout({ title, description, children }) {
  const classes = useStyles();
  return (
    <>
      <div>
        <Head>
          <title>{title? `${title} - theSTORYshop` : `theSTORYshop`}</title>
          {description && <meta name="description" content={description}> </meta>}
        </Head>
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
      </div>
    </>
  );
}
