'use client';

import { useTranslation } from 'react-i18next';

export default function ExampleClient() {
  const { t } = useTranslation();

  return <h3>{t('test')}</h3>;
}