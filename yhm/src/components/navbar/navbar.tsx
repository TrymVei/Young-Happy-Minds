import { useState } from 'react';
import style from './navbar.module.css';
export const NavbarDesktop = () => {
  const [currentlyActive, setCurrentlyActive] = useState('');
  const handleClick = (page: string) => {
    setCurrentlyActive(page);
  };
  return (
    <div className={style.navbar}>
      <p className={style.navbar__logo}>
        <a href="/">Young Happy Minds</a>
      </p>
      <p>
        <a href="">Onlinekurs</a>
      </p>
      <p>
        <a href="/company">For bedrifter</a>
      </p>
      <p>
        <a href="/young">Barn og unge</a>
      </p>
      <p>
        <a href="/science">Forskning</a>
      </p>
      <p>
        <a href="/about">Om oss</a>
      </p>
      <p>
        <a href="/contact">Kontakt</a>
      </p>
    </div>
  );
};

export const NavbarMobile = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const burgermenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div>
        <div className={style.navbar}>
          <p className={style.navbar__logo}>
            <a href="/">Young Happy Minds</a>{' '}
          </p>

          <div className={style.navbarDesktop}>
            <p>
              <a href="">Onlinekurs</a>
            </p>
            <p>
              <a href="/company">For bedrifter</a>
            </p>
            <p>
              <a href="/young">Barn og unge</a>
            </p>
            <p>
              <a href="/science">Forskning</a>
            </p>
            <p>
              <a href="/about">Om oss</a>
            </p>
            <p>
              <a href="/contact">Kontakt</a>
            </p>
          </div>

          <div onClick={burgermenu} className={style.burgermenu}>
            <img src="/images/burgermenu.svg" alt="" />
            <img src="/images/burgermenu.svg" alt="" />
            <img src="/images/burgermenu.svg" alt="" />
          </div>
        </div>
        <div
          className={style.expanded}
          style={isExpanded ? { display: 'block' } : { display: 'none' }}
        >
          <p>
            <a href="">Onlinekurs</a>
          </p>
          <p>
            <a href="/company">For bedrifter</a>
          </p>
          <p>
            <a href="/young">Barn og unge</a>
          </p>
          <p>
            <a href="/science">Forskning</a>
          </p>
          <p>
            <a href="/about">Om oss</a>
          </p>
          <p>
            <a href="/contact">Kontakt</a>
          </p>
        </div>
      </div>
    </>
  );
};
