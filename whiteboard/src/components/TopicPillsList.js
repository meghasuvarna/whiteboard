import React from 'react';
import {BrowserRouter as Link} from "react-router-dom";

export default  class TopicPillsList extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            topic: this.props.topic,
            isEditMode: false
        };
        this.editTopic = this.editTopic.bind(this);
        this.topicNameChanged = this.topicNameChanged.bind(this);


    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(this.props.topic != nextProps.topic) {
            this.setState({topic: nextProps.topic})
        }


    }


    topicNameChanged = (event) => {
        this.setState( {topic:  {
                title: event.target.value}})

    }



    editTopic= () => {
        this.setState({isEditMode: !this.state.isEditMode})
    }



    render() {
        return ( <li className="nav-item">
            {this.state.isEditMode?
                <span className="d-inline-block">
                <input type="text" className="form-control"
                       onChange={this.topicNameChanged} value={this.state.topic.title}>
                </input>
                    &nbsp;
                    <i className="fa fa-check" onClick={this.editTopic} />

                </span>
                :
                <div><span className="nav-link">
                    {this.state.topic.title}
                    &nbsp;&nbsp;
                    <span className="float-right">
                                {
                                        <i className="fa fa-pencil" onClick={this.editTopic}/>
                                }

                        &nbsp;&nbsp;
                        <i className="fa fa-times" onClick={() => this.props.deleteTopic(this.props.topic.id)} aria-hidden="true"/>
                </span></span>
                </div>}
               </li>)

    }
            }


