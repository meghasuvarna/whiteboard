import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import CourseTable from "../container/CourseTable";


export default  class CourseRow extends React.Component {
    constructor(props){
        super(props);
        this.state= {};

    }
    render() {return <tr>
        <td>

            <a href ={`/edit/${this.props.course.id}`}>
                {this.props.course.title}
            </a>

        </td>
        <td>
            Me
        </td>
        <td>
        </td>
        <td>
            <i className="fa fa-trash"></i>

        </td>

    </tr>
    }
}
