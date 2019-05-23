import React from 'react';
import CourseTable from "../container/CourseTable";
import CourseGrid from "../container/CourseGrid";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";


export default  class CourseNameHeader extends React.Component {
    constructor(props){
        super(props);
        this.state= { isHidden: false};

    this.handleToggle = this.handleToggle.bind(this);

    }

    handleToggle = () => {
        this.setState({isHidden: !this.state.isHidden});
    }

    render() {
        return(
<Router>
            <nav className="navbar navbar-dark bg-dark">

                <label className="navbar-brand float-left black" color="black" >
                    Title
                </label>
                <label className="navbar-brand float-left" >
                    Owned by
                    <span>
                        <i className="fa fa-angle-down" aria-hidden="true"/>
                    </span>
                </label>
                <label className="navbar-brand float-left" >
                    Last Modified by me
                </label>

                <div>
                    { this.state.isHidden ?  <Link to="/course/grid">
                            <button type="button" onClick = {this.handleToggle}>
                                <i className="fa fa-table" aria-hidden="true"/>
                            </button>
                        </Link> :
                <Link to="/course/table">
                <button type="button" onClick = {this.handleToggle}>
                    <i className="fa fa-list" aria-hidden="true"/>
                </button>
                </Link>}

                </div>

                <div>

                </div>

                <Route path="/course/table"
                       render={() => <CourseTable selectCourse={this.props.selectCourse} courses={this.props.courses}/>}/>
                <Route path="/course/grid"
                       render={ () => <CourseGrid  selectCourse={this.props.selectCourse} courses={this.props.courses}/>}/>

            </nav>
</Router>)
    }
}