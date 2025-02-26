'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); 
    
    return (
        <>
            <button 
                className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded" 
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
            <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:flex`}>  
                <nav className="space-y-2">
                    <Link 
                        href="/dashboard/employer"
                        className={`block py-2 px-4 rounded ${pathname === '/dashboard/employer' ? 'bg-gray-700' : ''}`}
                    >Dashboard</Link>
                    <Link 
                        href="/dashboard/employer/job-opening" 
                        className={`block py-2 px-4 rounded ${pathname === '/dashboard/employer/job-opening' ? 'bg-gray-700' : ''}`}
                    >Job Opening</Link>
                    <Link 
                        href="/dashboard/employer/notification" 
                        className={`block py-2 px-4 rounded ${pathname === '/dashboard/employer/notification' ? 'bg-gray-700' : ''}`}
                    >Notification</Link>
                </nav>
            </div>
        </>
    );
};


export default Sidebar;
