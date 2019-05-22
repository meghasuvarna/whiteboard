import React from 'react';
import {BrowserRouter as Link} from "react-router-dom";


export default  class CourseRow extends React.Component {
    constructor(props){
        super(props);
        this.state= {} ;

    }
    render() {return <tr>
        <td>
            <Link to={`/course/edit/${this.props.course.id}`}>
                {this.props.course.title}
            </Link>
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
