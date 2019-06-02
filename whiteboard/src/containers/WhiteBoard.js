import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import CourseGrid from '../components/CourseGrid';
import CourseTable from '../components/CourseTable'
import CourseRow from '../components/CourseTable'
import NavBar from '../components/NavBar'
import  CourseNameHeader from '../components/CourseNameHeader'
import CourseEditor from "../components/CourseEditor";
import homePage from '../components/homePage';

export default class WhiteBoard extends React.Component{

    render() {
        return (
            <div>

                <Router>
                <Switch>
                    <Route exact path = "/" component = {homePage} />
                    <Route path={`/edit/:courseId`}
                           component ={CourseEditor}/>
                </Switch>
                </Router>

            </div>)

    }
}