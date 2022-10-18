import CoursePrice from '../../components/coursePrice/coursePrice';
import Interview from '../../components/interview/interview';
import Layout from '../../layout/layout';
import { YoungCourses } from '../../utils/courses';
import Future from './future/future';
import HappyHacks from './happyhacks/happyhacks';
import Ingress from './ingress/ingress';

const KidsAndYoung = () => {
  const courses = YoungCourses();

  return (
    <Layout>
      <Ingress />
      <Future />
      <CoursePrice courses={courses} />
      <HappyHacks />
      <Interview
        name={'Trond'}
        age={57}
        text={
          '"Takket være kurset lærte jeg meg å snu tenkemåten rundt utfordringer i hverdagen, noe som har gjort at jeg har fått en helt ny hverdag. Vil egentlig si at jeg har fått en ny start! Jeg bruker mange av Happy-Hacksene hver dag, selv med guttungen. "'
        }
        stars={5}
      />
    </Layout>
  );
};

export default KidsAndYoung;
