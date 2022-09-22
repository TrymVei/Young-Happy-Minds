import ReadMore from '../../../components/readMore/readMore';
import style from './whoAreWe.module.css';

const WhoAreWe = () => {
  return (
    <div id="section" className={style.whoAreWe}>
      <div>
        <h2>Hvem er vi?</h2>
        <p>
          Young Happy Minds drives av gründerne Martine Kveim og Karina
          Hollekim. Martine er forretnings-utvikler, seriegründer og ekspert på
          positiv psykologi. Karina er tidligere profesjonell frikjører og
          basehopper. Etter en nær døden-ulykke med basehopping er hun nå
          forfatter, foredragsholder og TV-personlighet.
        </p>
        <div className={style.whoAreWe__readMore}>
          <ReadMore />
        </div>
      </div>
      <img src="/images/whoAreWe-image.png" alt="Bilde av Karina og Martine" />
    </div>
  );
};
export default WhoAreWe;
