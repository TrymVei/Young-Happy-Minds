import Layout from '../../layout/layout';
import Courses from './courses/courses';
import FAQ from './faq/faq';
import LandingPage from './landingPage/landingPage';
import Quote from './quote/quote';
import Results from './results/results';
import Science from './science/science';
import WhoAreWe from './whoAreWe/whoAreWe';

const Home = () => {
  return (
    <>
      <Layout>
        <LandingPage />
        <Science />
        <Results />
        <Quote />
        <WhoAreWe />
        <Courses />
        <FAQ />
      </Layout>
    </>
  );
};

export default Home;
