import { useEffect, useState } from 'react';
import { NavbarDesktop, NavbarMobile } from '../components/navbar/navbar';
import style from './layout.module.css';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = (props: Props) => {
  const [isDesktop, setIsDesktop] = useState(false);

  const handleResize = () => {
    if (window.matchMedia('(max-width: 1350px)').matches) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  };

  useEffect(() => {
    if (window) {
      if (window.matchMedia('(max-width: 1350)').matches) {
        setIsDesktop(false);
      } else {
        setIsDesktop(true);
      }
      window.addEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div id="top">
      <NavbarMobile />

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
              <a href="#top">Til toppen</a>
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
