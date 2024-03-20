import Link from 'next/link';
import { LiaTelegram } from 'react-icons/lia';
import { AiFillInstagram } from 'react-icons/ai';
import { FaYoutube, FaDiscord, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter, FaSquareFacebook } from 'react-icons/fa6';

const IconLinks = () => {
  return (
    <div className="flex items-center gap-4">
      <Link className="p-[2px]" href="#">
        <FaXTwitter size="20" />
      </Link>
      <Link href="#">
        <AiFillInstagram size="20" />
      </Link>
      <Link href="#">
        <FaLinkedin size="20" />
      </Link>
      <Link href="#">
        <FaSquareFacebook size="20" />
      </Link>
      <Link href="#">
        <FaDiscord size="20" />
      </Link>
      <Link href="#">
        <FaYoutube size="20" />
      </Link>
      <Link href="#">
        <LiaTelegram size="20" />
      </Link>
    </div>
  );
};

export default IconLinks;
