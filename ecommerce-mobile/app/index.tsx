import { ActivityIndicator, FlatList, Text } from 'react-native';
import ProductListItem from '../components/ProductListItem';
import { useBreakpointValue } from '@/components/ui/utils/use-break-point-value';
import { listProducts } from '@/api/products';
import { useQuery } from '@tanstack/react-query';

export default function HomeScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: listProducts,
  });

  const numColumns = useBreakpointValue({
    default: 2,
    sm: 3,
    xl: 4,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Error fetching products</Text>;
  }

  return (
    <FlatList
      key={numColumns}
      contentContainerClassName='gap-2 max-w-[960px]'
      columnWrapperClassName='gap-2'
      data={data}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={numColumns}
    />
  );
}
