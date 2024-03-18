import React from "react";
import { ptsans } from "@/fonts";

export default function AboutUsItem({ number, title, description }) {
  return (
    <div className="flex flex-row gap-8 mb-8">
      <div>
        <div
          className={`${ptsans.className} flex justify-center items-center w-[60px] h-[60px] text-[28px] leading-[1.1] text-[#e61e0a] border rounded-full border-[#e7e7e7] `}
        >
          <p>{number}</p>
        </div>
      </div>
      <div>
        <h3
          className={`${ptsans.className} mb-2 text-[21px] leading-[1.2] text-[#000000]`}
        >
          {title}
        </h3>
        <p className="text-base leading-[1.4] text-[#4F4F4F]">{description}</p>
      </div>
    </div>
  );
}
