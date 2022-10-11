import Layout from '../../layout/layout';
import Buy from './buy/buy';
import ImgSection from './imgSection/imgSection';
import Landing from './landing/landing';
import ReviewSection from './reviewSection/reviewSection';
import Sun from './sun/sun';

const OnlineCourse = () => {
  return (
    <Layout>
      <Landing />
      <ImgSection />
      <ReviewSection />
      <Buy />
    </Layout>
  );
};

export default OnlineCourse;
