import { useState } from 'react';

interface AddressData {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export default function FormAddressData() {
  const [address, setAddress] = useState<AddressData>({
    street: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Endereço enviado:', address);
    // Lógica para enviar os dados do formulário
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="street"
        placeholder="Rua"
        value={address.street}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="city"
        placeholder="Cidade"
        value={address.city}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="state"
        placeholder="Estado"
        value={address.state}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="zipCode"
        placeholder="CEP"
        value={address.zipCode}
        onChange={handleInputChange}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}