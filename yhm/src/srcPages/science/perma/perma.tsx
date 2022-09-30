import SmallImage from '../../../components/smallImage/smallImage';
import style from './perma.module.css';
const Perma = () => {
  return (
    <>
      <div className={style.perma}>
        <div>
          <h2>PERMA+V - modellen</h2>
          <p>
            Vi har alle et utgangspunkt vi måler livskvaliteten vår ut i fra,
            basert på vårt grunnleggende nivå av helse, stress og opplevd
            tilfredshet - hvordan vi føler oss på en vanlig dag.
          </p>
          <p>
            PERMA+V-modellen* er utviklet for å hjelpe oss å forstå hvordan vi
            kan lære å utvikle oss og få det best mulig.
          </p>
          <p>
            Kjernelementene i modellen består av: positive følelser,
            engasjement, relasjoner, mening, mestring og vitalitet.
          </p>
          <p>
            Dersom du har alle disse punktene på plass i livet ditt, opplever du
            mest sannsynlig tilfredshet. Ved å jobbe med disse elementene kan
            mennesker oppleve å føle seg gøadere og mer robuste i møte med
            motgang.
          </p>
        </div>
        <div className={style.perma__images}>
          <div className={style.perma__images__flex}>
            <SmallImage
              imgSrc="/images/perma/meaning.svg"
              imgAlt="Blomst holdt i hendene"
              caption="Mening"
            />
            <SmallImage
              imgSrc="/images/perma/positiveFeelings.svg"
              imgAlt="Smilende jente"
              caption="Positive følelser"
            />
            <SmallImage
              imgSrc="/images/perma/engagement.svg"
              imgAlt="En som mediterer"
              caption="Engasjement"
            />
          </div>
          <div className={style.perma__images__flex}>
            <SmallImage
              imgSrc="/images/perma/relations.svg"
              imgAlt="To som holder rundt hverandre"
              caption="Relasjoner"
            />
            <SmallImage
              imgSrc="/images/perma/vitality.svg"
              imgAlt="En som hopper opp i luften"
              caption="Vitalitet"
            />
            <SmallImage
              imgSrc="/images/perma/accomplishment.svg"
              imgAlt="En på toppen av et fjell"
              caption="Mestring"
            />
          </div>
          <p className={style.perma__mobile}>
            Dersom du har alle disse punktene på plass i livet ditt, opplever du
            mest sannsynlig tilfredshet. Ved å jobbe med disse elementene kan
            mennesker oppleve å føle seg gøadere og mer robuste i møte med
            motgang.
          </p>
        </div>
      </div>
    </>
  );
};
export default Perma;
