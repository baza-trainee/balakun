'use client';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useDisableBodyScroll, useClickOutside } from '@/hooks/hooks';
import MyButtonLink from '@/components/ui/mu-button-link';
import { IoMdClose } from 'react-icons/io';
import Logo from '@/components/ui/logo';
const BurgerMenu = ({ isVisible, closeBurgerMenu }) => {
  const { t } = useTranslation('header');
  const burgerMenuRef = useRef(null);
  useDisableBodyScroll(isVisible);
  useClickOutside(isVisible, burgerMenuRef, closeBurgerMenu);

  return (
    <div
      className={`z-20 w-[100vw] h-[100vh] absolute top-0 right-0 transition-all duration-300  ${
        isVisible ? 'translate-x-0' : 'translate-x-[100%]'
      }`}
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
    >
      <div
        ref={burgerMenuRef}
        className={`w-[100%] h-[100vh] py-7 px-4 absolute top-0 right-0 bg-white md:w-[360px] ${
          isVisible ? 'translate-x-0' : 'translate-x-[100%]'
        } transition-all duration-300`}
      >
        <button
          onClick={closeBurgerMenu}
          className="block text-red-900 ml-auto hover:text-red-700 transition-all duration-300"
        >
          <IoMdClose size="36" />
        </button>

        <Logo className="mx-auto w-[60px] h-[60px]" onClick={closeBurgerMenu} />

        <nav className="mt-16">
          <MyButtonLink styleType="secondary" styleWidth="full" href="/students" onClick={closeBurgerMenu}>
            {t('header.nav-students')}
          </MyButtonLink>
          <MyButtonLink styleType="secondary" styleWidth="full" href="/mentors" className="my-3" onClick={closeBurgerMenu}>
            {t('header.nav-mentors')}
          </MyButtonLink>
          <MyButtonLink styleType="secondary" styleWidth="full" href="/dashbourd" onClick={closeBurgerMenu}>
            {t('header.nav-dashbourd')}
          </MyButtonLink>
          <MyButtonLink styleType="secondary" styleWidth="full" href="/sign-in" className="mt-16 mb-3" onClick={closeBurgerMenu}>
            {t('header.sign-in')}
          </MyButtonLink>
          <MyButtonLink styleType="primary" styleWidth="full" href="/donate" onClick={closeBurgerMenu}>
            {t('header.donate')}
          </MyButtonLink>
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenu;
