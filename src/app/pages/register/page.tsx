"use client"

import { useState } from 'react';
import { zodValidation } from '../../utilities/zodvalidation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type FormData = {
    nome: string;
}

export default function Register() {
    const [nome, setNome] = useState('');

    const onSubmit = (data: FormData) => {
        console.log(data);
        alert("Cadastro realizado com sucesso!");
    }

    const { register, handleSubmit: handleSubmit, formState: { errors } } =
        useForm<FormData>({
            resolver: zodResolver(zodValidation),
        });

return (
    <div className='container py-12 px-4 items-center h-screen'>
        <h1 className='text-4xl font-bold mb-6 text-center'>CADASTRE-SE </h1>
        <form className='flex flex-col bg-white shadow-md rounded-lg p-6 
                mx-auto w-full max-w-md' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Nome' value={nome}
                {...register("nome")}
                onChange={(e) => setNome(e.target.value)} />
            {errors.nome && <span className='text-red-500'>{errors.nome.message}</span>}
            <button type="submit" className='bg-blue-900 text-white rounded-lg p-2 mt-4'>
                Cadastrar-se
            </button>
        </form>
    </div>
);
}