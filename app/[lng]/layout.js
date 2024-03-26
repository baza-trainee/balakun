import '@/fonts';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { roboto } from '@/fonts';
import { dir } from 'i18next';
import i18nConfig from '@/i18nConfig';

/* I18nConfig have the same*/
//const languages = ['en', 'ua'];

export const metadata = {
  title: 'Balakun',
  description: 'Speak me',
};

//To generate static routes for a given set of locales
export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

import initTranslations from '../i18n';
import TranslationsProvider from '@/components/Internationalization/TranslationsProvider';
const i18nNamespaces = ['translation', 'header', 'footer'];

export default async function RootLayout({ children, params: { lng } }) {
  const { t, resources } = await initTranslations(lng, i18nNamespaces);
  return (
    <html lang="en" dir={dir(lng)}>
      <body className={roboto.className}>
        <TranslationsProvider namespaces={i18nNamespaces} locale={lng} resources={resources}>
          <Header lng={lng} />
          <main className="mx-auto mt-[92px] max-w-[1920px]">{children}</main>
          <Footer lng={lng} />
        </TranslationsProvider>
      </body>
    </html>
  );
}
