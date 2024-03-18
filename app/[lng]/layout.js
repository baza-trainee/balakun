import "@/fonts";
import "./globals.css";
import { roboto } from '@/fonts';
import { dir } from 'i18next';
import i18nConfig from "@/i18nConfig";


/* I18nConfig have the same*/
//const languages = ['en', 'ua'];

export const metadata = {
  title: "Balakun",
  description: "Speak me",
};

//To generate static routes for a given set of locales
export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default function RootLayout({ children, params: { lng } }) {
	return (
		<html lang={lng} dir={dir(lng)}>
      <body className={roboto.className}>
        <main className='mx-auto max-w-[1920px]'>{children}</main>
      </body>
    </html>
  );
}











			












