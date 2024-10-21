import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Link } from 'expo-router';
import { Pressable } from 'react-native';

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
};

export default function ProductListItem({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} asChild>
      <Pressable className='flex-1'>
        <Card className='p-5 rounded-lg max-w-[360px] flex-1'>
          <Image
            source={{
              uri: product.image,
            }}
            alt={`${product.name} image`}
            className='mb-6 h-[240px] w-full rounded-md'
            resizeMode='contain'
          />
          <Text className='text-sm font-normal mb-2 text-typography-700'>
            {product.name}
          </Text>
          <Heading size='md' className='mb-4'>
            ${product.price}
          </Heading>
        </Card>
      </Pressable>
    </Link>
  );
}
