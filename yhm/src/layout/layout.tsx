import { useState } from 'react';
import style from './layout.module.css';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = (props: Props) => {
  const [currentlyActive, setCurrentlyActive] = useState('');

  const handleClick = (page: string) => {
    setCurrentlyActive(page);
  };

  return (
    <div>
      <div className={style.navbar}>
        <p className={style.navbar__logo}>
          <a href="/">Young Happy Minds</a>
        </p>
        <p>
          <a href="">Onlinekurs</a>
        </p>
        <p>
          <a
            style={
              currentlyActive === 'company'
                ? { textDecoration: 'underline' }
                : { textDecoration: 'none' }
            }
            onClick={() => handleClick('company')}
            href="/company"
          >
            For bedrifter
          </a>
        </p>
        <p>
          <a onClick={() => handleClick('young')} href="/young">
            Barn og unge
          </a>
        </p>
        <p>
          <a onClick={() => handleClick('science')} href="/science">
            Forskning
          </a>
        </p>
        <p>
          <a onClick={() => handleClick('about')} href="/about">
            Om oss
          </a>
        </p>
        <p>
          <a onClick={() => handleClick('contact')} href="/contact">
            Kontakt
          </a>
        </p>
      </div>

      <main>{props.children}</main>

      <div className={style.footer}>
        <div className={style.footer__flex}>
          <div>
            <div>
              <h3>kontakt</h3>
              <p>Vi vil gjerne høre fra deg!</p>
              <p>Ta kontakt på</p>
            </div>
            <div>
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
            </div>
          </div>
          <div>
            <div>
              <h3>Kurs</h3>
              <p>
                <a href="">For enkeltpersoner</a>
              </p>
              <p>
                <a href="">For bedrifter</a>
              </p>
              <p>
                <a href="">For barn og unge</a>
              </p>
            </div>
            <div>
              <h3>Om oss</h3>
              <p>
                <a href="">Om Young Happy Minds</a>
              </p>
            </div>
          </div>
          <div className={style.footer__wrapper__logo}>
            <p>
              <a href="">Til toppen</a>
              <img src="/images/upArrow.svg" alt="Pil opp" />
            </p>
            <img src="/images/logo.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
