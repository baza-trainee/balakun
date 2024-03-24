'use client'

import { useEffect, useState } from 'react';
import { getData } from '../../data/data';

export const Achievements = () => {
  const [achievementsData, setAchievementsData] = useState({});

  useEffect(() => {
    const data = getData();
    setAchievementsData(data);
  }, []);

  return (
    <section className='p-16 mb-130'>
      <div className='mx-auto max-w-[700px] text-center'>
        <div className='mb-[64px] '>
          <h2 className="achievement-title">Balakun's Achievement</h2>
        </div>
        <div className='flex text-center gap-[64px] justify-center'>
          <div className="achievement-block">
            <h3 className="number">{achievementsData.students}</h3>
            <p className="description">Students</p>
          </div>
          <div className="achievement-block">
            <h3 className="number">{achievementsData.mentors}</h3>
            <p className="description">Mentors</p>
          </div>
          <div className="achievement-block">
            <h3 className="number">{achievementsData.matches}</h3>
            <p className="description">Matches</p>
          </div>
          <div className="achievement-block">
            <h3 className="number">{achievementsData.countries}</h3>
            <p className="description">Countries</p>
          </div>
        </div>
      </div>
    </section>
  );
};
