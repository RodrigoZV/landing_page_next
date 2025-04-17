// hooks/useAuth.ts
import { useEffect, useState } from 'react';
import { auth } from '@/app/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';

interface User {
  uid: string;
  email: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user ? { uid: user.uid, email: user.email || '' } : null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
};

export function useLogout() {
  const router = useRouter();

  const logout = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Erro ao sair:', error);
    }
  };

  return logout;
}