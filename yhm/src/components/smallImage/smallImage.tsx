import { useEffect, useState } from 'react';
import { FontStyle } from '../../utils/types';
import style from './smallImage.module.css';

const SmallImage = (props: {
  imgSrc: string;
  imgAlt: string;
  caption: string;
  fontStyling?: FontStyle;
  mobileStyle?: FontStyle;
}) => {
  const [isDesktop, setIsDesktop] = useState(true);

  const handleResize = () => {
    if (window.matchMedia('(max-width: 900px)').matches) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  };

  useEffect(() => {
    if (window) {
      if (window.matchMedia('(max-width: 900px)').matches) {
        setIsDesktop(false);
      }
      window.addEventListener('resize', handleResize);
    }
  }, []);
  return (
    <div className={style.smallImage}>
      <img src={props.imgSrc} alt={props.imgAlt} />
      <p
        style={
          isDesktop
            ? {
                fontFamily: props.fontStyling?.fontFamily,
                fontSize: props.fontStyling?.fontSize,
              }
            : {
                fontFamily: props.mobileStyle?.fontFamily,
                fontSize: props.mobileStyle?.fontSize,
              }
        }
      >
        {props.caption}
      </p>
    </div>
  );
};

export default SmallImage;
