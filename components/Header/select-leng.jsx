'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import { useDisableBodyScroll, useClickOutside } from '@/hooks/hooks';
const langList = [
  {
    title: 'UK',
    value: 'uk',
    img: '/icons/ua.svg',
  },
  {
    title: 'EN',
    value: 'en',
    img: '/icons/en.svg',
  },
];

const SelectLeng = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const langListRef = useRef(null);
  const buttonRef = useRef(null);
  const [showLangList, setShowLangList] = useState(false);
  const close = () => {
    if (showLangList) {
      setShowLangList(false);
    }
  };
  useClickOutside(showLangList, [buttonRef, langListRef], close);

  const handleChangeLocale = value => {
    const newLocale = value;
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }

    router.refresh();
  };

  //визначаємо дані для виведення поточної мови
  const currentLang = langList.find(lang => lang.value === currentLocale);
  //rorate для іконки
  const arrowIconStyle = {
    transform: showLangList ? 'rotate(-180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
  };

  return (
    <div className="w-[70px] relative">
      <button ref={buttonRef}
        className="flex items-center gap-2"
        onClick={() => {
          setShowLangList(!showLangList);
        }}
      >
        {currentLang && (
          <>
            <span className="block w-4 h-4 rounded-full relative overflow-hidden">
              <Image src={currentLang.img} alt="lang icon" fill className="object-cover" />
            </span>
            <span>{currentLang.title}</span>
          </>
        )}
        <span style={arrowIconStyle} className="block w-3 h-2 relative overflow-hidden">
          <Image src={'/icons/shevron.svg'} alt="shevron icon" fill className="object-cover" />
        </span>
      </button>
      {showLangList && (
        <div
          ref={langListRef}
          className="absolute top-8 w-[75px] rounded-xl border border-red-900 bg-black-0 p-4 flex flex-col gap-2 items-center"
        >
          {langList.map(lang => {
            return (
              <button
                key={lang.value}
                className={`flex items-center gap-2 ${lang.value === currentLocale ? 'border-b disabled' : ''}`}
                onClick={() => handleChangeLocale(lang.value)}
                disabled={lang.value === currentLocale}
              >
                <span className="block w-4 h-4 rounded-full relative overflow-hidden">
                  <Image src={lang.img} alt="lang icon" fill className="object-cover" />
                </span>
                <span>{lang.title}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default SelectLeng;
/*
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
const langList = [
  {
    title: 'UK',
    value: 'uk',
    img: '/icons/ua.svg',
  },
  {
    title: 'EN',
    value: 'en',
    img: '/icons/en.svg',
  },
];

const SelectLeng = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [showLangList, setShowLangList] = useState(false);

  const handleChangeLocale = value => {
    const newLocale = value;
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }

    router.refresh();
  };

  //визначаємо дані для виведення поточної мови
  const currentLang = langList.find(lang => lang.value === currentLocale);
  //rorate для іконки
  const arrowIconStyle = {
    transform: showLangList ? 'rotate(-180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
  };

  return (
    <div className="w-[70px] relative">
      <button
        className="flex items-center gap-2"
        onClick={() => {
          setShowLangList(!showLangList);
        }}
      >
        {currentLang && (
          <>
            <span className="block w-4 h-4 rounded-full relative overflow-hidden">
              <Image src={currentLang.img} alt="lang icon" fill className="object-cover" />
            </span>
            <span>{currentLang.title}</span>
          </>
        )}
        <span style={arrowIconStyle} className="block w-3 h-2 relative overflow-hidden">
          <Image src={'/icons/shevron.svg'} alt="shevron icon" fill className="object-cover" />
        </span>
      </button>
      {showLangList && (
        <div className="absolute">
          {langList.map(lang => {
            if (lang.value !== currentLocale) {
              return (
                <button
                  key={lang.value}
                  className="flex items-center gap-2"
                  onClick={() => handleChangeLocale(lang.value)}
                >
                  <span className="block w-4 h-4 rounded-full relative overflow-hidden">
                    <Image src={lang.img} alt="lang icon" fill className="object-cover" />
                  </span>
                  <span>{lang.title}</span>
                </button>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};
export default SelectLeng;

*/
