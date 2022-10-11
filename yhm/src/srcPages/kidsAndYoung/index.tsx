import CoursePrice from '../../components/coursePrice/coursePrice';
import Layout from '../../layout/layout';
import { YoungCourses } from '../../utils/courses';
import Future from './future/future';
import Ingress from './ingress/ingress';

const KidsAndYoung = () => {
  const courses = YoungCourses();

  return (
    <Layout>
      <Ingress />
      <Future />
      <CoursePrice courses={courses} />
    </Layout>
  );
};

export default KidsAndYoung;
