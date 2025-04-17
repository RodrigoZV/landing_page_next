"use client"
import { type Control, Controller, type FieldErrors, type UseFormRegister } from "react-hook-form"
import { IMaskInput } from "react-imask"
import { handleCpfVerify } from "@/app/utils/apivalidacpf"

type FormUserDataProps = {
  register: UseFormRegister<any>
  errors: FieldErrors<any>
  control: Control<any>
  cpfMessage: string
  cpfIsValid: boolean | null
  setCpfMessage: (message: string) => void
  setCpfIsValid: (isValid: boolean | null) => void
}

export default function FormUserData({
  register,
  errors,
  control,
  cpfMessage,
  cpfIsValid,
  setCpfMessage,
  setCpfIsValid,
}: FormUserDataProps) {
  const handleCpfBlur = async (value: string) => {
    if (value && value.length === 14) {
      // Com máscara: 000.000.000-00
      const result = await handleCpfVerify(value)
      setCpfMessage(result)
      setCpfIsValid(result === "CPF válido.")
    } else {
      setCpfMessage("")
      setCpfIsValid(null)
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <input
          type="text"
          {...register("nome")}
          placeholder="Nome"
          className={`p-2 border ${errors.nome ? "border-red-500" : "border-gray-300"} rounded-lg w-full`}
        />
        {errors.nome && <span className="text-red-500 text-sm block">{String(errors.nome.message)}</span>}
      </div>

      <div className="space-y-1">
        <input
          type="text"
          {...register("email")}
          placeholder="Email"
          className={`p-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg w-full`}
        />
        {errors.email && <span className="text-red-500 text-sm block">{String(errors.email.message)}</span>}
      </div>

      <div className="space-y-1">
        <Controller
          name="cpf"
          control={control}
          render={({ field }) => (
            <IMaskInput
              mask="000.000.000-00"
              value={field.value}
              onAccept={(value) => field.onChange(value)}
              onBlur={() => handleCpfBlur(field.value)}
              placeholder="CPF"
              className={`p-2 border ${
                errors.cpf
                  ? "border-red-500"
                  : cpfIsValid === true
                    ? "border-green-500"
                    : cpfIsValid === false
                      ? "border-red-500"
                      : "border-gray-300"
              } rounded-lg w-full`}
            />
          )}
        />
        {errors.cpf && <span className="text-red-500 text-sm block">{String(errors.cpf.message)}</span>}
        {cpfMessage && !errors.cpf && (
          <span
            className={`text-sm block p-2 rounded mt-1 ${
              cpfIsValid ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {cpfMessage}
          </span>
        )}
      </div>

      <div className="space-y-1">
        <Controller
          name="telefone"
          control={control}
          render={({ field }) => (
            <IMaskInput
              mask="(00) 00000-0000"
              value={field.value}
              onAccept={(value) => field.onChange(value)}
              placeholder="Telefone"
              className={`p-2 border ${errors.telefone ? "border-red-500" : "border-gray-300"} rounded-lg w-full`}
            />
          )}
        />
        {errors.telefone && <span className="text-red-500 text-sm block">{String(errors.telefone.message)}</span>}
      </div>

      <div className="space-y-1">
        <input
          type="text"
          {...register("login")}
          placeholder="Login"
          className={`p-2 border ${errors.login ? "border-red-500" : "border-gray-300"} rounded-lg w-full`}
        />
        {errors.login && <span className="text-red-500 text-sm block">{String(errors.login.message)}</span>}
      </div>

      <div className="space-y-1">
        <input
          type="password"
          {...register("senha")}
          placeholder="Senha"
          className={`p-2 border ${errors.senha ? "border-red-500" : "border-gray-300"} rounded-lg w-full`}
        />
        {errors.senha && <span className="text-red-500 text-sm block">{String(errors.senha.message)}</span>}
      </div>

      <div className="space-y-1">
        <input
          type="password"
          {...register("confirmaSenha")}
          placeholder="Confirmar Senha"
          className={`p-2 border ${errors.confirmaSenha ? "border-red-500" : "border-gray-300"} rounded-lg w-full`}
        />
        {errors.confirmaSenha && <span className="text-red-500 text-sm block">{String(errors.confirmaSenha.message)}</span>}
      </div>
    </div>
  )
}
