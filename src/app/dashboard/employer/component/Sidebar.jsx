'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Ensure this runs inside a Client Component
    
    return (
        <div className="flex flex-col h-screen bg-gray-800 text-white w-64 p-4 fixed md:relative">
            <button 
                className="md:hidden text-white text-2xl mb-4" 
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FiX /> : <FiMenu />}
            </button>
            <nav className={`${isOpen ? 'block' : 'hidden'} md:block space-y-2`}>
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
    );
};

export default Sidebar;
