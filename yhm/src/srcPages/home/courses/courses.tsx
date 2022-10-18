import CourseCard from '../../../components/courseCard/courseCard';
import style from './courses.module.css';

const Courses = () => {
  return (
    <section id="section" className={style.courses}>
      <div>
        <div className={style.courses__text}>
          <h2>Våre kurs</h2>
          <p>Vi tilbyr onlinekurs, workshops og digitale seminar</p>
        </div>
      </div>
      <div className={style.courses__course}>
        <CourseCard
          imgName={'course-1'}
          imgAlt={'Dame med laptop'}
          heading={'For enkeltpersoner'}
          description={
            'Få innsikt i den forskningsbaserte teorien, og få en rekke øvelser/hacks som er nyttige for deg, partnere, barn og på jobb.'
          }
          href={'/noe'}
        />
        <CourseCard
          imgName={'course-5'}
          imgAlt={'Foredragsholder'}
          heading={'For bedrift'}
          description={
            'De som har det bra mentalt, presterer også bedre på jobb. Vi holder kurs og workshops tilpasset din arbeidsplass eller gruppe.'
          }
          href={'/noe'}
        />
        <CourseCard
          imgName={'course-3'}
          imgAlt={'3 som holder rundt seg'}
          heading={'For barn og unge'}
          description={'Tre ulike kurs:'}
          href={'/noe'}
          liItems={[
            'For foreldre',
            'For barn og unge',
            'For deg som jobber med barn/unge',
          ]}
        />
      </div>
    </section>
  );
};
export default Courses;
