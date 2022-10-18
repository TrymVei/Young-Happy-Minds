import Button, { FakeButton } from '../../../components/button/button';
import Underline from '../../../components/underline/underline';
import style from './landingPage.module.css';
const LandingPage = () => {
  return (
    <section className={style.landingpage}>
      <div className={style.landingpage__wrapper}>
        <h3 className=".">KURS I POSITIV PSYKOLOGI</h3>
        <h1>
          Fordi g<u style={{ textDecorationColor: 'white' }}>lede</u> og
          robusthet <u style={{ textDecorationColor: 'white' }}>kan læres</u>
        </h1>
        <div className={style.landing__wrapper__flex}>
          <div>
            <p className="ingress">
              Vi deler kunnskap om positiv psykologi, så du og dine kan prestere
              bedre, ha det bedre, og være bedre rustet til å takle livets
              ufordringer.
            </p>
            <p className="ingress">
              Våre kurs er utviklet i samarbeid med fagmiljøer verden over, og
              har dokumentert effekt.
            </p>
            <div className={style.landingpage__buttons}>
              <Button
                bgColor="#FFFFFF"
                color="#10534F"
                text="For enkeltperson"
                big={true}
                img={true}
                href={'/young'}
              ></Button>
              <FakeButton
                bgColor="#0e645f"
                color="white"
                text="For bedrift"
                big={true}
                img={'/images/arrows/whiteArrowRight.svg'}
                href={'/company'}
              ></FakeButton>
            </div>
          </div>
          <img
            className={style.platform}
            src="/images/platform.svg"
            alt="Glad jente"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
