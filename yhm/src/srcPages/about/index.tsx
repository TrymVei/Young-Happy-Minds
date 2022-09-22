import Layout from '../../layout/layout';
import Ingress from './ingress/ingress';
import Karina from './karina/karina';
import Martine from './martine/martine';

const About = () => {
  return (
    <Layout>
      <Ingress />
      <Karina />
      <Martine />
    </Layout>
  );
};

export default About;
