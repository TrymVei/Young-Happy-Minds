import { Course } from '../../utils/types';
import style from './coursePrice.module.css';
import Button from '../../components/button/button';
import { ReadMoreFunction } from '../readMore/readMore';
import CourseAcordion from '../accordion/courseAccordion/courseAccordion';
import { useState } from 'react';

const CoursePrice = (props: { courses: Course[] }) => {
  return (
    <div id="section" className={style.coursePrice}>
      <h2>Våre kurs</h2>
      {props.courses.map((course) => {
        return (
          <SingleCourse
            title={course.title}
            time={course.time}
            price={course.price}
            shortDescription={course.shortDescription}
            description={course.description}
            href={course.href}
            imgUrl={course.imgUrl}
            id={course.id}
            buttonText={course.buttonText}
          />
        );
      })}
      <div className={style.coursePrice__form}>
        <h3>Kontakt oss for å bestille kurs</h3>
        <p className="bodyText">
          Send oss en melding om du er interessert i kurs, positiv psykologi,
          eller om du bare vil slå av en prat!
        </p>
        <div>
          <div className={style.coursePrice__form__flex}>
            <input className="smallText" type="email" placeholder="Email" />
            <br />
            <textarea
              name="description"
              id="description"
              placeholder="Si litt om hvilket kurs du er interessert i, og hvor mange deltagere dere blir. "
              cols={70}
              rows={5}
              className="smallText"
            ></textarea>
          </div>
          <Button
            bgColor="#FFD526"
            color="#10534F"
            text="Send mail"
            big={true}
            img={false}
          />
        </div>
      </div>
    </div>
  );
};

const SingleCourse = (course: Course) => {
  const [state, setState] = useState(false);
  return (
    <div key={course.title} className={style.coursePrice__course}>
      <img src={course.imgUrl} alt="" />
      <div className={style.coursePrice__course__wrapper}>
        <div className={style.coursePrice__course__wrapper__flex}>
          <p className="courseBold">{course.title}</p>
          <ReadMoreFunction onClick={() => setState(!state)} id={course.id} />
        </div>
        <p className="smallesText">{course.time}</p>
        <p className="smallText">{course.shortDescription}</p>
        <CourseAcordion courseText={course.description} isOpen={state} />
        <div className={style.coursePrice__course__wrapper__flex}>
          <p className="courseBold">{course.price}</p>

          <Button
            color={'#10534F'}
            bgColor={'#FFD526'}
            text={course.buttonText}
            big={false}
            href={course.href}
            img={false}
          />
        </div>
      </div>
    </div>
  );
};

export default CoursePrice;
