import { listProducts } from '@/api/products';
import ProductListItem from './ProductListItem';

export default async function ProductsPage() {
  const products = await listProducts();

  return (
    <div className='flex flex-wrap flex-row gap-4 max-w-[1200px] mx-auto w-full'>
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </div>
  );
}
