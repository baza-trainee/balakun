import MyButtonLink from '@/components/ui/mu-button-link';
import initTranslations from '@/app/i18n';

const ButtonsBlock = async ({ lng }) => {
  const { t } = await initTranslations(lng, ['header']);
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
