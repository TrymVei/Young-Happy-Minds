import CoursePrice from '../../components/coursePrice/coursePrice';
import Layout from '../../layout/layout';
import { Course } from '../../utils/types';
import Ingress from './ingress/ingress';

const KidsAndYoung = () => {
  const course1: Course = {
    title: 'For barn og unge',
    time: 'Dagskurs, 4 timer',
    priceRange: [0, 0],
    shortDescription:
      'Dette er et engasjerende og interaktivt kurs som gir effektive verktøy og metoder for å oppnå økt trivsel, velvære og mer glede. Vi gir en introduksjon i vitenskapen bak lykke, med positiv psykologi som teoretisk rammeverk - på en leken, lærerik måte.',
    description: '',
  };
  const course2: Course = {
    title: 'For deg som jobber med barn og unge',
    time: '',
    priceRange: [0, 0],
    shortDescription:
      'Vi tilpasser en kursplan til din bedrift basert på deres behov. Dette gjøres over mail.',
    description: '',
  };
  const course3: Course = {
    title: 'Foreldre',
    time: '30 timer over 10 uker',
    priceRange: [0, 0],
    shortDescription:
      'Kurset gir en grundig gjennomgang av positiv psykologi, og tar for seg bruk og effekten av positiv psykologi i en arbeidskontekst. Deltakerne får flere verktøy de kan ta i bruk, samt personlig oppfølging underveis.',
    description: '',
  };

  const courses = [course1, course2, course3];

  return (
    <Layout>
      <Ingress />
      <CoursePrice courses={courses} />
    </Layout>
  );
};

export default KidsAndYoung;