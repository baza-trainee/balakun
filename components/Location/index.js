import dynamic from 'next/dynamic';

export const Location = () => {
    return (
        <>
            <h3>Location</h3>
        </>
    )
}

const DynamicMap = dynamic(() => import('./Map'), {
	loading: () => <p>Loading...</p>,
	ssr: false,
});

export const Location = () => <DynamicMap />;

