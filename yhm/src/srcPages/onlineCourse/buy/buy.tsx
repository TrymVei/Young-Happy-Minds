import Button from '../../../components/button/button';
import style from './buy.module.css';
const Buy = () => {
  return (
    <div id="section" className={style.buy}>
      <p>Pris 5900,-</p>
      <Button
        color={'white'}
        bgColor={'#0E645F'}
        text={'Kjøp kurs'}
        big={true}
        img={false}
        href={
          'https://kurs.younghappyminds.no/purchase/119420-Young-Happy-Minds-et-interaktivt-kurs-i'
        }
      />
    </div>
  );
};

export default Buy;
