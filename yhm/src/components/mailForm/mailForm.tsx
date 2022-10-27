import { useState } from 'react';
import { ButtonFunction } from '../button/button';

import emailjs from 'emailjs-com';
import style from './mailForm.module.css';

const MailForm = (props: { textColor?: string; margingTop?: string }) => {
  const [sender, setSender] = useState('');
  const [description, setDescription] = useState('');

  const sendMail = () => {
    //CREATE SERVICE AND CHANGE SERVICE CODE FOR IT TO WORK
    emailjs
      .send(
        'service_nojemye',
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
    <div
      style={{ marginTop: props?.margingTop }}
      className={style.coursePrice__form}
    >
      <h3 id="contact" style={{ color: props?.textColor }}>
        Kontakt oss for å bestille kurs
      </h3>
      <p style={{ color: props?.textColor }} className="bodyText">
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
  );
};

export default MailForm;
