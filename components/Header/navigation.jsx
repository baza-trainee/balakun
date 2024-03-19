import Link from 'next/link';
import initTranslations from '@/app/i18n';

const Navigation = async ({lng}) => {
  const { t } = await initTranslations(lng, ['header']);
  return (
    <nav className="flex gap-8 font-medium">
      <Link href="/students">{t('header.nav-students')}</Link>
      <Link href="/mentors">{t('header.nav-mentors')}</Link>
      <Link href="/dashbourd">{t('header.nav-dashbourd')}</Link>
    </nav>
  );
};

export default Navigation;
