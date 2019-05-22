import React from 'react';
import CourseRow from '../components/CourseRow';


const CourseTable =({courses,selectCourse}) =>

    <table className="table">
        <thead className="thead-light">
        <tr>
            <th scope="col">Title</th>
            <th scope="col">Owned by</th>
            <th scope="col">Last modified by me</th>
            <th cope="col"/>
        </tr>
        </thead>
        <tbody>

        {courses.map((course,key) => <CourseRow  selectCourse={selectCourse} course={course} key={key}/>
        )}
        </tbody>

    </table>


export default CourseTable

// export default  class CourseTable extends React.Component{
//    render () {
//         return  <table className="table">
//             <tbody>
//
//             {courses.map((course,key) => <CourseRow course={course} key={key}/>
//             )}
//             </tbody>
//
//         </table>
//     }
// }

