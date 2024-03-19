'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <nav className="flex gap-8 font-medium">
      <Link href="/students">{t('header.nav-students')}</Link>
      <Link href="/mentors">{t('header.nav-mentors')}</Link>
      <Link href="/dashbourd">{t('header.nav-dashbourd')}</Link>
    </nav>
  );
};

export default Navigation;
