import React from 'react';
import CourseCard from './CourseCard';
import Styles from '../styles/style.css';

let courses = require('../data.json');


const CourseGrid =({courses,selectCourse}) => {
    return(

        <div className="card-columns">

            {courses.map((course, key) => <CourseCard selectCourse={selectCourse} course={course} key={key}/>)}

        </div> )
}
export default  CourseGrid ;

