import React from 'react';
import {BrowserRouter as Link} from "react-router-dom";


export default  class TopicPills extends React.Component {
    constructor(props){
        super(props);
        this.state= {} ;

    }
    render() {
        return(
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                </li>
            </ul>
        )
    }
}