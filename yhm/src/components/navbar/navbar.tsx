import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import style from './navbar.module.css';
import anime from 'animejs';

export const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const burgermenu = () => {
    if (isExpanded)
      anime({
        targets: '#animate',
        translateX: 0,
        easing: 'easeInOutQuad',
        direction: 'normal',
        loop: false,
      });
    else {
      anime({
        targets: '#animate',
        translateX: 1350,
        easing: 'easeInOutQuad',
        direction: 'normal',
        duration: 1000,
        loop: false,
      });
    }
    setIsExpanded(!isExpanded);
  };

  const router = useRouter();

  return (
    <>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div className={style.navbar}>
          <p className={style.navbar__logo}>
            <a href="/">Young Happy Minds</a>
          </p>

          <div className={style.navbarDesktop}>
            <p>
              <a href="">Onlinekurs</a>
            </p>
            <p>
              <a
                href="/company"
                style={
                  router.pathname === '/company'
                    ? {
                        textDecoration: 'underline',
                        textDecorationColor: '#FFD526',
                      }
                    : { textDecoration: 'none' }
                }
              >
                For bedrifter
              </a>
            </p>
            <p>
              <a
                href="/young"
                style={
                  router.pathname === '/young'
                    ? {
                        textDecoration: 'underline',
                        textDecorationColor: '#FFD526',
                      }
                    : { textDecoration: 'none' }
                }
              >
                Barn og unge
              </a>
            </p>
            <p>
              <a
                href="/science"
                style={
                  router.pathname === '/science'
                    ? {
                        textDecoration: 'underline',
                        textDecorationColor: '#FFD526',
                      }
                    : { textDecoration: 'none' }
                }
              >
                Forskning
              </a>
            </p>
            <p>
              <a
                href="/about"
                style={
                  router.pathname === '/about'
                    ? {
                        textDecoration: 'underline',
                        textDecorationColor: '#FFD526',
                      }
                    : { textDecoration: 'none' }
                }
              >
                Om oss
              </a>
            </p>
            <p>
              <a
                href="/contact"
                style={
                  router.pathname === '/contact'
                    ? {
                        textDecoration: 'underline',
                        textDecorationColor: '#FFD526',
                      }
                    : { textDecoration: 'none' }
                }
              >
                Kontakt
              </a>
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
          id="animate"
          style={
            isExpanded ? { position: 'absolute' } : { position: 'relative' }
          }
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

export default Navbar;
