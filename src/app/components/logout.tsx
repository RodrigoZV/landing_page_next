'use client';

import { signOut } from 'firebase/auth';
import { auth } from '@/app/lib/firebase';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/lib/useauth';

export default function LogOut() {
    const { user } = useAuth(); // Acessa o usuário autenticado
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push('/'); // Redireciona para a página inicial após o logout
        } catch (error) {
            console.error('Erro ao sair:', error);
        }
    };
}