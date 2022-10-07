import { Course, CourseList, CourseSection } from './types';

const CourseCompany = () => {
  const courseSection1: CourseSection = {
    heading: 'test',
    paragraph: ['string1', 'string2'],
  };

  const courseList1: CourseList = {
    heading: 'heading1',
    listItems: ['1', '2', '3'],
  };

  const course1: Course = {
    title: 'Bedriftskurs for ledere og medarbeidere',
    time: 'Varighet: tilpasses etter ønske',
    price:
      'Vi skreddersyr ulike pakker - Ta kontakt for mer informasjon og priser ',
    shortDescription: [
      'Optimaliser effekten av å bygge på det som er bra, i stedet for å fikse det som er feil.',
      'Hvordan bygger man organisatorisk og individuell glede, robusthet og utholdenhet? Og hva er er sammenhengen mellom medarbeiderengasjement, glede og prestasjon?',
      'Gjennom kurset og våre interaktive foredrag får ledere og medarbeidere en introduksjon i teori og praksis innen moderne positiv psykologi. Hensikten er å styrke den emosjonelle utholdenheten og få innsikt og verktøy som kan gjøre oss mer robuste i møte med motgang, slik at vi også kan prestere bedre i samspill med andre.',
    ],

    description: {
      sections: [courseSection1],
      listItems: [courseList1],
    },
    href: '/Liten',
    id: '1',
    buttonText: 'bestill kurs',
    imgUrl: '/images/course-4.png',
  };

  return [course1];
};

export default CourseCompany;
