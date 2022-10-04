import { Course, Mail } from '../../utils/types';
import style from './coursePrice.module.css';
import Button, { ButtonFunction } from '../../components/button/button';
import { ReadMoreFunction } from '../readMore/readMore';
import CourseAcordion from '../accordion/courseAccordion/courseAccordion';
import { useState } from 'react';
import anime from 'animejs';
import emailjs from 'emailjs-com';

const CoursePrice = (props: { courses: Course[] }) => {
  const [sender, setSender] = useState('');
  const [description, setDescription] = useState('');

  const sendMail = () => {
    emailjs
      .send(
        'service_m5bquz6',
        'template_sk5al8h',
        {
          senderEmail: sender,
          description: description,
        },
        'v4ZMra2XPpL6GFzlD'
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
  };

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
            <input
              name="from"
              className="smallText"
              type="email"
              placeholder="Email"
              onChange={(e) => setSender(e.target.value)}
            />
            <br />
            <textarea
              name="description"
              id="description"
              placeholder="Si litt om hvilket kurs du er interessert i, og hvor mange deltagere dere blir. "
              cols={70}
              rows={5}
              className="smallText"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <ButtonFunction
            color={'#0D534F'}
            bgColor={'#FFD526'}
            text={'Send mail'}
            big={true}
            img={false}
            onClick={() => sendMail()}
          />
        </div>
      </div>
    </div>
  );
};

const SingleCourse = (course: Course) => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
    if (!state)
      anime({
        targets: '#open' + course.id,
        rotate: '0.625turn',
      });
    else {
      anime({
        targets: '#open' + course.id,
        rotate: '0',
      });
    }
  };
  return (
    <div
      onClick={handleClick}
      key={course.title}
      className={style.coursePrice__course}
    >
      <img src={course.imgUrl} alt="" />
      <div className={style.coursePrice__course__wrapper}>
        <div className={style.coursePrice__course__wrapper__flex}>
          <p className="courseBold">{course.title}</p>
          <ReadMoreFunction onClick={() => setState(!state)} id={course.id} />
        </div>
        <p className="smallesText">{course.time}</p>
        {course.shortDescription.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
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
