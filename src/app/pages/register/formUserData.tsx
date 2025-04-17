import { IMaskInput } from 'react-imask';
import { Control, Controller, FieldErrors, UseFormRegister } from 'react-hook-form';
import { validateCPF } from '@/app/utilities/apivalidacpf';

// Defina o tipo para os dados do formulário
interface FormUserDataProps {
  nome: string;
  email: string;
  senha: string;
  confirmaSenha: string;
  cpf: string;
  telefone: string;
}

interface FormUserDataComponentProps {
  register: UseFormRegister<FormUserDataProps>;
  errors: FieldErrors<FormUserDataProps>;
  control: Control<FormUserDataProps>;
  cpfValid: boolean;
  setCPFValid: (valid: boolean) => void;
}

export default function FormUserData({
  register,
  errors,
  control,
  cpfValid,
  setCPFValid,
}: FormUserDataComponentProps) {
  const cpfBlur = async (value: string) => {
    const result = await validateCPF(value);
    setCPFValid(result);
  };

  return (
    <div className="container py-12 px-4 items-center h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">Dados Pessoais</h1>
      <input
        type="text"
        placeholder="Nome"
        {...register("nome")}
        className="border-2 border-blue-900 rounded-lg p-2 mt-2 w-full"
      />
      {errors.nome && <span className="text-red-500">{String(errors.nome.message)}</span>}

      <input
        type="text"
        placeholder="Email"
        {...register("email")}
        className="border-2 border-blue-900 rounded-lg p-2 mt-2 w-full"
      />
      {errors.email && <span className="text-red-500">{String(errors.email.message)}</span>}

      <input
        type="password"
        placeholder="Senha"
        {...register("senha")}
        className="border-2 border-blue-900 rounded-lg p-2 mt-2 w-full"
      />
      {errors.senha && <span className="text-red-500">{String(errors.senha.message)}</span>}

      <input
        type="password"
        placeholder="Confirme a senha"
        {...register("confirmaSenha")}
        className="border-2 border-blue-900 rounded-lg p-2 mt-2 w-full"
      />
      {errors.confirmaSenha && (
        <span className="text-red-500">{String(errors.confirmaSenha.message)}</span>
      )}

      <Controller
        name="cpf"
        control={control}
        render={({ field }) => (
          <IMaskInput
            {...field}
            mask="000.000.000-00"
            placeholder="CPF"
            className={`border-2 ${
              errors.cpf
                ? "border-red-500"
                : cpfValid === true
                ? "border-green-500"
                : cpfValid === false
                ? "border-red-500"
                : "border-blue-900"
            } rounded-lg p-2 mt-2 w-full`}
            onBlur={() => cpfBlur(field.value)}
            onAccept={(value: string) => field.onChange(value)}
          />
        )}
      />
      {errors.cpf && <span className="text-red-500">{String(errors.cpf.message)}</span>}

      <Controller
        name="telefone"
        control={control}
        render={({ field }) => (
          <IMaskInput
            {...field}
            mask="(00) 00000-0000"
            placeholder="Telefone"
            className="border-2 border-blue-900 rounded-lg p-2 mt-2 w-full"
            onAccept={(value: string) => field.onChange(value)}
          />
        )}
      />
      {errors.telefone && (
        <span className="text-red-500">{String(errors.telefone.message)}</span>
      )}
    </div>
  );
}