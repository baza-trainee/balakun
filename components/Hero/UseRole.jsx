'use client';

import React from 'react';
import { ptsans } from '@/fonts';

export default function UserRole({ title, description }) {
  return (
    <div>
      <p className={`${ptsans.className} mb-3 text-[21px] leading-[1.2] text-black-1000`}>{title}</p>
      <p className="mb-4 text-base leading-[1.4] text-black-700">{description}</p>
    </div>
  );
}
