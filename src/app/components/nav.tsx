import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex flex-row mt-4 gap-5">
            <Link href="/" className="p-2 
                                      duration-300    
                                      hover:bg-gray-200 
                                      hover:text-gray-800 
                                      hover:rounded-lg
                                      hover:animate-pulse
                                      ">Home</Link>                                
            <Link href="/about" className="p-2 
                                      duration-300    
                                      hover:bg-gray-200 
                                      hover:text-gray-800 
                                      hover:rounded-lg
                                      hover:animate-pulse
                                      ">About</Link>  
            <Link href="/contact" className="p-2 
                                      duration-300    
                                      hover:bg-gray-200 
                                      hover:text-gray-800 
                                      hover:rounded-lg
                                      hover:animate-pulse
                                      ">Contact</Link>
        </nav>         
    );
}