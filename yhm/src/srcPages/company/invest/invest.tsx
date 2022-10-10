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
      <p className={style.courses}>Noen av firmaene vi har kurset:</p>
    </div>
  );
};

export default Invest;
