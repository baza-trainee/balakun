'use client';

import { ptsans } from '@/fonts';
import { Navigation } from 'swiper/modules';
import { SwiperBtn } from '../Buttons/SwiperBtn';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ExperienceCard from './ExperienceCard';
import cardData from './data.js';

export const Experience = () => {
  return (
    <section className="mb-[66px]">
      <h1 className={`${ptsans.className} text-4xl font-bold text-center`}>
        Voice of<span className="text-red-900"> Experience</span>
      </h1>
      <div className="relative py-16 mx-auto max-w-screen-2xl ">
        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={16}
          slidesPerView={3}
          navigation={{
            nextEl: '.s-button-next',
            prevEl: '.s-button-prev',
          }}

          // pagination={{ clickable: true }}
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index} className="pb-[1px]">
              <ExperienceCard
                title={card.title}
                description={card.description}
                name={card.name}
                country={card.country}
                position={card.position}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute duration-200 rotate-180 -translate-y-1/2 s-button-next -left-16 top-2/4 active:-translate-y-5">
          <SwiperBtn />
        </div>
        <div className="absolute duration-200 -translate-y-1/2 s-button-prev -right-14 top-2/4 active:-translate-y-5">
          <SwiperBtn />
        </div>
      </div>
    </section>
  );
};
