import style from './ingress.module.css';
const Ingress = () => {
  return (
    <div className={style.ingress}>
      <div className={style.ingress__wrapper}>
        <h1>Glede og robusthet for barn og unge</h1>
        <img src="/images/stars.svg" alt="stjerner" />
      </div>
      <p className="ingress" id={style.ingress}>
        Vi tilbyr kurs for barn, ungdom og studenter, samt de som jobber med
        disse gruppene. Kursene tar for seg vitenskapen bak lykke, positiv
        psykologi, på en engasjerende og interaktiv måte. Deltagerne vil også få
        en innføring i effektive verktøy og metoder for å oppnå økt trivsel og
        mer glede.
      </p>
    </div>
  );
};

export default Ingress;
