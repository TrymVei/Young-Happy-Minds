import Interview from '../../../components/interview/interview';

const Jan = () => {
  const props = {
    name: 'Jan',
    age: 51,
    text: '“Jeg trengte noen triks for å komme ut av «sumpen», og dette kurset har vært veldig bra! Jeg gledet meg til hver eneste modul. Innholdsrikt og morsomt. Det dere går gjennom på kurset skulle vært pensum på skolen!”',
    stars: 5,
  };

  return (
    <Interview
      name={props.name}
      age={props.age}
      text={props.text}
      stars={props.stars}
    />
  );
};

export default Jan;
