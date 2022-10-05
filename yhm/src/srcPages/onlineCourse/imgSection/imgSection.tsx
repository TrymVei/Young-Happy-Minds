import style from './imgSection.module.css';
const ImgSection = () => {
  return (
    <div id="section" className={style.imgSection}>
      <div>
        <p>
          Dette kurset er for deg som ønsker verktøy for å snu negative
          tankemønstre, få mer energi og overskudd, bedre relasjoner, en
          tydeligere retning, mer mening, mestring og glede.
        </p>
        <p>
          I våre kurs får du nettopp teori og konkrete verktøy for hvordan du
          kan lære mer effektivt, oppleve mer mestring og glede og utvikle ditt
          og andres potensial - både i motgang og i medgang. Du vil gjennom 3
          måneder motta en rekke lekne og enkle utfordringer som er laget for å
          øke ditt grunnleggende nivå av lykke og hjelpe deg med å bygge bedre
          og mer produktive vaner.{' '}
        </p>
      </div>
      <img src="/images/contact-image.png" alt="" />
    </div>
  );
};

export default ImgSection;
