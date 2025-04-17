export async function validateCPF(cpf: string): Promise<boolean> {
    try {
        const response = await fetch(`https://api-cpf.vercel.app/cpf/valid/${cpf}`);
        const data = await response.json();

        if (data.Valid) {
            return true;
        } else {
            console.log('Invalid CPF:', data);
            return false;
        }

    } catch (error) {
        console.error('Erro na resposta da api', error);
        return false;
    }
}