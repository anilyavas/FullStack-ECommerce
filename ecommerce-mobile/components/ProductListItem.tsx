import { View, Text } from 'react-native';

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
};

export default function ProductListItem({ item }: { item: Product }) {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>{item.name}</Text>
    </View>
  );
}
