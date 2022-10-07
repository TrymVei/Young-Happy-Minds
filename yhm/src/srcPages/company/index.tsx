import CoursePrice from '../../components/coursePrice/coursePrice';
import Layout from '../../layout/layout';
import CourseCompany from '../../utils/courseCompany';
import Companies from './companies/companies';
import Future from './future/future';
import Invest from './invest/invest';
import PercentSection from './percentSection/percentSection';
import Quote from './quote/quote';

const Company = () => {
  const courses = CourseCompany();
  return (
    <Layout>
      <Invest />
      <Companies />
      <PercentSection />
      <Future />
      <CoursePrice courses={courses} />
      <Quote />
    </Layout>
  );
};

export default Company;
