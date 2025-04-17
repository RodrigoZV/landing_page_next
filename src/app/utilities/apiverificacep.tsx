export async function validateCEP(cep: string) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            console.log('CEP inválido:', data.message);
            return false;
        } else {
            return data;
        }
    } catch (error) {
        console.error('Erro na resposta da api:', error);
        return false;
    }
}