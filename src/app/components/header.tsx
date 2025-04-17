<<<<<<< HEAD
"use client"

import Nav from "./nav"
import Link from "next/link"
import { useState } from "react"

import { User, ClipboardPenLine, FileUserIcon, LogOut } from "lucide-react"

import { useAuth } from "@/app/lib/useauth"
import { useLogout } from "@/app/lib/useauth"

import LoginComponent from "../components/login"


export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const { user } = useAuth()

  const openLoginModal = () => {
    setIsLoginModalOpen(true)
  }

  const closeLoginModal = () => {
    setIsLoginModalOpen(false)
  }

  return (
    <>
      <header className="grid grid-cols-5 grid-rows-2 bg-gray-800 text-white px-2 py-1">
        {/* Coluna esquerda ocupando 2 linhas */}
        <div className="row-span-2 col-span-1 flex items-center justify-center">
          <h1 className="text-lg font-bold">MY NEXT APP</h1>
        </div>
        <div className="col-span-4 flex justify-end items-center space-x-4 pr-4">
         
          {user ? (
            <>
            <FileUserIcon className="w-5 h-5" />
            <Link href="/profile" className="hover:underline text-sm">
              Perfil
            </Link>
            <LogOut className="w-5 h-5" />
              <button onClick={useLogout} className="hover:underline text-sm">
                LogOut
              </button>
            </>
          ) : (
            <>
             <User className="w-5 h-5" />
              <button onClick={openLoginModal} className="hover:underline text-sm">
                LogIn
              </button>
              <span>|</span>
              <ClipboardPenLine className="w-5 h-5" />
              <Link href="/register" className="hover:underline text-sm">
                Cadastrar-se
              </Link>
            </>
          )}
        </div>

        {/* Linha 2 direita - Menu de navegação */}
        <div className="col-span-4 flex justify-end items-center pr-4">
          <Nav />
        </div>
      </header>

      {/* Render the login modal conditionally */}
      {isLoginModalOpen && <LoginComponent onClose={closeLoginModal} />}
    </>
  )
}
=======
'use client';

import Nav from './nav';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, ClipboardPenLine, FileUserIcon, LogOut } from 'lucide-react';
import { useAuth, useUnAuth } from '../lib/firebaseauth';
import Login from '@/app/components/login';

export default function Header() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const { user } = useAuth(); 
    const router = useRouter(); 

    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);

    const handleLogout = async () => {
        await useUnAuth();       // Desloga o usuário
        router.push('/');        // Redireciona para a home
    }

    return (
        <header className="grid grid-cols-5 grid-rows-2 bg-gray-800 text-white px-2 py-1">
            <div className="col-span-1 row-span-2 flex items-center justify-center">
                <h1 className="text-1sm font-bold content-center">MY NEXT APP</h1>
            </div>
            <div className="col-span-4 flex items-center justify-end space-x-4">
                {user ? (
                    <>
                        <FileUserIcon className='w-6 h-6' />
                        <Link href="/profile" className="text-sm font-bold">Perfil</Link>
                        <LogOut className='w-6 h-6' />
                        <button className="text-sm font-bold" onClick={handleLogout}>
                            Sair
                        </button>
                    </>
                ) : (
                    <>
                        <User className='w-6 h-6' />
                        <button onClick={openLoginModal} className="text-sm font-bold">
                            Login
                        </button>
                        <ClipboardPenLine className='w-6 h-6' />
                        <Link href="/register" className="text-sm font-bold">Registrar</Link>
                    </>
                )}
            </div>
            <div className='col-span-4 flex items-center justify-end'>
                <Nav />
            </div>
            {isLoginModalOpen && <Login onClose={closeLoginModal} />}
        </header>
    );
}
>>>>>>> f725b2acd16fb484591e34d69d551b52edf75ee6
