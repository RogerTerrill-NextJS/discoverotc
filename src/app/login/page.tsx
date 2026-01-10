'use client';

import { useState } from 'react';
import { createSupabaseBrowserClient } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { LogoutButton } from '@/components/LogoutButton';

export default function LoginPage() {
  const supabase = createSupabaseBrowserClient();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push('/admin/airports/new');
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-50'>
      <div className='bg-white p-8 rounded-lg shadow max-w-sm w-full space-y-4'>
        <h1 className='text-xl font-bold'>Admin Login</h1>

        <input
          className='w-full border rounded px-3 py-2'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className='w-full border rounded px-3 py-2'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className='text-red-600 text-sm'>{error}</p>}

        <button
          onClick={handleLogin}
          className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700'
        >
          Login
        </button>
      </div>
      <LogoutButton />
    </div>
  );
}
