"use client"
import { type Control, Controller, type FieldErrors, type UseFormRegister, type UseFormSetValue } from "react-hook-form"
import { IMaskInput } from "react-imask"
import { toast } from "react-hot-toast"
import { handleCepVerify } from "@/app/utils/apibuscacep"

type FormAddressDataProps = {
  register: UseFormRegister<any>
  errors: FieldErrors<any>
  control: Control<any>
  setValue: UseFormSetValue<any>
}

export default function FormAddressData({ register, errors, control, setValue }: FormAddressDataProps) {
  const handleCepBlur = async (value: string) => {
    if (value && value.replace(/\D/g, "").length === 8) {
      try {
        const addressData = await handleCepVerify(value.replace(/\D/g, ""))
        if (!addressData.erro) {
          // Update form fields with the address data
          setValue("rua", addressData.logradouro)
          setValue("bairro", addressData.bairro)
          setValue("cidade", addressData.localidade)
          setValue("estado", addressData.uf)
          toast.success("CEP encontrado!")
        } else {
          toast.error("CEP não encontrado.")
        }
      } catch (error) {
        console.error("Erro ao buscar CEP:", error)
        toast.error("Erro ao buscar CEP. Verifique sua conexão.")
      }
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <Controller
          name="cep"
          control={control}
          render={({ field }) => (
            <IMaskInput
              mask="00000-000"
              value={field.value}
              onAccept={(value) => field.onChange(value)}
              onBlur={() => handleCepBlur(field.value)}
              placeholder="CEP"
              className={`p-2 border ${errors.cep ? "border-red-500" : "border-gray-300"} rounded-lg w-full`}
            />
          )}
        />
        {errors.cep && <span className="text-red-500 text-sm block">{String(errors.cep.message)}</span>}
      </div>

      <div className="space-y-1">
        <input
          type="text"
          {...register("rua")}
          placeholder="Rua"
          className={`p-2 border ${errors.rua ? "border-red-500" : "border-gray-300"} rounded-lg w-full`}
        />
        {errors.rua && <span className="text-red-500 text-sm block">{String(errors.rua.message)}</span>}
      </div>

      <div className="space-y-1">
        <input
          type="text"
          {...register("numero")}
          placeholder="Número"
          className={`p-2 border ${errors.numero ? "border-red-500" : "border-gray-300"} rounded-lg w-full`}
        />
        {errors.numero && <span className="text-red-500 text-sm block">{String(errors.numero.message)}</span>}
      </div>

      <div className="space-y-1">
        <input
          type="text"
          {...register("bairro")}
          placeholder="Bairro"
          className={`p-2 border ${errors.bairro ? "border-red-500" : "border-gray-300"} rounded-lg w-full`}
        />
        {errors.bairro && <span className="text-red-500 text-sm block">{String(errors.bairro.message)}</span>}
      </div>

      <div className="space-y-1">
        <input
          type="text"
          {...register("cidade")}
          placeholder="Cidade"
          className={`p-2 border ${errors.cidade ? "border-red-500" : "border-gray-300"} rounded-lg w-full`}
        />
        {errors.cidade && <span className="text-red-500 text-sm block">{String(errors.cidade.message)}</span>}
      </div>

      <div className="space-y-1">
        <input
          type="text"
          {...register("estado")}
          placeholder="Estado"
          className={`p-2 border ${errors.estado ? "border-red-500" : "border-gray-300"} rounded-lg w-full`}
        />
        {errors.estado && <span className="text-red-500 text-sm block">{String(errors.estado.message)}</span>}
      </div>

      <div className="space-y-1">
        <input
          type="text"
          {...register("complemento")}
          placeholder="Complemento"
          className={`p-2 border ${errors.complemento ? "border-red-500" : "border-gray-300"} rounded-lg w-full`}
        />
        {errors.complemento && <span className="text-red-500 text-sm block">{String(errors.complemento.message)}</span>}
      </div>
    </div>
  )
}
