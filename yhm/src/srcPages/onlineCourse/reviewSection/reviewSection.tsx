import CustomerReview from "../../../components/customerReview/customerReviev";
import { Reviews } from "../../../utils/reviews";
import style from "./reviewSection.module.css";

const ReviewSection = () => {
  const reviews = Reviews();

  return (
    <div id="section" className={style.reviewSection}>
      <div>
        <p className="courseBold">
          Deltakere som har vært gjennom programmet sier de opplever:
        </p>
        <ul>
          <li>Økt livsglede</li>
          <li>Mer engasjement</li>
          <li>Tydeligere retning i livet</li>
          <li>Mer robusthet til å takle motgang</li>
          <li>Forskning og verktøy som gir økt vitalitet og bedre helse</li>
          <li>Bedre relasjoner</li>
          <li>En mer positiv hverdag</li>
          <li>En større forståelse for og eierskap til egne styrker</li>
          <li>
            Mer klarhet i egne verdier og hvordan man kan bruke disse som
            styringsverktøy
          </li>
          <li>Verktøy for å skape en trygg og robust ramme for barna</li>
          <li>
            Verktøy som kan hjelpe til økt produktivitet og mestring
            profesjonelt
          </li>
          <li>Et vitenskapelig fundament innen positiv psykologi</li>
          <li>Flere verktøy for å sette seg mål og å nå disse</li>
          <li>Strategier og verktøy for å kunne oppnå varig endring</li>
        </ul>
        <p className="courseBold">Du får:</p>
        <ul>
          <li>Pre og post-test som gir deg mulighet til å måle effekt</li>
          <li>12 kursmoduler a ca 1 time, brukket ned i 48 leksjoner</li>
          <li>Tilgang til kurset ett helt år</li>
          <li>
            Ukentlige videoer og innhold som hjelper deg til å bli mer robust og
            få økt livsglede
          </li>
          <li>
            Ca. 40 lekne og effektive verktøy "Happy Hacks" til nedlasting til
            bruk både privat og profesjonelt
          </li>
          <li>100% digitalt og dermed fleksibelt for deg og din kalender</li>
          <li>
            LIVE gruppe-coaching "Happy Hour" sammen med andre kursdeltakere
          </li>
          <li>
            Medlemskap i lukket FB-gruppe med inspirasjon, støtte og oppmuntring
          </li>
        </ul>
      </div>
      <div className={style.reviewSection__review}>
        <p className="courseBold">Hva andre sier om kurset:</p>
        {reviews.map((review) => (
          <CustomerReview review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
