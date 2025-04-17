import { Control, Controller, FieldErrors } from "react-hook-form";

// Defina o tipo para os dados do formulário
interface AddressFormData {
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
}

interface FormUserAddressProps {
  control: Control<AddressFormData>; // Substitui `any` pelo tipo AddressFormData
  errors: FieldErrors<AddressFormData>; // Substitui `any` pelo tipo AddressFormData
}

export default function FormUserAddress({ control, errors }: FormUserAddressProps) {
  return (
    <div className="container py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Endereço</h1>
      <Controller
        name="cep"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="text"
            placeholder="CEP"
            className={`border-2 ${
              errors.cep ? "border-red-500" : "border-blue-900"
            } rounded-lg p-2 mt-2 w-full`}
          />
        )}
      />
      {errors.cep && <span className="text-red-500">{String(errors.cep.message)}</span>}

      <Controller
        name="rua"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="text"
            placeholder="Rua"
            className={`border-2 ${
              errors.rua ? "border-red-500" : "border-blue-900"
            } rounded-lg p-2 mt-2 w-full`}
          />
        )}
      />
      {errors.rua && <span className="text-red-500">{String(errors.rua.message)}</span>}

      <Controller
        name="numero"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="text"
            placeholder="Número"
            className={`border-2 ${
              errors.numero ? "border-red-500" : "border-blue-900"
            } rounded-lg p-2 mt-2 w-full`}
          />
        )}
      />
      {errors.numero && <span className="text-red-500">{String(errors.numero.message)}</span>}

      <Controller
        name="bairro"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="text"
            placeholder="Bairro"
            className={`border-2 ${
              errors.bairro ? "border-red-500" : "border-blue-900"
            } rounded-lg p-2 mt-2 w-full`}
          />
        )}
      />
      {errors.bairro && <span className="text-red-500">{String(errors.bairro.message)}</span>}
    </div>
  );
}