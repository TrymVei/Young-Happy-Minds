import CoursePrice from '../../components/coursePrice/coursePrice';
import Interview from '../../components/interview/interview';
import Layout from '../../layout/layout';
import { YoungCourses } from '../../utils/courses';
import Future from './future/future';
import HappyHacks from './happyhacks/happyhacks';
import Ingress from './ingress/ingress';
import Trond from './Trond/Trond';

const KidsAndYoung = () => {
  const courses = YoungCourses();

  return (
    <Layout>
      <Ingress />
      <Future />
      <CoursePrice courses={courses} />
      <HappyHacks />
      <Trond />
    </Layout>
  );
};

export default KidsAndYoung;
