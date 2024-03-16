import './globals.css';

import { Inter } from 'next/font/google';
import { dir } from 'i18next';

const inter = Inter({ subsets: ['latin'] });

const languages = ['en', 'ua'];

export async function generateStaticParams() {
	return languages.map((lng) => ({ lng }));
}

export const metadata = {
	title: 'Balakun',
	description: 'English learning platform',
};

export default function RootLayout({ children, params: { lng } }) {
	return (
		<html lang='en' dir={dir(lng)}>
			<body className={inter.className}>
				<main className='mx-auto max-w-[1920px]'>{children}</main>
			</body>
		</html>
	);
}
