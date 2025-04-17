"use client"

import { useAuth } from '@/app/lib/useauth';
import { useEffect, useState } from "react"
import { handleDelete, handleUpdate } from "@/app/utils/handlecollection"
import { toast, Toaster } from "react-hot-toast"
import { Trash2, ClipboardEdit, X } from "lucide-react"
import { useRouter } from 'next/navigation';
import LoginComponent from '@/app/components/login';

interface User {
  id: string
  nome: string
  email: string
  cpf: string
  telefone?: string
}

export default function Profile() {
  const [userData, setUserData] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      toast.error("É preciso estar logado para acessar essa página");
      setTimeout(() => {
        setShowLoginModal(true)
      }, 1000)
      return;
    }

    // Aqui você pode buscar os dados completos do usuário se necessário
    // Por enquanto, vamos usar os dados básicos que já temos no auth
    if (user) {
      setUserData({
        id: user.uid, // assumindo que o auth retorna um uid
        nome: '',
        email: user.email || '',
        cpf: '', // você precisará buscar isso do Firestore
        telefone: ''
      });
      setLoading(false);
    }
  }, [user]);

  if (!user) {
    return (
      <>
        <Toaster position="bottom-right" />
        {showLoginModal && <LoginComponent onClose={() => router.push('/')} />}
      </>
    )
  }

  const deleteProfile = async () => {
    const confirmDelete = window.confirm("Você tem certeza que deseja excluir seu perfil? Esta ação não pode ser desfeita!")
    if (confirmDelete && userData) {
      try {
        await handleDelete(userData.id)
        toast.success("Perfil excluído com sucesso!")

        router.push('/')
      } catch (error) {
        console.error("Erro ao excluir o perfil: ", error)
        toast.error("Erro ao excluir o perfil!")
      }
    }
  }

  const openEditDialog = () => {
    setIsDialogOpen(true)
  }

  const closeEditDialog = () => {
    setIsDialogOpen(false)
  }

  const updateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    if (userData) {
      try {
        await handleUpdate(userData.id, {
          nome: userData.nome,
          email: userData.email,
          cpf: userData.cpf,
          telefone: userData.telefone
        })
        toast.success("Perfil atualizado com sucesso!")
        closeEditDialog()
      } catch (error) {
        console.error("Erro ao atualizar o perfil: ", error)
        toast.error("Erro ao atualizar o perfil!")
      }
    }
  }

  if (loading) {
    return <div className="text-center py-12">Carregando...</div>
  }

  return (
    <div className="container py-12 px-4 items-center min-h-screen">
      <Toaster position="bottom-right" />
      <h1 className="text-4xl font-bold mb-6 text-center">MEU PERFIL</h1>

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {userData && (
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold">Informações Pessoais</h2>
              <p className="mt-2"><span className="font-medium">Nome:</span> {userData.nome}</p>
              <p><span className="font-medium">Email:</span> {userData.email}</p>
              <p><span className="font-medium">CPF:</span> {userData.cpf || 'Não informado'}</p>
              <p><span className="font-medium">Telefone:</span> {userData.telefone || 'Não informado'}</p>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <button
                className="flex items-center bg-blue-600 text-white rounded-lg p-2 px-4 hover:bg-blue-700"
                onClick={openEditDialog}
              >
                <ClipboardEdit className="w-5 h-5 mr-1" />
                Editar Perfil
              </button>
              <button
                className="flex items-center bg-red-600 text-white rounded-lg p-2 px-4 hover:bg-red-700"
                onClick={deleteProfile}
              >
                <Trash2 className="w-5 h-5 mr-1" />
                Excluir Perfil
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal de Edição */}
      {isDialogOpen && userData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/30" onClick={closeEditDialog}></div>
          <div className="relative z-10 w-[90vw] max-w-md p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Editar Perfil</h2>
              <button onClick={closeEditDialog} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={updateProfile}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nome</label>
                  <input
                    type="text"
                    className="border-2 border-blue-900 rounded-lg p-2 mt-1 w-full"
                    value={userData.nome}
                    onChange={(e) => setUserData({ ...userData, nome: e.target.value })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="border-2 border-blue-900 rounded-lg p-2 mt-1 w-full"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">CPF</label>
                  <input
                    type="text"
                    className="border-2 border-blue-900 rounded-lg p-2 mt-1 w-full"
                    value={userData.cpf}
                    onChange={(e) => setUserData({ ...userData, cpf: e.target.value })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Telefone</label>
                  <input
                    type="text"
                    className="border-2 border-blue-900 rounded-lg p-2 mt-1 w-full"
                    value={userData.telefone || ""}
                    onChange={(e) => setUserData({ ...userData, telefone: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex gap-2 mt-6">
                <button type="submit" className="bg-purple-900 text-white rounded-lg p-2 px-4 hover:bg-purple-800">
                  Atualizar
                </button>
                <button
                  type="button"
                  onClick={closeEditDialog}
                  className="bg-gray-500 text-white rounded-lg p-2 px-4 hover:bg-gray-600"
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
}