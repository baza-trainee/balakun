'use client';
import { useState } from 'react';
import MyButtonLink from '@/components/ui/mu-button-link';
import { useTranslation } from 'react-i18next';
import BurgerMenu from './burger-menu';
import { IoMenu } from 'react-icons/io5';

const ButtonsBlock = () => {
  const { t } = useTranslation('header');
  const [visibleBurgerMenu, setVisibleBurgerMenu] = useState(false);
  const closeBurgerMenu = () => {
    setVisibleBurgerMenu(false);
  };

  return (
    <>
      <MyButtonLink styleType="secondary" styleWidth="small" href="#" className="hidden md:flex">
        {t('header.sign-in')}
      </MyButtonLink>

      <MyButtonLink styleType="primary" styleWidth="small" href="#" className="hidden lg:flex">
        {t('header.donate')}
      </MyButtonLink>

      <button
        onClick={() => {
          setVisibleBurgerMenu(true);
        }}
        className="block text-red-900 ml-auto hover:text-red-700 transition-all duration-300 lg:hidden"
      >
        <IoMenu size="36" />
      </button>
      <BurgerMenu isVisible={visibleBurgerMenu} closeBurgerMenu={closeBurgerMenu} />
    </>
  );
};
export default ButtonsBlock;
