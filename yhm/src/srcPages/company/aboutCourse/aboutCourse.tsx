import MailForm from '../../../components/mailForm/mailForm';
import style from './aboutCourse.module.css';
const AboutCourse = () => {
  return (
    <div id="section" className={style.aboutCourse}>
      <h2>Om kurset</h2>
      <div className={style.aboutCourse__wrapper}>
        <img src="/images/course-company-1.png" alt="4 personer i et møte" />
        <div>
          <h3>Bedriftskurs for ledere og medarbeidere</h3>
          <p className="smallText">
            Varighet: tilpasses etter ønske. Kan gjennomføres fysisk eller
            digitalt.
          </p>
          <p>
            Optimaliser effekten av å bygge på det som er bra, i stedet for å
            fikse det som er feil.
          </p>
          <p>
            Hvordan bygger man organisatorisk og individuell glede, robusthet og
            utholdenhet? Og hva er er sammenhengen mellom
            medarbeider-engasjement, glede og prestasjon?
          </p>
          <p>
            Gjennom kurset og våre interaktive foredrag får ledere og
            medarbeidere en introduksjon i teori og praksis innen moderne
            positiv psykologi. Hensikten er å styrke den emosjonelle
            utholdenheten og få innsikt og verktøy som kan gjøre oss mer robuste
            i møte med motgang, slik at vi også kan prestere bedre i samspill
            med andre.
          </p>
          <p>
            Vi skreddersyr ulike pakker - Ta kontakt for mer informasjon og
            priser{' '}
          </p>
        </div>
      </div>
      <MailForm />
    </div>
  );
};

export default AboutCourse;
