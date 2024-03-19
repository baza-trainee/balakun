import Link from 'next/link';
import Logo from '@/components/ui/logo';
import Subscribe from './subscribe';
import IconLinks from './icon-links';
import { MdMail } from 'react-icons/md';
import { inter } from '@/fonts';
import initTranslations from '@/app/i18n';

const Footer = async ({ lng }) => {
  const { t } = await initTranslations(lng, ['footer']);
  return (
    <footer className="border-t border-black-100">
      <div className="max-w-[1900px] mx-auto py-8 px-[210px] ">
        <div className="flex items-center justify-between py-3">
          <Logo type="footer" />
          <div className={`${inter.className} flex gap-8 leading-[140%]`}>
            <Link href="/about-us">{t('footer.nav-about-us')}</Link>
            <Link href="/about-us">{t('footer.nav-students')}</Link>
            <Link href="/about-us">{t('footer.nav-mentors')}</Link>
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
            <span className="px-4 border-r border-l  border-black-100 mx-4">{t('footer.all-rights-reserved')}</span>
            <span>{t('footer.made-with-love')}</span>
          </div>
          <div>
            <Link href="#">{t('footer.privacy-policy')}</Link>
            <Link href="#" className="px-4 border-r border-l  border-black-100 mx-4">
              {t('footer.terms-of-use')}
            </Link>
            <Link href="#">{t('footer.cookies-settings')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
