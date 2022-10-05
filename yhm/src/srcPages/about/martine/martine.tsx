import style from './martine.module.css';

const Martine = () => {
  return (
    <div id="section" className={style.martine}>
      <div>
        <h3>Martine Kveim</h3>
        <p>
          Martine har utdannelse innen psykologi fra University of San Francisco
          og kommunikasjon og ledelse fra University of Westminister og THNK
          School of Creative Leadership fra THNK i Amsterdam. Hun elsker å
          formidle teori og konkrete verktøy som fremmer engasjement, glede og
          robusthet og det store kunnskapsgapet mellom forskning og samfunnet,
          var en av hovedmotivasjonene for at Young Happy Minds ble stiftet av
          Martine Kveim og Yvonne Biggins. Martine bruker selv teknikkene daglig
          både som kollega, individ, partner og mamma.
        </p>
      </div>
      <img src="/images/about-martine.png" alt="" />
    </div>
  );
};

export default Martine;
