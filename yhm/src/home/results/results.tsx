import Percent from '../../components/percent/percent';
import style from './results.module.css';
const Results = () => {
  return (
    <div className={style.results}>
      <div className={style.result__flex}>
        <div>
          <h2>Målte resultater etter 10 uker</h2>
          <p>
            Disse tallene vil fortsette å øke dersom man forsetter å bruke
            teknikkene etter fullført kurs. For å måle effekten av kursene har
            vi utviklet et målingsverktøy som måler livskvalitet før og etter
            fullført kurs.{' '}
          </p>
        </div>
        <div className={style.result__grid}>
          <Percent percent={20} text="økt livskvalitet etter programmet" />
          <Percent percent={12} text="bedre emosjonelt velvære" />
          <Percent percent={14} text="forbedring av selvfølelse" />
          <Percent percent={12} text="forbedring av utholdenhet" />
        </div>
      </div>
    </div>
  );
};

export default Results;
