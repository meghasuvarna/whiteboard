import React from 'react';
import {BrowserRouter as Link} from "react-router-dom";
import ModuleListItem from '../components/ModuleListItem';
// mport Style from '../styles/style.css';

export default  class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        // this.state = ({
        //     moduleId:
        // });
    }

    componentDidMount() {
    }


    render() {return ( <div className="container-fluid">
        <div className="wrapper">


            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Course Name</h3>
                </div>
                <ul className="list-group">
                    { this.props.modules.map((module, key) =>
                        <ModuleListItem
                            module={module}
                            key={key}/>)}
                </ul>

            </nav>




        </div>

    </div>)
    }
}
