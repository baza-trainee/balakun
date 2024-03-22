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
      <h1 className="text-red-900 text-8xl font-bold pb-2">404</h1>
      <p className="max-w-80 text-black-1000 text-xl text-center font-bold pb-8">
        Sorry, the page you are looking for has been moved or deleted.
      </p>
      <Link
        href="/"
        className="pt-3 pb-3 pl-8 pr-8 text-red-100 bg-red-900 hover:bg-red-700 active:bg-red-950 rounded-full text-base font-semibold"
      >
        Back to the home page
      </Link>
    </div>
  );
}
