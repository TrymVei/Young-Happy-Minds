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
    title: 'Digitalt kurs for foreldre',
    time: '30 timer over 10 uker',
    price: 'Pris 5900,-',
    shortDescription:
      'Har du lyst til å gå fra passasjer til sjåfør i ditt eget liv? Invester i deg selv og lær hvordan du kan bli mer robust, mestre stress og oppleve mer livsglede i hverdagen. Dette kurset er for deg som ønsker verktøy for å snu ditt og dine barns negative tankemønstre, få mer energi og overskudd, bedre relasjoner, en tydeligere retning, mer mening, mestring og glede. Les mer',
    description: {
      sections: [courseSection1],
      listItems: [courseList1],
    },
    href: '/noe',
    imgUrl: '/images/course-young-1.png',
    id: '1',
    buttonText: 'Bestill kurs',
  };
  const course2: Course = {
    title: 'For barn og unge',
    time: 'Dagskurs, 4 timer',
    price: 'Ta kontakt  for mer onformasjon om priser',
    shortDescription:
      'Gjennom våre kurs blir barn og unge utstyrt med enkle, forskningsbaserte teknikker som fremmer glede og sosial og emosjonell kompetanse, som et fundament for øvrig læring. Teknikkene hjelper til med å styrke deres opplevelse av tilhørighet, trygghet, mestring, optimisme og hvordan man kan forholde seg til sine relasjoner på en positiv måte.',
    description: {
      sections: [courseSection2],
      listItems: [courseList2],
    },
    href: '/noe',
    imgUrl: '/images/course-young-2.png',
    id: '2',
    buttonText: 'Ta kontakt',
  };
  const course3: Course = {
    title: 'For deg som jobber med barn og unge',
    time: '',
    price: 'Pris fra 7900,- inkludert alt forarbeid (vi skreddersyr)',
    shortDescription:
      'Glad og Robust i skoler, på idrettsarenaen og SFO. Hvordan kan du som jobber med barn og unge stå mer stødig i møte med motgang? Og hvilke konkrete teknikker kan du bruke for å gi barna støtte til å mestre motgang og håndtere utfordringer?',
    description: {
      sections: [courseSection1],
      listItems: [courseList1],
    },
    href: '/noe',
    imgUrl: '/images/course-young-3.png',
    id: '3',
    buttonText: 'Ta kontakt',
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
