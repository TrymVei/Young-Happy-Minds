import CoursePrice from '../../components/coursePrice/coursePrice';
import Layout from '../../layout/layout';
import { Course, CourseList, CourseSection } from '../../utils/types';
import Companies from './companies/companies';
import Future from './future/future';
import Invest from './invest/invest';
import PercentSection from './percentSection/percentSection';
import Quote from './quote/quote';

const courseSection1: CourseSection = {
  heading: 'test',
  paragraph: ['string1', 'string2'],
};

const courseList1: CourseList = {
  heading: 'heading1',
  listItems: ['1', '2', '3'],
};

const course1: Course = {
  title: 'Liten kurspakke',
  time: '6 timer over 2 kursdager',
  price: '0',
  shortDescription:
    'Kurset gir en introduksjon til positiv psykologi, og tar for seg de viktigste aspektene ved positiv psykologi i en arbeidskontekst. Deltagerene får verktøy de kan ',
  description: {
    sections: [courseSection1],
    listItems: [courseList1],
  },
  href: '/Liten',
  id: '1',
  buttonText: 'bestill kurs',
  imgUrl: '',
};

const course2: Course = {
  title: 'Stor Kurspakke',
  time: '30 timer over 10 uker',
  price: '0',
  shortDescription:
    'Kurset gir en grundig gjennomgang av positiv psykologi, og tar for seg bruk og effekten av positiv psykologi i en arbeidskontekst. Deltakerne får flere verktøy de kan ta i bruk, samt personlig oppfølging underveis.',
  description: {
    sections: [courseSection1],
    listItems: [courseList1],
  },
  href: '/stor',
  id: '2',
  buttonText: 'bestill kurs',
  imgUrl: '',
};

const course3: Course = {
  title: 'Fleksibel kurspakke',
  time: '',
  price: '0',
  shortDescription:
    'Vi tilpasser en kursplan basert på din bedrifts behov.  Lengde og antall moduler kan vi diskutere sammen.',
  description: {
    sections: [courseSection1],
    listItems: [courseList1],
  },
  href: '/Fleksibel',
  id: '3',
  buttonText: 'bestill kurs',
  imgUrl: '',
};

const courses = [course1, course2, course3];

const Company = () => {
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
