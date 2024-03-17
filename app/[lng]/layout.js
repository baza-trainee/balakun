import './globals.css';

import { dir } from 'i18next';
import { roboto } from '@/fonts';

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
			<body className={roboto.className}>
				<main className='mx-auto max-w-[1920px]'>{children}</main>
			</body>
		</html>
	);
}
