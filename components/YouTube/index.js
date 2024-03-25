'use client';

import Link from 'next/link';
import { ptsans } from '@/fonts';
import { Navigation } from 'swiper/modules';
import { SwiperBtn } from '../Buttons/SwiperBtn';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ReactPlayer from 'react-player';
import { PlayIcon } from '../../public/icons/playIcon.jsx';

export const YouTube = () => {
  const videos = [
    {
      url: 'https://www.youtube.com/watch?v=imhdh4xCh7I',
      title: 'Vibrant Learning: Conquer English with Us',
      time: '54:40',
      img: '/photo_youtube1.webp',
    },
    {
      url: 'https://www.youtube.com/watch?v=imhdh4xCh7I',
      title: 'Vibrant Learning: Conquer English with Us',
      time: '54:40',
      img: '/photo_youtube2.webp',
    },
    {
      url: 'https://www.youtube.com/watch?v=imhdh4xCh7I',
      title: 'Video 3',
      time: '54:40',
      img: '/photo_youtube1.webp',
    },
    {
      url: 'https://www.youtube.com/watch?v=imhdh4xCh7I',
      title: 'Video 4',
      time: '54:40',
      img: '/photo_youtube2.webp',
    },
  ];

  return (
    <section className="mb-[66px] px-4 xl:px-[70px]">
      <h2 className={`${ptsans.className} text-4xl font-bold text-center`}>
        We are on You<span className="text-red-900"> Tube</span>
      </h2>
      <div className="relative py-16 mx-auto max-w-screen-2xl ">
        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={32}
          slidesPerView={1}
          navigation={{
            nextEl: '.youtube-button-next',
            prevEl: '.youtube-button-prev',
          }}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <div className="flex-col flex-1  h-[280px]  sm:h-[440px]">
                <ReactPlayer
                  url={video.url}
                  width="100%"
                  height="88%"
                  controls
                  playIcon={<PlayIcon />}
                  light={video.img}
                  className="rounded-[48px] border border-red-900 overflow-hidden shrink grow"
                />
                <Link href={video.url}>
                  <div className="flex justify-between mt-3 ">
                    <h4 className={`${ptsans.className} font-bold text-xl leading-[120%] hover:underline`}>
                      {video.title}
                    </h4>
                    <span className="text-red-900">{video.time}</span>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute z-10 duration-200 rotate-180 -translate-y-1/2 youtube-button-next xl:-left-16 left-4 top-2/4 active:-translate-y-5">
          <SwiperBtn />
        </div>
        <div className="absolute z-10 duration-200 -translate-y-1/2 youtube-button-prev xl:-right-16 right-4 top-2/4 active:-translate-y-5">
          <SwiperBtn />
        </div>
      </div>
    </section>
  );
};
