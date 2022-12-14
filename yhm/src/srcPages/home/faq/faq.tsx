import Accordion from '../../../components/accordion/questionAccordion/accordion';
import style from './faq.module.css';

const FAQ = () => {
  return (
    <div id="section" className={style.faq}>
      <h2>Vanlige spørsmål</h2>
      <Accordion
        question={'Er dette kurset for meg?'}
        answer={
          'Ja! Alle kan ha nytte av kunnskapen om positiv psykologi. Vi holder kurs for både barn, skoler, foreldre, voksne og bedrifter. Vi fokuserer på å gjøre læringen interessant og inspirerende.'
        }
        id={'1'}
      />
      <Accordion
        question={'Hva er positiv psykologi?'}
        answer={
          'Ja! Alle kan ha nytte av kunnskapen om positiv psykologi. Vi holder kurs for både barn, skoler, foreldre, voksne og bedrifter. Vi fokuserer på å gjøre læringen interessant og inspirerende.'
        }
        id={'2'}
      />
      <Accordion
        question={'Hvor mye koster kursene?'}
        answer={
          'Ja! Alle kan ha nytte av kunnskapen om positiv psykologi. Vi holder kurs for både barn, skoler, foreldre, voksne og bedrifter. Vi fokuserer på å gjøre læringen interessant og inspirerende.'
        }
        id={'3'}
      />
      <Accordion
        question={'Kan dere komme til min bedrift/mitt event?'}
        answer={
          'Ja! Alle kan ha nytte av kunnskapen om positiv psykologi. Vi holder kurs for både barn, skoler, foreldre, voksne og bedrifter. Vi fokuserer på å gjøre læringen interessant og inspirerende.'
        }
        id={'4'}
      />
    </div>
  );
};

export default FAQ;
