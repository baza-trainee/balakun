//The file can be used to define a UI boundary for a route segment
'use client';

import { useEffect } from 'react';
import { ptsans } from '@/fonts';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center">
      <h1 className={`${ptsans.className} text-red-900 text-8xl font-bold pb-2 `}>404</h1>
      <p className={`${ptsans.className} max-w-80 text-black-1000 text-xl text-center font-bold pb-8`}>
        Sorry, the page you are looking for has been moved or deleted.
      </p>
      <button
        className="pt-3 pb-3 pl-8 pr-8 text-red-100 bg-red-900 hover:bg-red-700 active:bg-red-950 rounded-full text-base font-semibold"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Back to the home page
      </button>
    </div>
  );
}
