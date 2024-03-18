import Link from 'next/link';
import Image from 'next/image';
const Logo = ({ type }) => {
  let sizes = '';
  if (type === 'header') {
    sizes = 'w-9 h-12';
  } else if (type === 'footer') {
    sizes = 'w-[60px] h-[80px]';
  }
  return (
    <Link href="/"  className={`relative ${sizes}`} >
      <Image priority={true}  src="/logo.png" fill sizes="100px" alt="Balakun logo" className="object-contain" />
    </Link>
  );
};

export default Logo;
