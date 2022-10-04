import { Review } from './types';

export const Reviews = () => {
  const review1: Review = {
    name: 'Trond',
    age: 52,
    review:
      'Takket være kurset lærte jeg meg å snu tenkemåten rundt utfordringer i hverdagen, noe som har gjort at jeg har fått en helt ny hverdag. Vil egentlig si at jeg har fått en ny start! Jeg bruker mange av Happy-Hacksene hver dag, selv med guttungen. ',
    stars: 5,
    imgUrl: '/images/review/review-1.png',
  };

  const reviews: Review[] = [review1];

  return reviews;
};
