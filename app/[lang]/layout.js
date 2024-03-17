import "./fonts/fonts";
import "./globals.css";
import { roboto } from "./fonts/fonts";


import i18nConfig from "@/i18nConfig";

export const metadata = {
  title: "Balakun",
  description: "Speak me",
};

//To generate static routes for a given set of locales
export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}


export default function RootLayout({ children,params: { lang } }) {
  return (
    <html lang={lang}>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
