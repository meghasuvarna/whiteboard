import React from 'react';
import CourseCard from '../components/CourseCard';
import CourseRow from "../components/CourseRow";

let courses = require('../data.json');


const CourseGrid =({courses,selectCourse}) => {
    return(
        <div className="card-deck">
            {courses.map((course, key) => <CourseCard selectCourse={selectCourse} course={course} key={key}/>)}
        </div> )
}
export default  CourseGrid ;

