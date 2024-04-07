import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './scroll.css';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`fixed bottom-10 right-10 bg-[#FFA500] text-black p-3 rounded-full cursor-pointer ${isVisible ? 'block' : 'hidden'} z-index`} onClick={scrollToTop}>
      <FaArrowUp />
    </div>
  );
}

