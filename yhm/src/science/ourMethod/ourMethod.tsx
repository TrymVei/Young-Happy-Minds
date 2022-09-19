import style from './ourMethod.module.css';

const OurMethod = () => {
  return (
    <div className={style.ourMethod}>
      <div className={style.ourMethod__wrapper}>
        <h2>Vår metode - Happy Hacks</h2>
        <p>
          Happy Hacks er enkle oppgaver og metoder vi har utarbeidet for å
          formidle kunnskapen og de harde faktaene fra forskningen på en måte
          som gjør at man har det gøy mens man lærer!
        </p>
        <p>
          Det er ikke nok å bare lære teorien – man må også gjøre noe. Ikke bare
          husker man bedre på denne måten, det er også med på å tvinge frem en
          endring og styrke nye koblinger i hjernen.
        </p>
      </div>
      <img src="/images/happyHacks.svg" alt="" />
    </div>
  );
};

export default OurMethod;
