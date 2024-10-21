import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { VStack } from '@/components/ui/vstack';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
};

export default function ProductListItem({ item }: { item: Product }) {
  return (
    <Card className='p-5 rounded-lg max-w-[360px] flex-1'>
      <Image
        source={{
          uri: item.image,
        }}
        alt={`${item.name} image`}
        className='mb-6 h-[240px] w-full rounded-md'
        resizeMode='contain'
      />
      <Text className='text-sm font-normal mb-2 text-typography-700'>
        {item.name}
      </Text>
      <VStack className='mb-6'>
        <Heading size='md' className='mb-4'>
          ${item.price}
        </Heading>
        <Text size='sm'>{item.description}</Text>
      </VStack>
      <Box className='flex-col sm:flex-row'>
        <Button className='px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1'>
          <ButtonText size='sm'>Add to cart</ButtonText>
        </Button>
        <Button
          variant='outline'
          className='px-4 py-2 border-outline-300 sm:flex-1'
        >
          <ButtonText size='sm' className='text-typography-600'>
            Wishlist
          </ButtonText>
        </Button>
      </Box>
    </Card>
  );
}
