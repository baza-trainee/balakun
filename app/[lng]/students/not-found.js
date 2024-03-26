//this file more specific than error.js,to tell user that path haven't been found. like don't found dynamic path: [id]
/*example: import { notFound } from 'next/navigation';
 if (!invoice) {
    notFound();
  }
*/
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="pb-2 text-8xl font-bold text-red-900">404</h1>
      <p className="text-black-1000 max-w-80 pb-8 text-center text-xl font-bold">
        Sorry, the page you are looking for has been moved or deleted.
      </p>
      <Link
        href="/"
        className="rounded-full bg-red-900 pb-3 pl-8 pr-8 pt-3 text-base font-semibold text-red-100 hover:bg-red-700 active:bg-red-950"
      >
        Back to the home page
      </Link>
    </div>
  );
}
