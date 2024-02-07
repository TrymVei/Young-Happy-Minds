import { Review } from "./types";

export const Reviews = () => {
  // const review1: Review = {
  //   name: 'Trond',
  //   age: 52,
  //   review:
  //     'Takket være kurset lærte jeg meg å snu tenkemåten rundt utfordringer i hverdagen, noe som har gjort at jeg har fått en helt ny hverdag. Vil egentlig si at jeg har fått en ny start! Jeg bruker mange av Happy-Hacksene hver dag, selv med guttungen. ',
  //   stars: 5,
  //   imgUrl: '/images/review/review-1.png',
  // };

  const review1: Review = {
    name: "Kristine",
    age: 43,
    review: [
      "Jeg jobber til daglig som psykolog og har en toårig videreutdanning i Kognitiv Idrettspsykologi. Jeg er opptatt av å bruke meg selv for å hjelpe andre til å ha det bra. Derfor er YHM og positiv psykologi midt i blinken for meg! Jeg bruker innslag av PP i terapitimer, hjemme med barna, og med meg selv. Etter noen utfordringer i livet har det vært bra med masse herlig input fra kurset.",
    ],
    stars: 5,
    imgUrl: "",
  };

  const review2: Review = {
    name: "Tonje",
    age: 35,
    review: [
      "Jeg digger materialet, stemningen og godfølelsen dette kurset har bidratt med. Det har vært positivt både for meg selv, barna mine, mann og andre jeg deler nye tankemønstre og oppdagelser med. ",
    ],
    stars: 5,
    imgUrl: "",
  };

  const review3: Review = {
    name: "Jan",
    age: 51,
    review: [
      "Jeg trengte noen triks for å komme ut av «sumpen», og dette kurset har vært veldig bra! Jeg gledet meg til hver eneste modul. Innholdsrikt og morsomt. Det dere går gjennom på kurset skulle vært pensum på skolen!",
    ],
    stars: 5,
    imgUrl: "",
  };

  const review4: Review = {
    name: "Øyvind",
    age: 41,
    review: [
      "Det jeg ikke var forberedt på var hvor nært jeg skulle bli fulgt opp og hvor tydelig jeg ville bli sett av kursholderne og de andre på kurset.",
      "Etter hvert som kurset gikk falt brikkene mer og mer på plass og jeg fikk utdelt både kart, kompass og en dose selvinnsikt som fikk meg til å huske hvem jeg er.",
      "Nå gleder jeg meg til å følge med på utviklingen i gruppa og lar meg gjerne bevege av deres reise.",
    ],
    stars: 5,
    imgUrl: "",
  };

  const reviews: Review[] = [review1, review2, review3, review4];

  return reviews;
};
