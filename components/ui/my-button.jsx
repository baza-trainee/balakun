'use client';

const MyButton = ({ children, styleWidth, styleType, onClick, disabled }) => {
  let widthClass = '';
  let styleClass = '';

  // Визначення класу ширини
  if (styleWidth === 'small') {
    widthClass = 'w-[120px]';
  } else if (styleWidth === 'large') {
    widthClass = 'w-[240px]';
  } else if (styleWidth === 'full') {
    widthClass = 'w-full';
  }
  // Визначення класу стилів
  if (styleType === 'primary') {
    styleClass =
      'bg-red-900 text-white hover:bg-red-700 active:bg-red-950 disabled:bg-red-900 disabled:opacity-30 disabled:cursor-not-allowed';
  } else if (styleType === 'secondary') {
    styleClass =
      'bg-transparent border border-red-900 hover:border-red-700 active:border-red-950 disabled:border-red-950 disabled:opacity-30 disabled:cursor-not-allowed';
  }

  return (
    <button
      className={`flex justify-center items-center rounded-full h-12 font-semibold duration-300 ${widthClass} ${styleClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default MyButton;
