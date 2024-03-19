"use client";

import React from "react";
import Image from "next/image";
import UserRole from "@/components/Hero/UseRole";
import UserRoleBtn from "@/components/Buttons/UseRoleBtn.jsx";
import HeroImg from "@/public/hero-img.jpg";
import { ptsans } from "@/fonts";

export const Hero = () => {
  const handleMentorClick = () => {
    console.log("Go to Mentor registration");
  };
  const handleStudentClick = () => {
    console.log("Go to Student registration");
  };
  return (
    <section className="mt-16 mb-[66px] px-[210px] pb-16 flex flex-row items-center gap-16">
      <div>
        <h1 className={`${ptsans.className} text-5xl mb-3 text-[#000000]`}>
          Join <span className="text-[#E61E0A]">Balakun</span> and start talking
        </h1>
        <p className="text-base mb-12 leading-[1.4] text-[#4F4F4F]">
          The first step to joining Balakun is to sign up, become a verified
          students and then create your profile. Once you have created your
          profile you will be able to connect with a fluent English speaking
          mentor, join group lessons and speaking clubs and start working on
          your English skills
        </p>
        <div className="flex flex-row gap-8">
          <div>
            <UserRole
              title="Become a Mentor"
              description="Create a profile on Balakun to showcase your language learning goals and interests."
            />
            <UserRoleBtn
              title="Become a Mentor"
              accent
              onClick={handleMentorClick}
            />
          </div>
          <div>
            <UserRole
              title="Become a Student"
              description="Browse through a list of native English speaking volunteers and connect with them."
            />
            <UserRoleBtn
              title="Become a Student"
              onClick={handleStudentClick}
            />
          </div>
        </div>
      </div>
      <Image
        src={HeroImg}
        width={718}
        height={564}
        className="rounded-[48px]"
        alt="Two people are sitting outdoors by the river."
      />
    </section>
  );
};
