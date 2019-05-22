import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import CourseGrid from './CourseGrid';
import CourseTable from './CourseTable'
import NavBar from '../components/NavBar'

let courses = require('../data.json');
console.log(courses[0]);

export default class WhiteBoard extends React.Component{


    constructor(props) {
        super(props);
        this.state = { selectedCourse: courses[0] } };



    selectCourse = (course) => this.setState({selectedCourse: course});

    render() {
        return <Router>
            <div>
                <NavBar/>
                <Link to="/course/table"> Table </Link>
                <Link to="/course/grid"> Grid </Link>
                <Route path="/course/table"
                       render={() => <CourseTable selectCourse={this.selectCourse} courses={courses}/>}/>
               <Route path="/course/grid"
                      render={ () => <CourseGrid  selectCourse={this.selectCourse} courses={courses}/>}/>
            </div>
        </Router>
    }
}