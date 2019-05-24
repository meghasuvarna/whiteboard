import React from 'react';
import {BrowserRouter as Link} from "react-router-dom";
import ModuleListItem from '../components/ModuleListItem';
// mport Style from '../styles/style.css';

export default  class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            module : {
                id :-1,
                title: "New Module"


            },
            modules: this.props.modules
        };
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.valueChanged = this.valueChanged.bind(this);
    }

    createModule = () => {


            this.state.module.id = (new Date()).getTime();
            this.setState( {modules: [...this.state.modules, this.state.module]})
    }

    valueChanged = (event) => {

        this.setState( {module:  {id :(new Date()).getTime(),
            title: event.target.value}})
    }

    renderListOfModules = () => {

        return (this.state.modules)

    }

    deleteModule = (id) => {

        this.setState({
            modules: this.state.modules.filter(module => module.id !== id)
        })
    }


    render() {return ( <div className="container-fluid">
        <div className="wrapper" >
            <nav id="sidebar">

                <div className="sidebar-header">
                    <h3>Course Name</h3>
                </div>
                <div>





                </div>
                <ul className="list-group" >
                    { this.renderListOfModules().map((module) =>
                        <ModuleListItem
                            deleteModule = {this.deleteModule}
                            selectModule = {this.props.selectModule}
                            module={module}
                            key={module.id}/>)}
                    <li className="list-group-item bg-dark align-items-center">

                        <input defaultValue={this.state.module.title} onChange={this.valueChanged}
                               className="form-control form-control-lg col-lg-11 float-left"  height="10px" placeholder="Add new module">
                        </input>&nbsp;&nbsp;
                        <i className="fa fa-plus text-white align-content-center"onClick={this.createModule} aria-hidden="true"></i>

                    </li>
                </ul>

            </nav>




        </div>

    </div>)
    }
}
