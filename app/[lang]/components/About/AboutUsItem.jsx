import React from "react";
import { ptsans } from "../../fonts/fonts";

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
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
