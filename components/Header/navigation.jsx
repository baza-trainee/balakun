'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { title: 'For Students', path: '/students' },
  { title: 'For Mentors', path: '/mentors' },
  { title: 'Dashbourd', path: '/dashbourd' },
];

const Navigation = () => {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8 font-medium">
      {navLinks.map(link => {
        const isActive = pathName === link.path;
        return (
          <Link key={link.title} href={link.path} className={isActive ? 'text-red-600' : ''}>
            {link.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
