import CustomerReview from '../../components/customerReview/customerReviev';
import Layout from '../../layout/layout';
import { Reviews } from '../../utils/reviews';
import Courses from './courses/courses';
import FAQ from './faq/faq';
import LandingPage from './landingPage/landingPage';
import Quote from './quote/quote';
import Results from './results/results';
import ReviewsSection from './reviewsSection/reviewsSection';
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
        <ReviewsSection />
        <Courses />
        <FAQ />
      </Layout>
    </>
  );
};

export default Home;
