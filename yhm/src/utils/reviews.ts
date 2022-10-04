import { Review } from './types';

export const Reviews = () => {
  const review1: Review = {
    name: 'Trond',
    age: 52,
    review:
      'Takket være kurset lærte jeg meg å snu tenkemåten rundt utfordringer i hverdagen, noe som har gjort at jeg har fått en helt ny hverdag. Vil egentlig si at jeg har fått en ny start! Jeg bruker mange av Happy-Hacksene hver dag, selv med guttungen. ',
    stars: 5,
    date: '00.00.00',
  };

  const review2: Review = {
    name: 'Trond',
    age: 52,
    review:
      'Takket være kurset lærte jeg meg å snu tenkemåten rundt utfordringer i hverdagen, noe som har gjort at jeg har fått en helt ny hverdag. Vil egentlig si at jeg har fått en ny start! Jeg bruker mange av Happy-Hacksene hver dag, selv med guttungen. ',
    stars: 5,
    date: '00.00.00',
  };

  const reviews: Review[] = [];
  reviews.push(review1);
  reviews.push(review2);

  return reviews;
};
