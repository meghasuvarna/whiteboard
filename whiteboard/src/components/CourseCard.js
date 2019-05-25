import React from 'react';
import {BrowserRouter as Link} from "react-router-dom";
import Styles from '../styles/style.css';


export default  class CourseCard extends React.Component {
    constructor(props){
        super(props);
        this.state= {} ;

    }

    render() { return <div className="card">
        <img className="card-img-top" src="https://picsum.photos/300/200"/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Card text.</p>
            <Link className="btn btn-primary"
                  to={`/course/edit/${this.props.id}`}>More...</Link>
        </div>

    </div>

    }
}