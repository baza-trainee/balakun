import Link from 'next/link';
import Logo from '@/components/ui/logo';
import Subscribe from './subscribe';
import IconLinks from './icon-links';
import { footerNavLinks } from '@/data';
import { MdMail } from 'react-icons/md';
import { inter } from '@/fonts';

const Footer = () => {
  return (
    <footer className="border-t border-black-100">
      <div className="max-w-[1900px] mx-auto py-8 px-[210px] ">
        <div className="flex items-center justify-between py-3">
          <Logo type='footer' />
          <div className={`${inter.className} flex gap-8 leading-[140%]`}>
            {footerNavLinks.map(link => {
              return (
                <Link key={link.title} href={link.path}>
                  {link.title}
                </Link>
              );
            })}
          </div>
          <Subscribe />
        </div>

        <div className="border border-red-900 my-16 rounded-[1000px] h-[72px] px-8 flex items-center justify-between font-semibold">
          <Link href="mailto:" className="flex items-center gap-[10px]">
            <MdMail size="20" /> info@balakun.org
          </Link>
          <IconLinks />
        </div>

        <div className="flex items-center justify-between text-xs text-black-700 leading-[120%]">
          <div>
            <span>Baza Trainee Ukraine © 2024</span>
            <span className="px-4 border-r border-l  border-black-100 mx-4">All Rights Reserved</span>
            <span>Made with Love</span>
          </div>
          <div>
            <Link href="#">Privacy Policy</Link>
            <Link href="#" className="px-4 border-r border-l  border-black-100 mx-4">
              Terms of Use
            </Link>
            <Link href="#">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
