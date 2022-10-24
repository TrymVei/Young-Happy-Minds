import Interview from '../../../components/interview/interview';

const Trond = () => {
  const props = {
    name: 'Trond',
    age: 57,
    text: '"Takket være kurset lærte jeg meg å snu tenkemåten rundt utfordringer i hverdagen, noe som har gjort at jeg har fått en helt ny hverdag. Vil egentlig si at jeg har fått en ny start! Jeg bruker mange av Happy-Hacksene hver dag, selv med guttungen. "',

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

export default Trond;
