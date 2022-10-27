import { useState } from 'react';
import { CourseText } from '../../../utils/types';
import style from './courseAccordion.module.css';
const CourseAcordion = (props: { courseText: CourseText; isOpen: boolean }) => {
  if (props.isOpen) {
    return (
      <div className={style.accordion}>
        {props.courseText.sections.map((section) => {
          return (
            <div className={style.accordion__text}>
              <h4>{section.heading}</h4>
              {section.paragraph.map((paragraph) => {
                return <p>{paragraph}</p>;
              })}
            </div>
          );
        })}
        {props.courseText.listItems.map((item) => {
          return (
            <div className={style.accordion__list}>
              <h4>{item.heading}</h4>
              {item.listItems.map((listItem) => {
                return (
                  <ul>
                    <li>{listItem}</li>
                  </ul>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  } else {
    return <></>;
  }
};

export default CourseAcordion;

export const changeState = () => {};
