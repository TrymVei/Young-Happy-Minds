import Layout from '../../layout/layout';
import style from './index.module.css';

const Contact = () => {
  return (
    <Layout>
      <div id="section" className={style.contact}>
        <h2>Kontakt oss</h2>
        <div className={style.contact__wrapper}>
          <div>
            <img src="/images/contact-image.svg" alt="middlertidig bilde" />
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
          </div>
        </div>
        <div className={style.contact__social_media}>
          <h3>Sosiale medier</h3>
          <p>
            <a href="">Instagram</a>
          </p>
          <p>
            <a href="">Facebook</a>
          </p>
          <p>
            <a href="">Vimeo</a>
          </p>
          <p>
            <a href="">Youtube</a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
