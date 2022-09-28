import Layout from '../../layout/layout';
import Associates from './associate/associates';
import Ingress from './ingress/ingress';
import Karina from './karina/karina';
import Martine from './martine/martine';

const About = () => {
  return (
    <Layout>
      <Ingress />
      <Karina />
      <Martine />
      <Associates />
    </Layout>
  );
};

export default About;
