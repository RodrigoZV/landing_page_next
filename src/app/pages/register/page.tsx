
"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";

// Defina o tipo para os dados do formulário
interface RegisterFormData {
  cpf: string;
}

export default function RegisterPage() {
  const { control, handleSubmit } = useForm<RegisterFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: RegisterFormData) => {
    setIsSubmitting(true);
    try {
      console.log("Dados enviados:", data);
      // Adicione a lógica para enviar os dados
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Registrar</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Controller
          name="cpf"
          control={control}
          render={({ field }) => (
            <IMaskInput
              {...field}
              mask="000.000.000-00"
              placeholder="CPF"
              className="border-2 border-blue-900 rounded-lg p-2 w-full"
            />
          )}
        />
        <button
          type="submit"
          className="bg-blue-900 text-white rounded-lg p-2 w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Registrar"}
        </button>
      </form>
    </div>
  );
}