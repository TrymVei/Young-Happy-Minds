import Associate from '../../../components/associate/associate';
import style from './associates.module.css';

const Associates = () => {
  return (
    <div className={style.associates}>
      <div className={style.associates__wrapper}>
        <h3>Dette er oss</h3>
        <Associate
          name={'Karina Hollekim'}
          text={
            'Karina var tidligere en av verdens beste frikjørere på ski og en anerkjent basehopper, men så ble alt snudd på hodet når fallskjermen tvinner seg og hun i fritt fall traff bakken. Hun overlevde fallet på mirakuløst vis, og selv om hun ble «dømt» til et liv i rullestol har hun kommet tilbake mot alle odds gjennom systematisk bruk av teknikkene i positiv psykologi som hun brenner for å dele videre. Karina er utdannet innen Neuro Linguistic Programming, Acceptance and Commitment Therapy og CTI coaching. Hun har i tillegg skrevet bok og brenner for å dele av sine erfaringer til barn og voksne.'
          }
        />
        <Associate
          name={'Martine Kveim'}
          text={
            'Martine har utdannelse innen psykologi fra University of San Francisco og kommunikasjon og ledelse fra University of Westminister og fra THNK School of Creative Leadership i Amsterdam. Hun elsker å formidle teori og konkrete verktøy som fremmer engasjement, glede og robusthet og det store kunnskapsgapet mellom forskning og samfunnet, var en av hovedmotivasjonene for at Young Happy Minds ble stiftet av Martine Kveim og Yvonne Biggins. Martine bruker selv teknikkene daglig både som kollega, individ, partner og mamma.'
          }
        />
        <Associate
          name={'Yvonne Biggins'}
          text={
            'Sammen med Martine Kveim startet Yvonne Young Happy Minds i England og ledet den opprinnelige utviklingen av organisasjonen. Hun er utdannet lærer, jobbet med utdanning for Apple og har også fullført sin mastergrad i “Applied Positive Psychology” fra University of Pennsylvania hvor hun ble undervist av de fremste forskerne innen positive psykologi, inkludert Martin Seligman og Angela Duckworth.'
          }
        />

        <Associate
          name={'Adrian Bethune'}
          text={
            'Adrian er en engasjert og dedikert grunnskolelærer og forfatter av "Wellbeing in the Primary Classroom: A practical guide to teaching happiness". Hans pedagogikk er fokusert på å utvikle barns robusthet og glede, samtidig som de presterer på sitt beste akademisk. Adrian mener at barns utdanning bør legges til rette slik at de kan bli ansvarlige, glade og utholdende i møte med motgang.'
          }
        />
        <Associate
          name={'Sam Martin'}
          text={
            'Sam brukte positiv psykologi for å “hacke seg” til beste karakterer på Cambridge University, til en grad i psykologi og sosiologi. Han jobber til daglig med ledelsesutvikling av unge profesjonelle og har erfaring innen Talent Management med Atos, Executive Search hos Moloney Search. Sam er også grunnleggeren av Smart Choice Student Support som lærer studenter og unge fagfolk hvordan de med hell kan anvende prinsipper fra positiv psykologi i studietilnærmingen og navigeringen av karrieren.'
          }
        />
        <Associate
          name={'Sophie Conijn'}
          text={
            'Sophie studerte barnepsykologi ved Universitetet i Utrecht og positiv psykologi med Tal Ben Shahar ved “The Wholebeing Institute of  USA”. Hun deler tiden sin mellom midlertidige HR prosjekter for organisasjoner som McKinsey & Company og å hjelpe studenter og unge fagfolk til å oppdage talentene deres når de velger en (ny) karriere. Hovedsakelig håper hun å inspirere mange barn til å leve livet sitt fra et positivt perspektiv!'
          }
        />
        <Associate
          name={'Kristin Aaserrudsæter'}
          text={
            'Psykolog autorisert fra Universitetet i Oslo i 2007, med spesialistutdanning fra Norsk Psykologforening. Hun er videreutdanning innen kognitiv idretts-psykologi, traumefokusert kognitiv atferdsterapi og er sertifisert COS-P og som MST-terapeut. Kristin jobber til daglig med ungdom og har jobbet med multisystemisk terapi for ungdom, som distriktspsykolog, Skolepsykolog og BUP (Barne- og ungdomspsykiatrisk poliklinikk).'
          }
        />
        <Associate
          name={'Tonje Frøystad Garvik'}
          text={
            'Tonje jobber i maritim industri og har en mastergrad i organisasjonspsykologi, ledelse og forretningsstrategi. Hun er opptatt av endringsledelse, innovasjon og å øke intern kulturell forståelse gjennom å forstå seg selv, egne verdier og hvorfor vi reagerer som vi gjør. Tonje er sertifisert trener i positiv psykologi gjennom Young Happy Minds og har nylig gitt ut boken “Skeiv - den indre kampen ”, en bok om skam, frykt og følelser.  '
          }
        />
        <Associate
          name={'Cecilie Prebensen'}
          text={
            'Med mastergrad i internasjonal menneskerettighets-rett fra University of Oxford, ledet Cecilie et nasjonalt prosjekt om livsmestring og ungdomsmedvirkning. Hun var koordinator for Barnas rapport til FNs barnekomité i 2017 og var tidligere CSR-sjef og leder for næringssamarbeid og inntektsbringende partnerskap for Norges Røde Kors.'
          }
        />
        <Associate
          name={'Tone Mari Bjørneng'}
          text={
            'Tone Mari er barnevernspedagog og har over 30 års erfaring fra arbeid med barn og unge i alle aldre - i barnehage, skole og høyskole. Hun har utviklet og levert pedagogisk lærerutdanning for førskolelærere og var en pionér i å bringe meditasjon til Norge. Hun har blant annet etablert det første Ascencion-meditasjonssenteret i Oslo.'
          }
        />
        <Associate
          name={'Siri Warren'}
          text={
            'Siri er en innovasjonsrådgiver som bistår og gir råd til bedrifter og gründere som utvikler og driver frem løsninger på samfunnsutfordringer. Hun er dedikert til å hjelpe organisasjoner med å designe virksomheten sin på en måte som inspirerer og begeistrer. Hun gjør lineære innovasjonsprosesser mer utforskende og iterative, og bringer inn lek, moro og overraskelse. Som industridesigner verdsetter hun en estetisk tilnærming til prosessen. Hun liker at resultatene blir håndgripelige og implementerbare. Siri er også professor ved THNK School of Creative Leadership.'
          }
        />
      </div>
    </div>
  );
};

export default Associates;
