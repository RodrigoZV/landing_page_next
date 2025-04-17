import { z } from 'zod';

export const registerSchema = z.object({
  nome:
    z.string().min(1, { message: 'Nome é obrigatório' })
      .min(3, { message: 'Nome deve ter pelo menos 3 caracteres' }),
  email:
    z.string().email({ message: 'Email inválido' })
      .min(1, { message: 'Email é obrigatório' }).min(3, { message: 'Email deve ter pelo menos 3 caracteres' }),
  cpf:
    z.string().min(1, { message: 'CPF é obrigatório' }).min(11, { message: 'CPF deve ter pelo menos 11 caracteres' }),
  telefone:
    z.string().optional(),
  login:
    z.string().min(1, { message: 'Login é obrigatório' }).min(3, { message: 'Login deve ter pelo menos 3 caracteres' }),
  senha:
    z.string().min(1, { message: 'Senha é obrigatória' }).min(6, { message: 'Senha deve ter pelo menos 6 caracteres' }),
  confirmaSenha:
    z.string().min(1, { message: 'Confirmação de senha é obrigatória' })
      .min(6, { message: 'Confirmação de senha deve ter pelo menos 6 caracteres' })
})


export const addressSchema = z.object({
  cep:
    z.string().min(1, { message: 'CEP é obrigatório' }).length(9, { message: 'CEP deve ter 8 caracteres' }),
  rua:
    z.string().min(1, { message: 'Rua é obrigatória' }).min(3, { message: 'Rua deve ter pelo menos 3 caracteres' }),
  numero:
    z.string().min(1, { message: 'Número é obrigatório' }).min(1, { message: 'Número deve ter pelo menos 1 caractere' }),
  bairro:
    z.string().min(1, { message: 'Bairro é obrigatório' }).min(3, { message: 'Bairro deve ter pelo menos 3 caracteres' }),
  cidade:
    z.string().min(1, { message: 'Cidade é obrigatória' }).min(3, { message: 'Cidade deve ter pelo menos 3 caracteres' }),
  estado:
    z.string().min(1, { message: 'Estado é obrigatório' }).length(2, { message: 'Estado deve ter 2 caracteres' }),
  complemento:
    z.string().optional(),
})
