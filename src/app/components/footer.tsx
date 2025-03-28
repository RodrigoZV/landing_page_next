export default function Footer() {
    return (
        <footer className="flex flex-col bg-gray-800 text-white text-center px-4 py-6">
            <div className="container mx-auto flex flex-row">
                <div className="w-1/2 border-r border-gray-600">
                    <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados</p>
                    <p>&reg; Marcas comerciais são registradas.</p>
                    <p>Este é um projeto de exemplo</p>
                </div>
                <div className="w-1/2">
                    <p>&spades; Diretamente do Next.js</p>
                    <p>&diams; Gerado por create-next-app.dev</p>
                    <p>Com Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
}