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
        console.log(this.props.topic)
        return ( <li className="nav-item">
            {this.state.isEditMode?

                <input type="text"
                       onChange={this.topicNameChanged} value={this.state.topic.title}>
                </input>
                :
                <div><a className="nav-link">
                    {this.state.topic.title}</a>
                </div>}
                <span className="float-right">
                                {
                                    this.state.isEditMode? <i className="fa fa-check" onClick={this.editTopic}/>:
                                        <i className="fa fa-pencil" onClick={this.editTopic}/>
                                }

                &nbsp;&nbsp;
                <i className="fa fa-times" onClick={() => this.props.deleteTopic(this.props.topic.id)} aria-hidden="true"/>
                </span></li>)

    }
            }


