"use client"

import Nav from "./nav"
import Link from "next/link"
import { useState } from "react"

import { User, ClipboardPenLine, FileUserIcon, LogOut } from "lucide-react"

import { useAuth } from "@/app/lib/useauth"
import { useLogout } from "@/app/lib/useauth"

import Login from "./login"


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
      {isLoginModalOpen && <Login onClose={closeLoginModal} />}
    </>
  )
}
