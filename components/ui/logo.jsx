import Link from 'next/link';
import Image from 'next/image';

const Logo = ({ className, onClick }) => {
  return (
    <Link href="/" className={`block relative ${className}`} onClick={onClick}>
      <Image
        priority={true}
        src="/logo.png"
        fill
        sizes="100px"
        alt="Balakun logo"
        className="py-[6px] px-[12px] object-contain"
      />
    </Link>
  );
};

export default Logo;
