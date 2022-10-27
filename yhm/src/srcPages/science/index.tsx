import Layout from '../../layout/layout';
import Quote2 from '../kidsAndYoung/quote2/quote2';
import LearnMore from './learnMore/learnMore';
import OurMethod from './ourMethod/ourMethod';
import Perma from './perma/perma';
import Quote from './quote/quote';
import WhatIsPositivePsychology from './whatIsPositivePsychology/whatIsPositivePsychology';

const Science = () => {
  return (
    <Layout>
      <WhatIsPositivePsychology />
      <OurMethod />
      <Quote2 />
      <Perma />
      <Quote />
      <LearnMore />
    </Layout>
  );
};

export default Science;
