'use client';
import { FormControl } from '@/components/ui/form-control';
import { Heading } from '@/components/ui/heading';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Input, InputField } from '@/components/ui/input';
import { HStack } from '@/components/ui/hstack';
import { Button, ButtonText } from '@/components/ui/button';
import { useState } from 'react';
import { Box } from '@/components/ui/box';
import { login, register } from '@/api/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async () => {
    try {
      await login(email, password);
    } catch (e) {
      alert('Failed to login');
    }
  };
  const onSignup = async () => {
    try {
      await register(email, password);
    } catch (e) {
      alert('Failed to signup');
    }
  };

  return (
    <Box className='flex-1 min-h-screen justify-center items-center'>
      <FormControl
        isInvalid={false}
        className='bg-white m-2 p-4  w-full max-w-[500px] border rounded-lg border-outline-300'
      >
        <VStack space='xl'>
          <Heading className='text-typography-900 leading-3 pt-3'>
            Login
          </Heading>
          <VStack space='xs'>
            <Text className='text-typography-500 leading-1'>Email</Text>
            <Input>
              <InputField value={email} onChangeText={setEmail} type='text' />
            </Input>
          </VStack>
          <VStack space='xs'>
            <Text className='text-typography-500 leading-1'>Password</Text>
            <Input className='text-center'>
              <InputField
                value={password}
                onChangeText={setPassword}
                type='password'
              />
            </Input>
          </VStack>
          <HStack space='sm'>
            <Button className='flex-1' variant='outline' onPress={onSignup}>
              <ButtonText>Sign up</ButtonText>
            </Button>
            <Button className='flex-1' onPress={onLogin}>
              <ButtonText>Sign in</ButtonText>
            </Button>
          </HStack>
        </VStack>
      </FormControl>
    </Box>
  );
}
