'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast, { Toaster } from 'react-hot-toast';
import { z } from 'zod';

import { userValidation, addressValidation } from '@/app/utilities/zodvalidation';
import { handleADD } from '@/app/utilities/handleactions';
import FormUserData from './formUserData';
import FormUserAddress from './formUserAddress';

const combinedSchema = z.object({
    ...userValidation.shape,
    ...addressValidation.shape,
}).refine((data) => data.senha === data.confirmaSenha, {
    path: ['confirmaSenha'],
    message: 'As senhas não conferem',
});

type FormData = z.infer<typeof combinedSchema>;

export default function Register() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [cpfMessage, setCPFMessage] = useState("");
    const [cpfValid, setCPFValid] = useState(false);

    const methods = useForm<FormData>({
        resolver: zodResolver(combinedSchema),
        defaultValues: {
            nome: "", email: "", senha: "", confirmaSenha: "", cpf: "", telefone: "",
            cep: "", rua: "", numero: "", complemento: "", bairro: "", cidade: "", estado: ""
        }
    });

    const { register, handleSubmit, formState: { errors }, control, setValue } = methods;

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            await handleADD(data);
            toast.success("Usuário cadastrado com sucesso!");
            methods.reset();
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
            toast.error("Erro ao cadastrar usuário!");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='flex flex-col min-h-screen justify-center items-center bg-gray-100'>
            <Toaster position="bottom-right" />
            <div className='w-full max-w-6xl mx-auto p-4 bg-white shadow-md rounded-lg'>
                <h1 className='text-4xl font-bold mb-6 text-center'>Cadastro</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                    <div className='flex flex-col md:flex-row gap-6'>
                        <div className='flex-1'>
                            <FormUserData 
                                register={register} 
                                errors={errors} 
                                control={control}
                                cpfMessage={cpfMessage} 
                                setCPFMessage={setCPFMessage}
                                cpfValid={cpfValid} 
                                setCPFValid={setCPFValid} 
                            />
                        </div>
                        <div className='flex-1'>
                            <FormUserAddress 
                                register={register} 
                                errors={errors} 
                                control={control} 
                                setValue={setValue} 
                            />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            disabled={isSubmitting || cpfValid === false}
                            className={`bg-blue-900 text-white font-bold py-2 px-6 rounded-lg 
                            ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            {isSubmitting ? "Cadastrando..." : "Cadastrar"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
