import style from './ingress.module.css';

const Ingress = () => {
  return (
    <div className={style.about}>
      <section>
        <div className={style.about__flex}>
          <div>
            <h2>Om oss</h2>
            <p>
              Young Happy Minds, er en organisasjon som kurser barn og voksne i
              positiv psykologi, med teknikker som kan hjelpe oss å bli robuste,
              glade individer som fungerer godt i samspill med andre.
            </p>
            <p>
              Young Happy Minds ble stiftet i England i 2017 av Martine Kveim og
              Yvonne Biggins. YHM har gjennom lokale lag holdt kurs og foredrag
              i over 15 land, til alt fra barn og unge i fengsler og
              flyktningeleirer, skoler og SFO til generaler i den Britiske Hær.
              I Norge drives Young Happy Minds primært av Karina Hollekim (leder
              digitalt innhold) og Martine Kveim (fagansvarlig).
            </p>
            <p>
              Representanter fra Young Happy Minds har blant annet vært med; å
              forme "Oxford University Wellbeing Curriculum", vært representert
              i House of Lords sin arbeidsgruppe om å forme nytt
              barneskolepensum i England, sittet i designgruppen til
              Kronprinsparets fond om livsmestrings-prosjektet for ungdom "Flyt"
              og vært involvert i å utarbeide en rapport for Barne- og
              likestillingsdepartementet om "Livsmestring i skolen".{' '}
            </p>
          </div>
          <div>
            <img src="/images/about-image.svg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ingress;
