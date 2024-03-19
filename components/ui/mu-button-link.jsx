'use client';
import Link from 'next/link';

const MyButtonLink = ({ href, children, styleWidth, styleType, onClick }) => {
  let widthClass = '';
  let styleClass = '';

  // Визначення класу ширини
  if (styleWidth === 'small') {
    widthClass = 'w-[120px]';
  } else if (styleWidth === 'large') {
    widthClass = 'w-[240px]';
  }
  // Визначення класу стилів
  if (styleType === 'primary') {
    styleClass =
      'bg-red-900 text-white border border-transparent hover:bg-white hover:text-black-1000 hover:border-red-900'; //hover:bg-blue-600
  } else if (styleType === 'secondary') {
    styleClass = 'bg-transparent border border-red-900 hover:bg-red-900 hover:text-white hover:border-transparent';
  }

  return (
    <Link
      href={href}
      className={`flex justify-center items-center rounded-full h-12 font-semibold ${widthClass} ${styleClass}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default MyButtonLink;
