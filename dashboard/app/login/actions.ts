'use server';

import { login, register } from '@/api/auth';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function handleLogin(email: string, password: string) {
  let redirectUrl = `/login?errorMessage=${encodeURIComponent(
    'Failed to login'
  )}`;
  try {
    const res = await login(email, password);
    // TODO: save token for cookies
    if (res.token) {
      cookies().set('token', res.token);
      redirectUrl = '/dashboard';
    }

    console.log(res);
  } catch (error) {
    console.log(error);
  } finally {
    redirect(redirectUrl);
  }
}

export async function handleSignup(email: string, password: string) {
  let redirectUrl = `/login?errorMessage=${encodeURIComponent(
    'Failed to login'
  )}`;
  try {
    const res = await register(email, password);
    // TODO: save token for cookies
    if (res.token) {
      cookies().set('token', res.token);
      redirectUrl = '/dashboard';
    }

    console.log(res);
  } catch (error) {
    console.log(error);
  } finally {
    redirect(redirectUrl);
  }
}
