export type Course = {
  title: string;
  time: string;
  priceRange: number[];
  shortDescription: string;
  description: CourseText;
};

export type CourseText = {
  sections: CourseSection[];
  listItems: CourseList[];
};

export type CourseSection = {
  heading: string;
  paragraph: string[];
};

export type CourseList = {
  heading: string;
  listItems: string[];
};
