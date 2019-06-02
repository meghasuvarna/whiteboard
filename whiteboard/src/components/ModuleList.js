import React from 'react';
import ModuleListItem from '../components/ModuleListItem';

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

                <div className="sidebar-header" style={{"paddingTop": "2rem"}}>
                    <h3>Course Name</h3>
                </div>
                <div>





                </div>
                <ul className="list-group"  >
                    { this.renderListOfModules().map((module) =>
                        <ModuleListItem
                            deleteModule = {this.deleteModule}
                            selectModule = {this.props.selectModule}
                            selectedModule = {this.props.selectedModule}
                            module={module}
                            key={module.id}/>)}
                    <li className="list-group-item bg-white" style={{"paddingRight": "0px"}}>

                        <input defaultValue={this.state.module.title} onChange={this.valueChanged}
                               className="form-control form-control-lg col-lg-11 float-left"  height="10px" placeholder="Add new module">
                        </input>&nbsp;&nbsp;
                        <span>
                        <i className="fa fa-plus fa-2x  align-content-center" style={{"color":"black","paddingTop": "10px"}} onClick={this.createModule} aria-hidden="true"/>
                        </span>

                    </li>
                </ul>

            </nav>




        </div>

    </div>)
    }
}
