import Link from 'next/link';
import FooterLogo from './footer-logo';
import Subscribe from './subscribe';
import IconLinks from './icon-links';
import { MdMail } from 'react-icons/md';
import { inter } from '@/fonts';
import initTranslations from '@/app/i18n';
const Footer = async ({ lng }) => {
  const { t } = await initTranslations(lng, ['footer']);
  return (
    <footer className="border-t border-black-100">
      <div className="min-w-[328px] mx-auto px-4 pt-[42px] pb-8 2xl:px-[18px] lg:px-16 xl:max-w-[1628px] ">
        <div className="grid grid-cols-1 md:grid-cols-[auto_auto] xl:grid-cols-[auto_auto_400px]">
          <div className="mx-auto mb-6 md:mb-0 md:mx-0">
            <FooterLogo className='w-[100px] h-[100px]' />
          </div>
          <div className="md:justify-self-end">
            <Subscribe />
          </div>
          <div
            className={`${inter.className} flex justify-between pt-16 md:col-span-2 md:gap-8 md:justify-center xl:pt-0 xl:row-start-1 xl:col-start-2 xl:col-span-1 xl:self-center`}
          >
            <Link href="/students">{t('footer.nav-students')}</Link>
            <Link href="/mentors">{t('footer.nav-mentors')}</Link>
            <Link href="/dashboard">{t('footer.nav-dashbourd')}</Link>
          </div>
        </div>

        <div id="footer" className="border border-red-900 my-16 rounded-[1000px] h-[120px] px-8 py-6 flex flex-col items-center justify-between font-semibold md:flex-row md:h-[72px]">
          <Link href="mailto:" className="flex items-center gap-[10px]">
            <MdMail size="20" /> info@balakun.org
          </Link>
          <IconLinks />
        </div>

        <div className="flex flex-col items-center justify-between text-xs text-black-700 leading-[120%] md:flex-row md:justify-center lg:justify-between">
          <div className="mx-auto pb-6 md:mx-2 md:pb-0 flex items-center">
            <span>Baza Trainee Ukraine © 2024</span>
            <span className="block pl-4 border-l ml-4 border-black-100  md:border-r md:mx-4 ">
              {t('footer.all-rights-reserved')}
            </span>
          </div>
          <div className='flex items-center'>
            <Link href="#" className='text-center'>{t('footer.privacy-policy')}</Link>
            <Link href="#" className="text-center px-4 border-r border-l  border-black-100 mx-4">
              {t('footer.terms-of-use')}
            </Link>
            <Link href="#" className='text-center'>{t('footer.cookies-settings')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/*
import Link from 'next/link';
import Logo from '@/components/ui/logo';
import Subscribe from './subscribe';
import IconLinks from './icon-links';
import { MdMail } from 'react-icons/md';
import { inter } from '@/fonts';
import initTranslations from '@/app/i18n';
//xl:max-w-[1900px] xl:px-[210px]
const Footer = async ({ lng }) => {
  const { t } = await initTranslations(lng, ['footer']);
  return (
    <footer className="border-t border-black-100">
      <div className="min-w-[328px] mx-auto py-8  px-4 2xl:px-[18px] lg:px-16 xl:max-w-[1628px]">
        <div className="relative">
          <div className="flex flex-col items-center gap-6 mx-auto md:flex-row md:justify-between">
            <div className="xl:w-[300px]">
              <Logo type="footer" />
            </div>
            <div className={`${inter.className} xl:flex items-center leading-[140%] justify-center gap-6`}>
              <Link href="/student">{t('footer.nav-students')}</Link>
              <Link href="/mentor">{t('footer.nav-mentors')}</Link>
              <Link href="/dashbourd">{t('footer.nav-dashbourd')}</Link>
            </div>
            <Subscribe />
          </div>
          <div
            className={`${inter.className} flex justify-between mt-16 mx-auto leading-[140%] md:justify-center gap-6 xl:hidden xl:absolute top-0 left-[50%] xl:translate-x-[-50%]`}
          >
            <Link href="/student">{t('footer.nav-students')}</Link>
            <Link href="/mentor">{t('footer.nav-mentors')}</Link>
            <Link href="/dashbourd">{t('footer.nav-dashbourd')}</Link>
          </div>
        </div>

        <div className="border border-red-900 my-16 rounded-[1000px] h-[120px] px-8 py-6 flex flex-col items-center justify-between font-semibold md:flex-row md:h-[72px]">
          <Link href="mailto:" className="flex items-center gap-[10px]">
            <MdMail size="20" /> info@balakun.org
          </Link>
          <IconLinks />
        </div>

        <div className="flex flex-col items-center justify-between text-xs text-black-700 leading-[120%] md:flex-row md:justify-center lg:justify-between">
          <div className="mx-auto pb-6 md:mx-2 md:pb-0 ">
            <span>Baza Trainee Ukraine © 2024</span>
            <span className="pl-4 border-l ml-4 border-black-100  md:border-r md:mx-4 ">
              {t('footer.all-rights-reserved')}
            </span>
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

*/
