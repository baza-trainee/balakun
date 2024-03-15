import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="mb-[66px] px-[210px] py-16 px-[210px] flex flex-row gap-16">
      <Image
        src="/public/about-img.jpg"
        width={718}
        height={560}
        className=""
        alt="A group of people against the backdrop of a sunset."
      />
      <div>
        <h2 className="text-4xl font-bold mb-3">
          About <span>Balakun</span>
        </h2>
      </div>
    </section>
  );
}
