import CourseCard from '../../../components/courseCard/courseCard';
import style from './courses.module.css';

const Courses = () => {
  return (
    <section id="section" className={style.courses}>
      <div>
        <div className={style.courses__text}>
          <h2>Våre kurs</h2>
          <p>
            Vi tilbyr workshops og nettkurs for å gjøre deg gladere og mer
            robust i hverdagen. Kursene kan gjennomføres fysisk, eller digitalt
            i ditt eget tempo.
          </p>
        </div>
      </div>
      <div className={style.courses__course}>
        <CourseCard
          imgName={'course-1'}
          imgAlt={'Dame med laptop'}
          heading={'For enkeltpersoner'}
          label={'Online'}
          description={
            'Få innsikt i den forskningsbaserte teorien, og få en rekke øvelser/hacks som er nyttige for deg, partnere, barn og på jobb.'
          }
        />
        <CourseCard
          imgName={'course-2'}
          imgAlt={'Foredragsholder'}
          heading={'For bedrift'}
          label={'fysisk/digitalt'}
          description={
            'De som har det bra mentalt, presterer også bedre på jobb. Vi holder kurs og workshops tilpasset din arbeidsplass eller gruppe.'
          }
        />
        <CourseCard
          imgName={'course-3'}
          imgAlt={'3 som holder rundt seg'}
          heading={'For barn og unge'}
          label={'fysisk'}
          description={
            'Unge som har det bra med seg selv gjør det bedre på alle arenaer; på skolen, sosialt og i idrett. Vi lærer bort teknikker som kan hjelpe og styrke dem gjennom resten av livet.'
          }
        />
      </div>
    </section>
  );
};
export default Courses;
