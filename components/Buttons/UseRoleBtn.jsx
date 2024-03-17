"use client";

import React from "react";

export default function UserRoleBtn({ title, accent, ...rest }) {
  return (
    <button
      {...rest}
      className={`w-[260px] h-12 rounded-[1000px] font-semibold text-base leading-[1.4] border transition ease-in-out duration-500 hover:border-[#FF503C] focus:border-[#FF503C] focus:outline-none active:border-[#B40000] ${
        accent
          ? "bg-[#E61E0A] border-[#E61E0A] text-[#FFF5F5] hover:bg-[#FF503C] focus:bg-[#FF503C] active:bg-[#B40000]"
          : "border-[#E61E0A] text-[#280400] "
      }`}
    >
      {title}
    </button>
  );
}
