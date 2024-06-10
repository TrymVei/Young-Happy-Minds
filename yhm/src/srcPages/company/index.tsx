import Layout from "../../layout/layout";
import AboutCourse from "./aboutCourse/aboutCourse";
import Companies from "./companies/companies";
import Invest from "./invest/invest";
import PercentSection from "./percentSection/percentSection";
import Sun from "./sun/sun";

const Company = () => {
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
