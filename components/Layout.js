import React from 'react'
import Head from 'next/head'
import {AppBar} from "@material-ui/core"
import {Toolbar, Typography, Container} from "@material-ui/core"
import useStyles from '../utils/styles'

export default function Layout({children}) {
	const classes = useStyles();
	return (
		<>
		<div>
			<Head>
				<title>eCommerce</title>
			</Head>
			<AppBar className={classes.navbar} position="static">
				<Toolbar>
					<Typography><a>eCommerce</a></Typography>
				</Toolbar>
			</AppBar>
			<Container className={classes.main}>
				{children}
			</Container>
			<footer className={classes.footer}>All Rights Reserved</footer>
		</div>
		</>
	)
}
