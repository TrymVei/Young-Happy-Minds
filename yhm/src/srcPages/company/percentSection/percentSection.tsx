import Percent from '../../../components/percent/percent';
import style from './percentSection.module.css';
const PercentSection = () => {
  return (
    <div id="section" className={style.percentSection}>
      <div>
        <h3>De ansatte som føler mest glede er...</h3>
        <div className={style.percentSection__grid}>
          <Percent
            percent={50}
            text={'mer motivert enn sine kollegaer'}
            percentColor={'#FFD526'}
            textColor={'#F7FDF5'}
          />
          <Percent
            percent={155}
            text={'mer fornøyd med jobben sin'}
            percentColor={'#FFD526'}
            textColor={'#F7FDF5'}
          />
          <Percent
            percent={50}
            text={'mer produktive'}
            percentColor={'#FFD526'}
            textColor={'#F7FDF5'}
          />
          <Percent
            percent={108}
            text={'mer engasjerte'}
            percentColor={'#FFD526'}
            textColor={'#F7FDF5'}
          />
        </div>
        <p className="source">
          *Basert på sesultater fra fokusgrupper med 3,000 deltagere i 79 land,
          Jessica Pryce-Jones, forfatter av boken “Happiness”
        </p>
      </div>
      <div>
        <img src="/images/company-image-1.svg" alt="" />
      </div>
    </div>
  );
};

export default PercentSection;
