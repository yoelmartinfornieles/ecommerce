import Layout from '../components/Layout';
import db from '../utils/db';
import Product from '../models/Product';
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import NextLink from 'next/link';

export default function Home(props) {
  const { products } = props;
  return (
    <Layout>
      <div>
        <Typography variant="h2">Products</Typography>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.name}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      height={520}
                      component="img"
                      image={product.images}
                      title={product.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>${product.price}</Typography>
                  <Button size="small" color="primary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  await db.connect();
  const products = await Product.find({}).lean();
  db.disconnect();
  return {
    props: { products: products.map(db.convertDocToPojo) },
  };
}
