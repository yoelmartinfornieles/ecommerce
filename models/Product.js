import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    images: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    editor: { type: String, required: true },
    authors: { type: String, required: true, default: 'N/A' },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;