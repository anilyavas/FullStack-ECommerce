import { Link, Stack } from 'expo-router';

import '@/global.css';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Icon } from '@/components/ui/icon';
import { ShoppingCart, User } from 'lucide-react-native';
import { Pressable } from 'react-native';
import { Text } from '@/components/ui/text';
import { useCart } from '@/store/cartStore';
import { useAuth } from '@/store/authStore';

const queryClient = new QueryClient();
export default function RootLayout() {
  const cartItemsNum = useCart((state) => state.items.length);
  const isLoggedIn = useAuth((s) => !!s.token);

  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider mode='light'>
        <Stack
          screenOptions={{
            headerRight: () => (
              <Link href={'/cart'} asChild>
                <Pressable className='flex-row gap-2'>
                  <Icon as={ShoppingCart} />
                  <Text>{cartItemsNum}</Text>
                </Pressable>
              </Link>
            ),
          }}
        >
          <Stack.Screen
            name='index'
            options={{
              title: 'Shop',
              headerLeft: () =>
                !isLoggedIn && (
                  <Link href={'/login'} asChild>
                    <Pressable className='flex-row gap-2'>
                      <Icon as={User} />
                    </Pressable>
                  </Link>
                ),
            }}
          />
        </Stack>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
