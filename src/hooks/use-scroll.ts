import { throttle } from 'lodash';
import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  const fn = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', throttle(fn, 100));
    return () => {
      window.removeEventListener('scroll', fn);
    };
  }, []);

  return {
    scrollY,
  };
};
