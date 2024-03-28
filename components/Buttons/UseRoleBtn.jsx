'use client';

import React from 'react';

export default function UserRoleBtn({ title, accent, ...rest }) {
  return (
    <button
      {...rest}
      className={`w-[260px] h-12 rounded-[1000px] font-semibold text-base leading-[1.4] border transition ease-in-out duration-500 hover:border-red-700 focus:border-red-700 focus:outline-none active:border-red-950 ${
        accent
          ? 'bg-red-900 border-red-900 text-red-100 hover:bg-red-700 focus:bg-red-700 active:bg-red-950'
          : 'border-red-900 text-red-1000'
      }`}
    >
      {title}
    </button>
  );
}
