import { useState, useEffect } from 'react';
import { IDimensions } from '../common/interfaces/components';

const getWindowDimensions = (): IDimensions => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export default function useWindowDimensions(): IDimensions {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    const handleResize = ():void => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return ():void => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
