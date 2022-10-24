import CustomerReview from '../../components/customerReview/customerReviev';
import Layout from '../../layout/layout';
import { Reviews } from '../../utils/reviews';
import Companies from '../company/companies/companies';
import Courses from './courses/courses';
import FAQ from './faq/faq';
import Figures from './figures/figures';
import Jan from './jan/jan';
import LandingPage from './landingPage/landingPage';
import PositivePsychology from './positivePsychology/positivePsychology';
import Quote from './quote/quote';
import Results from './results/results';
import ReviewsSection from './reviewsSection/reviewsSection';
import Science from './science/science';
import WhoAreWe from './whoAreWe/whoAreWe';

const Home = () => {
  return (
    <Layout>
      <LandingPage />
      <PositivePsychology />
      <Courses />
      <Figures />
      <Science />
      <Results />
      <Companies />
      <Jan />
    </Layout>
  );
};

export default Home;
