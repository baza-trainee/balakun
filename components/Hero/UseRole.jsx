"use client";

import React from "react";
import { ptsans } from "@/fonts";

export default function UserRole({ title, description }) {
  return (
    <div>
      <p
        className={`${ptsans.className} mb-3 text-[21px] leading-[1.2] text-[#000000]`}
      >
        {title}
      </p>
      <p className="mb-4 text-base leading-[1.4] text-[#4F4F4F]">
        {description}
      </p>
    </div>
  );
}
