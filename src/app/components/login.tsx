"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/app/lib/firebase';
import { sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import { X } from 'lucide-react';

interface LoginComponentProps {
  onClose: () => void
}

export default function Login({ onClose }: LoginComponentProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true); // Adicione um estado de loading
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Verifica se o email está verificado (se necessário)
      if (userCredential.user && !userCredential.user.emailVerified) {
        await sendEmailVerification(userCredential.user);
        setError('Por favor, verifique seu email antes de fazer login');
        return;
      }
  
      router.push('/profile');
    } catch (err) {
      let errorMessage = "Erro ao fazer login";
      
      if (err instanceof Error) {
        switch (err.message) {
          case "Firebase: Error (auth/invalid-credential).":
          case "Firebase: Error (auth/wrong-password).":
            errorMessage = "Email ou senha incorretos";
            break;
          case "Firebase: Error (auth/user-not-found).":
            errorMessage = "Usuário não encontrado";
            break;
          case "Firebase: Error (auth/too-many-requests).":
            errorMessage = "Muitas tentativas. Tente mais tarde";
            break;
          default:
            errorMessage = `Erro: ${err.message}`;
        }
      }
      
      setError(errorMessage);
      console.error("Erro detalhado:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full flex overflow-hidden">
        {/* Left section */}
        <div className="bg-gray-600 text-white p-8 flex-1 hidden md:block">
          <h2 className="text-3xl font-bold mb-6">Bem-vindo</h2>
          <div className="space-y-4">
            <p className="text-lg">Que bom ter você aqui!</p>
            <p>Entre para acessar sua conta e aproveitar todos os nossos produtos incríveis.</p>
            <p>Não tem uma conta ainda? Cadastre-se agora e comece sua jornada conosco!</p>
          </div>
        </div>

        {/* Right section */}
        <div className="bg-white p-8 flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Entrar</h2>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700"
              disabled={isLoading}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                required
                placeholder="seu@email.com"
                disabled={isLoading}
              />
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Senha
                </label>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-500">
                  Esqueceu sua senha?
                </a>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                required
                placeholder="Sua senha"
                disabled={isLoading}
              />
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 disabled:opacity-70"
                disabled={isLoading}
              >
                {isLoading ? 'Entrando...' : 'Entrar'}
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-4">Não tem uma conta?</p>
            <a
              href="/register"
              className="w-full flex justify-center py-3 px-4 rounded-lg shadow-sm text-sm font-medium text-gray-600 bg-white border border-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition duration-300"
            >
              Cadastrar
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
