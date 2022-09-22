import style from './invest.module.css';
const Invest = () => {
  return (
    <div id="section" className={style.invest}>
      <h1>Invester i bedriftens viktigste ressurs</h1>

      <p className="ingress">
        Forskning viser at lykkelige arbeidstakere er mer kreative, mer
        produktive, og leverer arbeid av høyere kvalitet. I tillegg tar de
        sjeldnere ut sykemelding, og blir lenger i jobben sin. Vinn-vinn for
        arbeidstaker og arbeidsgiver.
      </p>
      <p className="ingress">
        Kurs med Young Happy Minds gir en grundig introduksjon til positiv
        psykologi, samt konkrete teknikker og verktøy for å anvende teorien. Vi
        fokuserer på den enkeltes styrker, på å øke robusthet og på generell
        lykke. Fordi gladere folk gir økt trivsel og effektivitet på
        arbeidsplassen.
      </p>
    </div>
  );
};

export default Invest;
