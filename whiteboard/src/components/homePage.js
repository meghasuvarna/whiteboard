import React from 'react';
import NavBar from "./NavBar";
import CourseNameHeader from "./CourseNameHeader";
let courses = require('../data.json');

export default class homePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { courses: courses } };



    selectCourse = (course) => this.setState({selectedCourse: course});

    render() {
        return (
            <div>
                <NavBar/>
                <CourseNameHeader courses={courses}/>
            </div>
        );
    }

}
