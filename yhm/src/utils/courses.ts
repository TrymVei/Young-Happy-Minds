import { Course, CourseList, CourseSection } from './types';

export const YoungCourses = () => {
  const course1Section: CourseSection = {
    heading: '',
    paragraph: [
      'I våre kurs får du nettopp teori og konkrete verktøy for hvordan du kan lære mer effektivt, oppleve mer mestring og glede og utvikle ditt og andres potensial - både i motgang og i medgang. Du vil gjennom 3 måneder motta en rekke lekne og enkle utfordringer som er laget for å øke ditt grunnleggende nivå av lykke og hjelpe deg med å bygge bedre og mer produktive vaner. ',
    ],
  };

  const course1ListItem1: CourseList = {
    heading: 'Deltakere som har vært gjennom programmet sier de opplever:',
    listItems: [
      'Økt livsglede',
      'Mer engasjement',
      'Tydeligere retning i livet',
      'Mer robusthet til å takle motgang',
      'Forskning og verktøy som gir økt vitalitet og bedre helse',
      'Bedre relasjoner',
      'En mer positiv hverdag',
      'En større forståelse for og eierskap til egne styrker',
      'Mer klarhet i egne verdier og hvordan man kan bruke disse som styringsverktøy',
      'Verktøy for å skape en trygg og robust ramme for barna',
      'Verktøy som kan hjelpe til økt produktivitet og mestring profesjonelt',
      'Et vitenskapelig fundament innen positiv psykologi',
      'Flere verktøy for å sette seg mål og å nå disse',
      'Strategier og verktøy for å kunne oppnå varig endring',
    ],
  };
  const course1ListItem2: CourseList = {
    heading: 'Du får:',
    listItems: [
      'Pre og post-test som gir deg mulighet til å måle effekt',
      '12 kursmoduler a ca 1 time, brukket ned i 48 leksjoner',
      'Tilgang til kurset ett helt år',
      'Ukentlige videoer og innhold som hjelper deg til å bli mer robust og få økt livsglede',
      'Ca. 40 lekne og effektive verktøy "Happy Hacks" til nedlasting til bruk både privat og profesjonelt',
      '100% digitalt o g dermed fleksibelt for deg og din kalender',
      '6 x LIVE gruppe-coaching "Happy Hour" sammen med andre kursdeltakere',
      'Medlemskap i lukket FB-gruppe med inspirasjon, støtte og oppmuntring',
    ],
  };

  const course1: Course = {
    title: 'Digitalt kurs for foreldre',
    time: '30 timer over 10 uker',
    price: 'Pris 5900,-',
    shortDescription: [
      'Har du lyst til å gå fra passasjer til sjåfør i ditt eget liv? Invester i deg selv og lær hvordan du kan bli mer robust, mestre stress og oppleve mer livsglede i hverdagen. Dette kurset er for deg som ønsker verktøy for å snu ditt og dine barns negative tankemønstre, få mer energi og overskudd, bedre relasjoner, en tydeligere retning, mer mening, mestring og glede.',
    ],
    description: {
      sections: [course1Section],
      listItems: [course1ListItem1, course1ListItem2],
    },
    href: 'https://kurs.younghappyminds.no/purchase/119420-Young-Happy-Minds-et-interaktivt-kurs-i',
    imgUrl: '/images/course-young-1.png',
    id: '1',
    buttonText: 'Bestill kurs',
  };

  const course2Section: CourseSection = {
    heading: '',
    paragraph: [
      'Vi tilbyr både fysiske- og digitale kurs og vil tilby ulike pakker etter behov. Her er eksempler på innhold i modulene. ',
    ],
  };

  const course2ListItem1: CourseList = {
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

  const course2: Course = {
    title: 'For barn og unge',
    time: 'Dagskurs, 4 timer',
    price: 'Ta kontakt for mer informasjon og priser ',
    shortDescription: [
      'Gjennom våre kurs blir barn og unge utstyrt med enkle, forskningsbaserte teknikker som fremmer glede og sosial og emosjonell kompetanse, som et fundament for øvrig læring. Teknikkene hjelper til med å styrke deres opplevelse av tilhørighet, trygghet, mestring, optimisme og hvordan man kan forholde seg til sine relasjoner på en positiv måte. ',
    ],
    description: {
      sections: [course2Section],
      listItems: [course2ListItem1],
    },
    href: 'mailto:contact@younghappyminds.com',
    imgUrl: '/images/course-young-2.png',
    id: '2',
    buttonText: 'kontakt',
  };

  const course3Section: CourseSection = {
    heading: '',
    paragraph: [
      'Young Happy Mind tilbyr kurs i livsmestring i tråd med den nasjonale rammeplanen og du vil få mange enkle og forskningsbaserte verktøy som fremmer mental helse og gir deg og barna du jobber med: Økt Trygghet, Trivsel og Glede',
    ],
  };

  const course3ListItem: CourseList = {
    heading: '',
    listItems: [
      'Modul 1 - Robust og Glad  - Hva gjør positive følelser med oss og hvordan kan vi ha mer av de?',
      'Modul 2 - Hvordan mestre motgang og håndtere utfordringer gjennom fokus på styrker?',
      'Modul 3 - Hvordan skape gode relasjoner og fremme inkludering?',
      'Modul 4 - Hvordan fremme økt nysgjerrighet, utforskertrang og mestringsfølelse?',
    ],
  };

  const course3ListItem2: CourseList = {
    heading: 'Per modul får du:',
    listItems: [
      '3 timer interaktivt kurs',
      '5 nedlastingsbare og lekne "Happy Hacks" som du kan bruke individuelt, med dine kollegaer og med barna',
    ],
  };

  const course3: Course = {
    title: 'For deg som jobber med barn og unge',
    time: '',
    price: 'Pris fra 7900,- inkludert alt forarbeid (vi skreddersyr)  ',
    shortDescription: [
      'Glad og Robust i skoler, på idrettsarenaen og SFO. Hvordan kan du som jobber med barn og unge stå mer stødig i møte med motgang? Og hvilke konkrete teknikker kan du bruke for å gi barna støtte til å mestre motgang og håndtere utfordringer?',
    ],
    description: {
      sections: [course3Section],
      listItems: [course3ListItem, course3ListItem2],
    },
    href: 'mailto:contact@younghappyminds.com',
    imgUrl: '/images/course-young-3.png',
    id: '3',
    buttonText: 'kontakt',
  };

  const courses: Course[] = [course1, course2, course3];

  return courses;
};
