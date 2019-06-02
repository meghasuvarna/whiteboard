import React from 'react';
import styles from '../styles/style.css';



export default class ModuleListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isEditMode: false, module : this.props.module}
        this.editModule = this.editModule.bind(this);
        this.saveModule = this.saveModule.bind(this);
    }

    editModule = () => {
        this.setState({isEditMode: true})
    }
    saveModule = () => {

        this.setState({isEditMode: false}
        )
    }

    moduleNameChanged = (event) => {

        this.setState( {module:  {
                title: event.target.value}})

    }

    render() {
        return (


                <li className="list-group-item border-0">
                    <button type="button" className= {
                        this.props.selectedModule === this.props.module ?
                            "list-group-item active list-group-item-action" : "list-group-item list-group-item-action"
                    }
                            onClick={() => this.props.selectModule(this.props.module)}>
                        {this.state.isEditMode?

                            <input type="text" className="form-control"
                                       onChange={this.moduleNameChanged} value={this.state.module.title}>
                            </input>
                            :
                        <label className= "text-black">{this.state.module.title}</label>
                        }
                        <span className="float-right text-black">
                                {
                                    this.state.isEditMode? <i className="fa fa-check" onClick={this.saveModule}/>:
                                    <i className="fa fa-pencil" onClick={this.editModule}/>
                                }

                            &nbsp;&nbsp;
                            <span className="text-black">
                                <i className="fa fa-times" onClick={() => this.props.deleteModule(this.props.module.id)} aria-hidden="true"/>
                            </span>
                        </span>

                    </button>


                </li>


        )
    }
}



//onclick of pencil - change to text box and done icon
//on click of done take vaue from text box and display edit icon
