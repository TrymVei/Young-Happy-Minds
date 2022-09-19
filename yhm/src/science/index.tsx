import Layout from '../layout/layout';
import LearnMore from './learnMore/learnMore';
import OurMethod from './ourMethod/ourMethod';
import Perma from './perma/perma';
import Quote from './quote/quote';
import WhatIsPositivePsychology from './whatIsPositivePsychology/whatIsPositivePsychology';

const Science = () => {
  return (
    <Layout>
      <WhatIsPositivePsychology />
      <Perma />
      <OurMethod />
      <Quote />
      <LearnMore />
    </Layout>
  );
};

export default Science;
