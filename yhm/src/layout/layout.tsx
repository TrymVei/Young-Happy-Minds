import Navbar from '../components/navbar/navbar';
import { Props } from '../utils/types';
import style from './layout.module.css';

const Layout: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div id="top">
      <Navbar />

      <main>{props.children}</main>

      <div className={style.footer}>
        <div className={style.footer__flex}>
          <div>
            <div>
              <h3>Kontakt</h3>
              <a href="mailto:contact@younghappyminds.com">
                contact@younghappyminds.com
              </a>
            </div>
            <div>
              <h3>Sosiale medier</h3>
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
            <div>
              <h3>Kurs</h3>
              <p>
                <a href="/young#1">For enkeltpersoner</a>
              </p>
              <p>
                <a href="/company#1">For bedrifter</a>
              </p>
              <p>
                <a href="/young#2">For barn og unge</a>
              </p>
            </div>
            <div>
              <h3>Om oss</h3>
              <p>
                <a href="/about">Om Young Happy Minds</a>
              </p>
            </div>
          </div>
          <div className={style.footer__wrapper__logo}>
            <p>
              <a href="#top">Tilbake til toppen</a>
              <img src="/images/arrows/upArrow.svg" alt="Pil opp" />
            </p>
            <img src="/images/logo.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
