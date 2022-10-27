import Layout from '../../layout/layout';
import style from './index.module.css';

const Contact = () => {
  return (
    <Layout>
      <div id="section" className={style.contact}>
        <h2>Kontakt oss</h2>
        <div className={style.contact__wrapper}>
          <div>
            <img src="/images/contact-image.png" alt="middlertidig bilde" />
            <div className={style.contact__social_media_mobile}>
              <p style={{ color: '#FFD526' }} id="boldJakarta22">
                Sosiale medier
              </p>
              <p>
                <a href="https://www.instagram.com/younghappyminds/?hl=en">
                  Instagram
                </a>
              </p>
              <p>
                <a href="https://www.facebook.com/younghappyminds/">Facebook</a>
              </p>
              <p>
                <a href="https://vimeo.com/179206874">Vimeo</a>
              </p>
            </div>
          </div>
          <div>
            <p>
              Ønsker du å samarbeide med oss? <br /> Eller har du noen spørsmål?
            </p>
            <p>Send oss en mail da vel!</p>
            <p>
              <a href="mailto: contact@younghappyminds.com">
                contact@younghappyminds.com
              </a>
            </p>
            <div className={style.contact__social_media_desktop}>
              <p style={{ color: '#FFD526' }} id="boldJakarta22">
                Sosiale medier
              </p>
              <p>
                <a href="https://www.instagram.com/younghappyminds/?hl=en">
                  Instagram
                </a>
              </p>
              <p>
                <a href="https://www.facebook.com/younghappyminds/">Facebook</a>
              </p>
              <p>
                <a href="https://vimeo.com/179206874">Vimeo</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
