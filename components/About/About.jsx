import React from "react";
import Image from "next/image";
import AboutImg from "@/public/about-img.jpg";
import { ptsans } from "@/fonts";
import AboutUsItem from "@/components/About/AboutUsItem";

export default function About() {
  return (
    <section className="mb-[66px] px-[210px] py-16 flex flex-row items-center gap-16">
      <Image
        src={AboutImg}
        width={718}
        height={560}
        className="rounded-[48px]"
        alt="A group of people against the backdrop of a sunset."
      />
      <div>
        <h2 className={`${ptsans.className} text-4xl mb-8 text-[#000000]`}>
          About <span className="text-[#E61E0A]">Balakun</span>
        </h2>
        <ul>
          <li>
            <AboutUsItem
              number="1"
              title="What is Balakun"
              description="Balakun is a bridge between passionate volunteer mentors from around the world and Ukrainians eager to learn or practice English. Our name &#8216;Balakun&#8217; is Ukrainian for &#8216;Chatterbox,&#8217; representing the essence of our initiative &#8211; to foster meaningful conversations and build connections."
            />
          </li>
          <li>
            <AboutUsItem
              number="2"
              title="Our Mission"
              description="We strive to build a supportive community of learners, volunteers, and educators, creating a space where everyone can grow and thrive together. Through our platform we want to help people learn English better, understand more, and make friends worldwide."
            />
          </li>
          <li>
            <AboutUsItem
              number="3"
              title="Our Goal"
              description="Our goal is easy-to-access English education for Ukrainians to improve communication skills and help people succeed globally. By teaching language skills, we bring cultures together, breaking down walls and connecting communities."
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
