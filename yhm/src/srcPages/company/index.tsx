import CoursePrice from '../../components/coursePrice/coursePrice';
import Layout from '../../layout/layout';
import CourseCompany from '../../utils/courseCompany';
import AboutCourse from './aboutCourse/aboutCourse';
import Companies from './companies/companies';
import Invest from './invest/invest';
import PercentSection from './percentSection/percentSection';
import Quote from './quote/quote';
import Sun from './sun/sun';

const Company = () => {
  const courses = CourseCompany();
  return (
    <Layout>
      <Invest />
      <Companies />
      <PercentSection />
      <Sun />
      <AboutCourse />
    </Layout>
  );
};

export default Company;
