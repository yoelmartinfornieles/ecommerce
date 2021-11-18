import React from 'react'
import {useRouter} from 'next/router'
import data from '/utils/data'
import Layout from '/components/Layout';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  Link,
  Grid,
  List,
  ListItem,
  Typography,
  Card,
  Button,
} from '@material-ui/core';
import useStyles from '../../utils/styles';

export default function ProductScreen() {
  const classes = useStyles(); 
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((p) => p.slug === slug);
  if (!product) {
    return <div>Product not found!</div>;
  }
  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>back to products</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={6}>
          <Image
            src={product.images}
            alt={product.name}
            height={64}
            width={42}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <List>
            <ListItem>
              <Typography component="h1" variant="h1">
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Category: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Editor: {product.editor}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Authors: {product.authors}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Rating: {product.rating} stars ({product.numReviews} reviews)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>{product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>${product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.countInStock > 0
                        ? `In Stock (${product.countInStock})`
                        : `Unavailable`}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button
                  type="button"
                  color="primary"
                  fullWidth
                  variant="contained"
                >
                  Add to cart!
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
    /* 		<div>
			<h1>{product.name}</h1>
			<h6>{product.category}</h6>
			<h5>${product.price}</h5>
			<h3>{product.editor}</h3>
			<h3>{product.authors}</h3>
			<p>{product.description}</p>
			<h4>{product.rating}</h4>
			<h4>{product.numReviews}</h4>
			<h4>{product.countInStock}</h4>
		</div> */
  );
}
