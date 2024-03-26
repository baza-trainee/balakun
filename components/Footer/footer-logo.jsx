'use client'
import Link from 'next/link';
import Image from 'next/image';
import { scrollToTop } from '@/hooks/hooks';

const FooterLogo = ({className}) => {
  return (
    <Link href="/" className={`block relative ${className}`} onClick={scrollToTop}>
      <Image priority={true} src="/logo.png" fill sizes="100px" alt="Balakun logo" className="py-[6px] px-[12px] object-contain" />
    </Link>
  );
};

export default FooterLogo;
