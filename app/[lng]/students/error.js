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
      <h1 className={`${ptsans.className} pb-2 text-8xl font-bold text-red-900 `}>404</h1>
      <p className={`${ptsans.className} text-black-1000 max-w-80 pb-8 text-center text-xl font-bold`}>
        Sorry, the page you are looking for has been moved or deleted.
      </p>
      <button
        className="rounded-full bg-red-900 pb-3 pl-8 pr-8 pt-3 text-base font-semibold text-red-100 hover:bg-red-700 active:bg-red-950"
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
