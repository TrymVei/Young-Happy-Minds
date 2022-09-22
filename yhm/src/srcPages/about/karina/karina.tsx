import style from './karina.module.css';
const Karina = () => {
  return (
    <div id="section" className={style.karina}>
      <div>
        <h3>Karina Hollekim</h3>
        <p>
          Karina var tidligere en av verdens beste frikjørere på ski og en
          anerkjent basehopper, men så ble alt snudd på hodet når fallskjermen
          tvinner seg og hun i fritt fall traff bakken. Hun overlevde fallet på
          mirakuløst vis, og selv om hun ble «dømt» til et liv i rullestol har
          hun kommet tilbake mot alle odds gjennom systematisk bruk av disse
          teknikkene i positiv psykologi som hun brenner for å dele videre.
          Karina er utdannet innen Neuro Linguistic Programming, Acceptance and
          Commitment Therapy og CTI coaching. Hun har i tillegg skrevet bok og
          brenner for å dele av sine erfaringer til barn og voksne.
        </p>
      </div>
      <img src="/images/about-karina.svg" alt="" />
    </div>
  );
};

export default Karina;
