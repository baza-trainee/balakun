'use client'
import MyButtonLink from '@/components/ui/mu-button-link';
import { useTranslation } from 'react-i18next';

const ButtonsBlock = () => {
    const { t } = useTranslation();
  return (
    <>
      <MyButtonLink styleType="secondary" styleWidth="small" href="#">
      {t('header.sign-in')}
      </MyButtonLink>
      <MyButtonLink styleType="primary" styleWidth="small" href="#">
      {t('header.donate')}
      </MyButtonLink>
    </>
  );
};
export default ButtonsBlock;
