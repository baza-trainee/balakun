'use client'

import { useEffect, useState } from 'react';
import { getData } from '../../data/data';
import { ptsans, roboto } from "@/fonts";


export const Achievements = () => {
  const [achievementsData, setAchievementsData] = useState({});

  useEffect(() => {
    const data = getData();
    setAchievementsData(data);
  }, []);

  return (
    <section className={`${ptsans.className} p-16 mb-130 `}>
      <div className='mx-auto max-w-[1500px] text-center'>
        <div className='mb-[64px]'>
          <h2 className="achievement-title text-[36px] ">
            Balakun's <span className='text-red-900'>Achievements</span>
            
          </h2>
        </div>
        <div className='flex pt-[40px] pb-[32px] text-center gap-[220px] justify-center border border-red-900 rounded-[48px]'>
          <div className="achievement-block">
            <h3 className="number text-[48px]">{achievementsData.students}+</h3>
            <p className={`${roboto.className} text-[16px] text-red-900`}>Students</p>
          </div>
          <div className="achievement-block">
            <h3 className="number text-[48px]">{achievementsData.mentors}+</h3>
            <p className={`${roboto.className} text-[16px] text-red-900`}>Mentors</p>
          </div>
          <div className="achievement-block">
            <h3 className="number text-[48px]">{achievementsData.matches}+</h3>
            <p className={`${roboto.className} text-[16px] text-red-900`}>Matches</p>
          </div>
          <div className="achievement-block">
            <h3 className="number text-[48px]">{achievementsData.countries}+</h3>
            <p className={`${roboto.className} text-[16px] text-red-900`}>Countries</p>
          </div>
        </div>
      </div>
    </section>
  );
};
