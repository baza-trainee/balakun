'use client';
import { useEffect } from 'react';

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

//відслідковування кліку поза елементом
export const useClickOutside = (isVisible, refOrRefs, callback) => {
  useEffect(() => {
    const handleClickOutside = event => {
      let clickedOutside = true;
      if (Array.isArray(refOrRefs)) {
        refOrRefs.forEach(ref => {
          if (ref.current && ref.current.contains(event.target)) {
            clickedOutside = false;
          }
        });
      } else {
        clickedOutside = refOrRefs.current && !refOrRefs.current.contains(event.target);
      }

      if (isVisible && clickedOutside) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, refOrRefs, callback]);
};

//прибрати скролл при відкритті модального вікна
export const useDisableBodyScroll = isEnabled => {
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth; // Отримати ширину скроллу

    const handleScroll = e => {
      if (isEnabled) {
        e.preventDefault();
      }
    };

    if (isEnabled) {
      document.body.style.overflow = 'hidden'; // Вимкнення скроллу для body
      document.body.style.marginRight = `${scrollbarWidth}px`; // Додавання маргіну, щоб уникнути здвигу
      document.addEventListener('scroll', handleScroll, { passive: false }); // Прослуховування скроллу
    } else {
      document.body.style.overflow = ''; // Відновлення скроллу для body
      document.body.style.marginRight = ''; // Прибирання маргіну
      document.removeEventListener('scroll', handleScroll); // Видалення прослуховувача скроллу
    }

    return () => {
      document.body.style.overflow = ''; // Прибирання скроллу при видаленні компонента
      document.body.style.marginRight = ''; // Прибирання маргіну при видаленні компонента
      document.removeEventListener('scroll', handleScroll); // Видалення прослуховувача скроллу
    };
  }, [isEnabled]);
};

export default useDisableBodyScroll;
