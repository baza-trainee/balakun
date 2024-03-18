import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./Map'), {
	loading: () => <p>Loading...</p>,
	ssr: false,
});

export const Location = () => <DynamicMap />;

