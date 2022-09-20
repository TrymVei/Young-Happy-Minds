import { Course } from '../../utils/types';

const CoursePrice = (props: { courses: Course[] }) => {
  return (
    <div>
      <h2>Våre kurs</h2>
      {props.courses.map((course) => {
        return (
          <div>
            <p>{course.title}</p>
            <p>{course.time}</p>
            <p>{course.shortDescription}</p>
            <p>
              Pris fra {course.priceRange[0]} til {course.priceRange[1]},-
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CoursePrice;
