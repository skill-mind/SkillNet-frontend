'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname.includes(href.toLowerCase());

  return (
    <Link
      href={href}
      className={`
        px-6 py-3 rounded-lg text-lg font-medium
        transition-all duration-300 ease-in-out
        ${isActive 
          ? 'bg-zinc-800 text-white ' 
          : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white border-zinc-800/50 border'
        }
      `}
    >
      {label}
    </Link>
  );
};

const TopNavigation = () => {
  const navItems = [
    { label: 'Exams', href: '/dashboard/institution/notification/exams' },
    { label: 'Certification', href: '/dashboard/institution/notification/certification' },
    { label: 'Candidates', href: '/dashboard/institution/notification/candidates' },
  ];

  return (
    <nav className="flex flex-col md:flex-row gap-4 md:p-4 p-2 bg-black px-[2em]">
      {navItems.map((item) => (
        <NavItem
          key={item.href}
          label={item.label}
          href={item.href}
        />
      ))}
    </nav>
  );
};

export default TopNavigation;