"use client"

<<<<<<< HEAD
import { useAuth } from '@/app/lib/useauth';
import { useEffect, useState } from "react"
import { handleSelectAll, handleDelete, handleUpdate } from "@/app/utils/handlecollection"
import { toast, Toaster } from "react-hot-toast"
import { Trash2, ClipboardEdit, X } from "lucide-react"
import { useRouter } from 'next/navigation';
import LoginComponent from '@/app/components/login'; // ajuste para o caminho correto
=======
import type React from "react"

import { useEffect, useState } from "react"
import { handleSelectAll, handleDelete, handleUpdate } from "../../utilities/handleactions"
import { toast, Toaster } from "react-hot-toast"
import { Trash2, ClipboardEdit, X } from "lucide-react"
>>>>>>> f725b2acd16fb484591e34d69d551b52edf75ee6

interface User {
  id: string
  nome: string
  email: string
  cpf: string
  telefone?: string
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
<<<<<<< HEAD
  const [showLoginModal, setShowLoginModal] = useState(false)

  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      toast.error("É preciso estar logado para acessar essa página");
      setTimeout(() => {
        setShowLoginModal(true)
      }, 1000) // 1 segundo para permitir a leitura do toast
      return;
    }

=======

  useEffect(() => {
>>>>>>> f725b2acd16fb484591e34d69d551b52edf75ee6
    async function fetchUsers() {
      setLoading(true)
      const data = await handleSelectAll()
      if (data) {
        setUsers(data as User[])
      } else {
        console.error("Erro ao buscar os usuários.")
      }
      setLoading(false)
    }
<<<<<<< HEAD

    fetchUsers()
  }, [user])

  if (!user) {
    return (
      <>
        <Toaster position="bottom-right" />
        {showLoginModal && <LoginComponent onClose={() => router.push('/')} />}
      </>
    )
  }
=======
    fetchUsers()
  }, [])
>>>>>>> f725b2acd16fb484591e34d69d551b52edf75ee6

  const deleteUser = async (id: string) => {
    const confirmDelete = window.confirm("Você tem certeza que deseja excluir este usuário?")
    if (confirmDelete) {
      try {
        await handleDelete(id)
        setUsers(users.filter((user) => user.id !== id))
        toast.success("Usuário excluído com sucesso!")
      } catch (error) {
        console.error("Erro ao excluir o usuário: ", error)
        toast.error("Erro ao excluir o usuário!")
      }
    }
  }

  const openEditDialog = (user: User) => {
    setSelectedUser({ ...user })
    setIsDialogOpen(true)
  }

  const closeEditDialog = () => {
    setIsDialogOpen(false)
    setSelectedUser(null)
  }

  const editUser = async (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedUser) {
      try {
        await handleUpdate(selectedUser.id, selectedUser)
        setUsers(users.map((user) => (user.id === selectedUser.id ? selectedUser : user)))
        toast.success("Usuário editado com sucesso!")
        closeEditDialog()
      } catch (error) {
        console.error("Erro ao editar o usuário: ", error)
        toast.error("Erro ao editar o usuário!")
      }
    }
  }

  if (loading) {
    return <div className="text-center py-12">Carregando...</div>
  }

  return (
    <div className="container py-12 px-4 items-center min-h-screen">
      <Toaster position="bottom-right" />
      <h1 className="text-4xl font-bold mb-6 text-center">USUÁRIOS</h1>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
            <tr className="text-left text-sm font-medium text-gray-900 dark:text-white">
              <th scope="col" className="px-6 py-3">
                Nome
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                CPF
              </th>
              <th scope="col" className="px-6 py-3">
                Telefone
              </th>
              <th scope="col" className="px-6 py-3">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="overflow-x-auto">
            {users.map((user) => (
              <tr
                key={user.id}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{user.nome}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.cpf}</td>
                <td className="px-6 py-4">{user.telefone}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-4">
                    <button
                      className="flex items-center text-blue-600 hover:text-blue-900"
                      onClick={() => openEditDialog(user)}
                    >
                      <ClipboardEdit className="w-6 h-6 mr-1" />
                      Editar
                    </button>
                    <button
                      className="flex items-center text-red-600 hover:text-red-900"
                      onClick={() => deleteUser(user.id)}
                    >
                      <Trash2 className="w-6 h-6 mr-1" />
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Custom Dialog without Radix UI */}
      {isDialogOpen && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/30" onClick={closeEditDialog}></div>
          <div className="relative z-10 w-[90vw] max-w-md p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Editar Usuário</h2>
              <button onClick={closeEditDialog} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={editUser}>
              <input
                type="text"
                placeholder="Nome"
                className="border-2 border-blue-900 rounded-lg p-2 mt-2 w-full"
                value={selectedUser.nome}
                onChange={(e) => setSelectedUser({ ...selectedUser, nome: e.target.value })}
              />
              <input
                type="text"
                placeholder="Email"
                className="border-2 border-blue-900 rounded-lg p-2 mt-2 w-full"
                value={selectedUser.email}
                onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
              />
              <input
                type="text"
                placeholder="CPF"
                className="border-2 border-blue-900 rounded-lg p-2 mt-2 w-full"
                value={selectedUser.cpf}
                onChange={(e) => setSelectedUser({ ...selectedUser, cpf: e.target.value })}
              />
              <input
                type="text"
                placeholder="Telefone"
                className="border-2 border-blue-900 rounded-lg p-2 mt-2 w-full"
                value={selectedUser.telefone || ""}
                onChange={(e) => setSelectedUser({ ...selectedUser, telefone: e.target.value })}
              />

              <div className="flex gap-2 mt-4">
                <button type="submit" className="bg-purple-900 text-white rounded-lg p-2 px-4 hover:bg-purple-800">
                  Atualizar
                </button>
                <button
                  type="button"
                  onClick={closeEditDialog}
                  className="bg-red-900 text-white rounded-lg p-2 px-4 hover:bg-red-800"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> f725b2acd16fb484591e34d69d551b52edf75ee6
