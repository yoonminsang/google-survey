import { throttle } from 'lodash';
import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const fn = () => {
      if (mounted) setScrollY(window.pageYOffset);
    };

    let mounted = true;
    window.addEventListener('scroll', throttle(fn, 100));

    return () => {
      mounted = false;
      window.removeEventListener('scroll', fn);
    };
  }, []);

  return {
    scrollY,
  };
};
