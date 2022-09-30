import CoursePrice from '../../components/coursePrice/coursePrice';
import Layout from '../../layout/layout';
import { Course, CourseList, CourseSection } from '../../utils/types';
import Ingress from './ingress/ingress';

const courseSection1: CourseSection = {
  heading: 'test',
  paragraph: ['string1', 'string2'],
};

const courseList1: CourseList = {
  heading: '',
  listItems: ['1', '2', '3'],
};

const courseSection2: CourseSection = {
  heading: '',
  paragraph: [
    'Gjennom våre kurs blir barn og unge utstyrt med enkle, forskningsbaserte teknikker som fremmer glede og sosial og emosjonell kompetanse, som et fundament for øvrig læring. Teknikkene hjelper til med å styrke deres opplevelse av tilhørighet, trygghet, mestring, optimisme og hvordan man kan forholde seg til sine relasjoner på en positiv måte. ',
    'Vi tilbyr både fysiske- og digitale kurs og vil tilby ulike pakker etter behov. Her er eksempler på innhold i modulene. ',
  ],
};

const courseList2: CourseList = {
  heading: '',
  listItems: [
    'Modul 1 - Introduksjon til kurs og positiv psykologi',
    'Modul 2- Misoppfatninger og sannheter om glede',
    'Modul 3 - Hvordan ha mer positive følelser',
    'Modul 4 - Få økt optimisme og oppmerksomt nærvær',
    'Modul 5 - Overskudd til engasjement og flyt',
    'Modul 6 - Finn dine styrker og styrk dine relasjoner',
    'Modul 7 - Relasjonsbygging og kommunikasjon',
    'Modul 8 - Hvordan skape mer mening i hverdagen,og hva er dine verdier?',
    'Modul 9 - Hvordan prioritere din tid?',
    'Modul 10 - Se sammenhengene i kurset, hva er ditt motivasjonsområde og hva betyr vitalitet for din livskvalitet?',
    'Modul 11 - Hvordan oppleve mer mestring',
    'Modul 12 - Personlig målsetting og liftoff!',
  ],
};

const KidsAndYoung = () => {
  const course1: Course = {
    title: 'For barn og unge',
    time: 'Dagskurs, 4 timer',
    priceRange: [0, 0],
    shortDescription:
      'Dette er et engasjerende og interaktivt kurs som gir effektive verktøy og metoder for å oppnå økt trivsel, velvære og mer glede. Vi gir en introduksjon i vitenskapen bak lykke, med positiv psykologi som teoretisk rammeverk - på en leken, lærerik måte.',
    description: {
      sections: [courseSection1],
      listItems: [courseList1],
    },
    href: '/noe',
  };
  const course2: Course = {
    title: 'For barn og unge',
    time: 'Dagskurs, 4 timer',
    priceRange: [0, 0],
    shortDescription:
      'Gjennom våre kurs blir barn og unge utstyrt med enkle, forskningsbaserte teknikker som fremmer glede og sosial og emosjonell kompetanse, som et fundament for øvrig læring. Teknikkene hjelper til med å styrke deres opplevelse av tilhørighet, trygghet, mestring, optimisme og hvordan man kan forholde seg til sine relasjoner på en positiv måte.',
    description: {
      sections: [courseSection2],
      listItems: [courseList2],
    },
    href: '/noe',
  };
  const course3: Course = {
    title: 'Foreldre',
    time: '30 timer over 10 uker',
    priceRange: [0, 0],
    shortDescription:
      'Kurset gir en grundig gjennomgang av positiv psykologi, og tar for seg bruk og effekten av positiv psykologi i en arbeidskontekst. Deltakerne får flere verktøy de kan ta i bruk, samt personlig oppfølging underveis.',
    description: {
      sections: [courseSection1],
      listItems: [courseList1],
    },
    href: '/noe',
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
