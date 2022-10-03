export type Course = {
  title: string;
  time: string;
  price: string;
  shortDescription: string;
  description: CourseText;
  href: string;
  imgUrl: string;
  id: string;
  buttonText: string;
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

export interface Props {
  children: React.ReactNode;
}
