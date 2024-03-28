'use client';

import React from 'react';
import Image from 'next/image';
import UserRole from '@/components/Hero/UseRole';
import UserRoleBtn from '@/components/Buttons/UseRoleBtn.jsx';
import HeroImg from '@/public/hero-img.jpg';
import { ptsans } from '@/fonts';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation('hero');
  const handleMentorClick = () => {
    console.log('Go to Mentor registration');
  };
  const handleStudentClick = () => {
    console.log('Go to Student registration');
  };
  return (
    <section className="pt-16 mb-[66px] px-[210px] pb-16 flex flex-row items-center gap-16">
      <div>
        <h1 className={`${ptsans.className} text-5xl mb-3 text-[#000000]`}>
          {t('hero.title-part-1')}
          <span className="text-[#E61E0A]">{t('hero.title-accent')}</span>
          {t('hero.title-part-2')}
        </h1>
        <p className="text-base mb-12 leading-[1.4] text-[#4F4F4F]">{t('hero.main-paragraph')}</p>
        <div className="flex flex-row gap-8">
          <div>
            <UserRole title={t('hero.become-a-mentor')} description={t('hero.description-mentor')} />
            <UserRoleBtn title={t('hero.become-a-mentor')} accent onClick={handleMentorClick} />
          </div>
          <div>
            <UserRole title={t('hero.become-a-student')} description={t('hero.description-student')} />
            <UserRoleBtn title={t('hero.become-a-student')} onClick={handleStudentClick} />
          </div>
        </div>
      </div>
      <Image
        src={HeroImg}
        width={718}
        height={564}
        className="rounded-[48px]"
        alt="Two people are sitting outdoors by the river."
      />
    </section>
  );
};
