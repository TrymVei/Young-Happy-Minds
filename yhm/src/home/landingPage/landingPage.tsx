import Button from '../../components/button/button';
import style from './landingPage.module.css';
const LandingPage = () => {
  return (
    <section className={style.landingpage}>
      <div className={style.landingpage__wrapper}>
        <h3 className=".">VI ER YOUNG HAPPY MINDS</h3>
        <h1>
          Fordi mental helse handler om mer enn fravær av mentale lidelser.
        </h1>
        <div className={style.landing__wrapper__flex}>
          <div>
            <p className="ingress">
              Vårt mål er å dele kunnskap om positiv psykologi, så du og dine
              kan ha det bedre, og være bedre rustet til å takle livets
              ufordringer. Våre kurs er utviklet i samarbeid med fagmiljøer
              verden over, og har
              <a href=""> dokumentert effekt.</a>{' '}
            </p>
            <div className={style.landingpage__buttons}>
              <Button
                bgColor="#FFFFFF"
                color="#10534F"
                text="Onlinekurs"
                big={true}
              ></Button>
              <Button
                bgColor="#FFFFFF"
                color="#10534F"
                text="Bedriftskurs"
                big={true}
              ></Button>
            </div>
          </div>
          <img src="/images/girl1.png" alt="Glad jente" />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
