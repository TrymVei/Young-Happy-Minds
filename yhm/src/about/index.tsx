import Layout from '../layout/layout';
import style from './index.module.css';

const About = () => {
  const whiteBox = '/images/whiteBox.svg';
  return (
    <Layout>
      <div className={style.about}>
        <section>
          <div className={style.about__flex}>
            <div>
              <h2>Om oss</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus.
              </p>
              <p>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Praesent auctor purus luctus
                enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
                Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                bibendum lorem. Morbi convallis convallis diam sit amet lacinia.
                Aliquam in elementum tellus.
              </p>
            </div>
            <div>
              <img src="/images/about-image.svg" alt="" />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
