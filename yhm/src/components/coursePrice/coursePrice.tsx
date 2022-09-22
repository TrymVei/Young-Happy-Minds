import { Course } from '../../utils/types';
import style from './coursePrice.module.css';
import Button from '../../components/button/button';
import ReadMore from '../readMore/readMore';

const CoursePrice = (props: { courses: Course[] }) => {
  return (
    <div id="section" className={style.coursePrice}>
      <h2>Våre kurs</h2>
      {props.courses.map((course) => {
        return (
          <div key={course.title} className={style.coursePrice__course}>
            <div
              style={{ width: '70%' }}
              className={style.coursePrice__course__wrapper}
            >
              <p className="courseBold">{course.title}</p>
              <p className="smallestText">{course.time}</p>
              <p className="smallText">{course.shortDescription}</p>
              <p className="courseBold">
                Pris fra {course.priceRange[0]} til {course.priceRange[1]},-
              </p>
            </div>
            <div className={style.coursePrice__course__order}>
              <ReadMore />
              <Button
                color={'#10534F'}
                bgColor={'#FFD526'}
                text={'Bestill kurs'}
                big={false}
              />
            </div>
          </div>
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
          />
        </div>
      </div>
    </div>
  );
};

export default CoursePrice;
