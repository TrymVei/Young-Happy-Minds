import style from './associate.module.css';
const Associate = (props: { name: string; text: string }) => {
  const nameUrl = props.name.replaceAll(' ', '-');
  console.log(nameUrl);

  return (
    <div className={style.associate}>
      <img src={`/images/associate/${nameUrl}.png`} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p className="smallText">{props.text}</p>
      </div>
    </div>
  );
};

export default Associate;
