import React, {useContext} from 'react'
import Layout from '/components/Layout';
import NextLink from 'next/link';
import Image from 'next/image';
import axios from 'axios'
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
import Product from '../../models/Product';
import db from '../../utils/db';
import {Store} from '../../utils/Store'

export default function ProductScreen(props) {
  const {dispatch} = useContext(Store);
  const { product } = props;
  const classes = useStyles();
  if (!product) {
    return <div>Product not found!</div>;
  }
  const addToCartHandler = async () => {
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock <= 0) {
      window.alert('Out of stock!');
      return;
    }
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, quantity: 1 },
    });
  };
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
                  onClick={addToCartHandler}
                >
                  Add to cart!
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  db.disconnect();
  return {
    props: { product: db.convertDocToPojo(product) },
  };
}