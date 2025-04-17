import { IMaskInput } from 'react-imask';
import { Control, Controller, FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { validateCEP } from '@/app/utilities/apiverificacep';
import toast from 'react-hot-toast';

type FormUserAddressProps = {
    register: UseFormRegister<any>,
    errors: FieldErrors<any>,
    control: Control<any>,
    setValue: UseFormSetValue<any>,
};

export default function FormUserAddress({ register, errors, control, setValue }: FormUserAddressProps) {
    const cepBlur = async (value: string) => {
        const result = await validateCEP(value);
        if (result) {
            toast.success("CEP válido!");
            setValue("rua", result.logradouro);
            setValue("bairro", result.bairro);
            setValue("cidade", result.localidade);
            setValue("estado", result.uf);
        } else {
            toast.error("CEP inválido!");
            setValue("rua", "");
            setValue("bairro", "");
            setValue("cidade", "");
            setValue("estado", "");
        }
    };

    return (
        <div className='container py-12 px-4 items-center'>
            <h1 className='text-4xl font-bold mb-6 text-center'>Endereco </h1>
            <Controller name="cep" control={control}
                render={({ field }) => (
                    <IMaskInput
                        value={field.value}
                        mask="00000-000"
                        placeholder='CEP'
                        className='border-2 border-blue-900 rounded-lg p-2 mt-2 w-full'
                        onBlur={() => cepBlur(field.value)}
                        onAccept={(value: string) => field.onChange(value)}
                    />
                )}
            />
            {errors.cep && <span className='text-red-500'>{String(errors.cep.message)}</span>}

            <input type="text" placeholder='Rua' {...register("rua")}
                className='border-2 border-blue-900 rounded-lg p-2 mt-2 w-full' />
            {errors.rua && <span className='text-red-500'>{String(errors.rua.message)}</span>}

            <input type="text" placeholder='Número' {...register("numero")}
                className='border-2 border-blue-900 rounded-lg p-2 mt-2 w-full' />
            {errors.numero && <span className='text-red-500'>{String(errors.numero.message)}</span>}

            <input type="text" placeholder='Complemento' {...register("complemento")}
                className='border-2 border-blue-900 rounded-lg p-2 mt-2 w-full' />
            {errors.complemento && <span className='text-red-500'>{String(errors.complemento.message)}</span>}

            <input type="text" placeholder='Bairro' {...register("bairro")}
                className='border-2 border-blue-900 rounded-lg p-2 mt-2 w-full' />
            {errors.bairro && <span className='text-red-500'>{String(errors.bairro.message)}</span>}

            <input type="text" placeholder='Cidade' {...register("cidade")}
                className='border-2 border-blue-900 rounded-lg p-2 mt-2 w-full' />
            {errors.cidade && <span className='text-red-500'>{String(errors.cidade.message)}</span>}

            <input type="text" placeholder='Estado' {...register("estado")}
                className='border-2 border-blue-900 rounded-lg p-2 mt-2 w-full' />
            {errors.estado && <span className='text-red-500'>{String(errors.estado.message)}</span>}
        </div>
    );
}
