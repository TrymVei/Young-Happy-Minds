import Button, { FakeButton } from '../../../components/button/button';
import style from './landing.module.css';

const Landing = () => {
  return (
    <div className={style.landing}>
      <p className="navbarLogo">Young Happy Minds onlinekurs:</p>
      <div className={style.landing__wrapper}>
        <div>
          <h1>Et interaktivt kurs for å bli mer robust og glad</h1>
          <p className="navbarLogo">
            Har du lyst til å gå fra passasjer til sjåfør i ditt eget liv?
          </p>
          <p>
            Invester i deg selv og lær hvordan du kan bli mer robust, mestre
            stress og oppleve mer livsglede i hverdagen.{' '}
          </p>
          <div className={style.button__wrapper}>
            <Button
              color={'#0D534F'}
              bgColor={'white'}
              text={'Kjøp kurs'}
              big={true}
              img={true}
            />
            <FakeButton
              color={'white'}
              bgColor={'#0E645F'}
              text={'Mer om kurset'}
              big={true}
            />
          </div>
        </div>
        <img src="/images/product-image-1.svg" alt="Bilde av kurs platformen" />
      </div>
    </div>
  );
};

export default Landing;
