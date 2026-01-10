'use client';

import { createSupabaseBrowserClient } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function LogoutButton() {
  const supabase = createSupabaseBrowserClient();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setIsLoggedIn(!!data.session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsLoggedIn(!!session);
      },
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [supabase]);

  async function logout() {
    if (!isLoggedIn) return;
    await supabase.auth.signOut();
    router.push('/login');
  }

  return (
    <button
      onClick={isLoggedIn ? logout : undefined}
      disabled={!isLoggedIn}
      className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition
        ${
          isLoggedIn
            ? 'border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300'
            : 'border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50'
        }
      `}
    >
      Logout
    </button>
  );
}
