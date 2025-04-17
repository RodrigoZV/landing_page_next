<<<<<<< HEAD
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Contatos() {
    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-6">Contato</h1>

            {/* Horários de Funcionamento */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {["Seg-Sex: 9h - 18h", "Sáb: 9h - 13h", "Dom: Fechado"].map((horario, index) => (
                    <div key={index} className="p-4 text-center border rounded-lg shadow-md">
                        <p className="text-lg font-semibold">{horario}</p>
                    </div>
                ))}
            </div>

            {/* Localização */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Nossa Localização</h2>
                <iframe
                    className="w-full h-64 rounded-lg border"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.9630579153197!3d-37.81627974201807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf4c8b75c5f8b80b8!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1649382011732!5m2!1sen!2sus"                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>

            {/* FAQ */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
                <div className="space-y-4">
                    {[{ q: "Como posso entrar em contato?", a: "Você pode usar nosso formulário ou ligar para nós." },
                    { q: "Vocês atendem aos finais de semana?", a: "Apenas aos sábados das 9h às 13h." }].map((faq, index) => (
                        <details key={index} className="border rounded-lg p-4">
                            <summary className="font-semibold cursor-pointer">{faq.q}</summary>
                            <p className="mt-2 text-gray-600">{faq.a}</p>
                        </details>
                    ))}
                </div>
            </div>

            {/* Formulário de Contato e Redes Sociais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-2">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Envie uma mensagem</h2>
                    <form className="space-y-4">
                        <input type="text" placeholder="Seu Nome" required className="w-full p-2 border rounded-lg" />
                        <input type="email" placeholder="Seu Email" required className="w-full p-2 border rounded-lg" />
                        <textarea placeholder="Sua Mensagem" required className="w-full p-2 border rounded-lg"></textarea>
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Enviar</button>
                    </form>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-2 mt-2">Redes Sociais</h2>
                    <div className="flex space-x-4">
                        <a href="#" className="text-blue-600"><Facebook /></a>
                        <a href="#" className="text-pink-500"><Instagram /></a>
                        <a href="#" className="text-blue-400"><Twitter /></a>
                    </div>
                    <h2 className="text-2xl font-semibold mb-2 mt-10">Contato Direto</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2"><Phone /> +55 11 99999-9999</li>
                        <li className="flex items-center gap-2"><Mail /> contato@empresa.com</li>
                        <li className="flex items-center gap-2"><MapPin /> Av. Exemplo, 123 - São Paulo, SP</li>
                    </ul>
                </div>
                {/* Lista de Contatos */}
                <div>
                    
                </div>
            </div>


        </div>
    );
}
=======
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
    return (
        <div className='container mx-auto py-12 px-4'>
            <h1 className='text-4xl font-bold mb-6 text-center'>CONTATOS </h1>
            <div>
                <h4 className='text-2xl font-bold mb-6'>Horário de funcionamento</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {["Seg-Sex: 09h00 - 18h00", "Sáb: 09h00 - 12h00", "Dom: Fechado"]
                        .map((day, index) => (
                            <div key={index} className='border-2 border-blue-900 rounded-lg 
                    p-6 bg-white shadow-md'>
                                <h3 className='text-lg font-bold mb-3'>{day}</h3>
                            </div>
                        ))}
                </div>
            </div>
            <div className='mt-10'>
                <h4 className='text-2xl font-bold mb-6'>Localização</h4>
                <iframe className='w-full h-64 rounded-lg shadow-md'
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28462.591652756033!2d-49.0733568!3d-26.909081599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1743459251027!5m2!1spt-BR!2sbr"
                    allowFullScreen
                    loading="lazy">
                </iframe>
            </div>
            <div className='mt-10'>
                <h4 className='text-2xl font-bold mb-6'>FAQ - Perguntas frequentes</h4>
                <div className='grid grid-cols-1'>
                    {[{
                        q: "Qual o horário de funcionamento?",
                        a: "Horário comercial e sabádo das 09h00 às 12h00"
                    },
                    {
                        q: "Como posso entrar em contato?",
                        a: "Pelo formulario de contato ou pelas redes sociais"
                    },
                    {
                        q: "Onde vocês estão localizados?",
                        a: "Estamos em Blumenau SC"
                    }]
                        .map((faq, index) => (
                            <details key={index} className='border-2 border-blue-900 rounded-lg 
                                p-6 bg-white shadow-md mb-4'>
                                <summary className='text-lg font-bold mb-3'>{faq.q}</summary>
                                <p className='text-gray-700'>{faq.a}</p>
                            </details>
                        ))}
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
                <div>
                    <h4 className='text-2xl font-bold mb-6'>Envie sua mensagem</h4>
                    <form className='bg-white shadow-md rounded-lg p-6'>
                        <input type="text" placeholder='Nome'
                            className='border-2 border-blue-900 rounded-lg p-2 mb-4 w-full' />
                        <input type="email" placeholder='Email'
                            className='border-2 border-blue-900 rounded-lg p-2 mb-4 w-full' />
                        <textarea placeholder='Mensagem'
                            className='border-2 border-blue-900 rounded-lg p-2 mb-4 w-full'/>
                        <button type="submit" className='bg-blue-900 text-white rounded-lg p-2 w-full'>
                            Enviar</button>    
                    </form>
                </div>
                <div className='bg-white shadow-md rounded-lg p-6'>
                    <h4 className='text-2xl font-bold mb-6 '>Entre em contato diretamente</h4>
                    <h6 className='text-lg font-bold mb-6'>Redes sociais</h6>
                        <div className='grid grid-cols-3 gap-4 mb-6'>
                            <Facebook className='text-blue-900' size={24} />
                            <Instagram className='text-blue-900' size={24} />
                            <Twitter className='text-blue-900' size={24} /> 
                         </div>   
                    <h6 className='text-lg font-bold mb-6'>Contatos direto</h6>
                        <Phone className='text-blue-900 mt-4' size={24} />
                        <span className='text-gray-700'> (47) 99999-9999</span>
                        <Mail className='text-blue-900 mt-4' size={24} />
                        <span  className='text-gray-700'> email@email.com </span>
                        <MapPin className='text-blue-900 mt-4' size={24} />
                        <span  className='text-gray-700'> Av. ABC, Numero: 123, Blumenau, SC </span>
                </div>
            </div>
        </div>
    )
}
>>>>>>> f725b2acd16fb484591e34d69d551b52edf75ee6
