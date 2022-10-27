import SmallImage from '../../../components/smallImage/smallImage';
import { FontStyle } from '../../../utils/types';
import style from './figures.module.css';
const Figures = () => {
  const pathShortcut = '/images/figures';
  const fontStyling: FontStyle = {
    fontFamily: 'PoliteType regular',
    fontSize: '28px',
  };

  const mobileStyle: FontStyle = {
    fontFamily: 'PoliteType regular',
    fontSize: '20px',
  };

  return (
    <div className={style.figures}>
      <h2>Etter kurs med oss sier deltagere at de opplever:</h2>
      <div className={style.figures__grid}>
        <SmallImage
          imgSrc={pathShortcut + '/Smiley.svg'}
          imgAlt={''}
          caption={'økt livsglede'}
          fontStyling={fontStyling}
          mobileStyle={mobileStyle}
        />
        <SmallImage
          imgSrc={pathShortcut + '/Confetti.svg'}
          imgAlt={''}
          caption={'mer engasjement'}
          fontStyling={fontStyling}
          mobileStyle={mobileStyle}
        />
        <SmallImage
          imgSrc={pathShortcut + '/Compass.svg'}
          imgAlt={''}
          caption={'tydeligere retning i livet'}
          fontStyling={fontStyling}
          mobileStyle={mobileStyle}
        />
        <SmallImage
          imgSrc={pathShortcut + '/Benefits.svg'}
          imgAlt={''}
          caption={'bedre relasjoner'}
          fontStyling={fontStyling}
          mobileStyle={mobileStyle}
        />
        <SmallImage
          imgSrc={pathShortcut + '/Sword.svg'}
          imgAlt={''}
          caption={'bedre rustet til å takle motgang'}
          fontStyling={fontStyling}
          mobileStyle={mobileStyle}
        />
        <SmallImage
          imgSrc={pathShortcut + '/SunDim.svg'}
          imgAlt={''}
          caption={'En mer positiv hverdag'}
          fontStyling={fontStyling}
          mobileStyle={mobileStyle}
        />
        <SmallImage
          imgSrc={pathShortcut + '/Flag.svg'}
          imgAlt={''}
          caption={'Bedre på å sette– og nå sine mål'}
          fontStyling={fontStyling}
          mobileStyle={mobileStyle}
        />
        <SmallImage
          imgSrc={pathShortcut + '/Gauge.svg'}
          imgAlt={''}
          caption={'økt selvtillit og selvinnsikt'}
          fontStyling={fontStyling}
          mobileStyle={mobileStyle}
        />
      </div>
    </div>
  );
};

export default Figures;
