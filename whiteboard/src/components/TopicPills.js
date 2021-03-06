import React from 'react';
import TopicPillsList from '../components/TopicPillsList';

export default  class TopicPills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: {
                id: -1,
                title: "New Topic"


            },

            lessons : this.props.topics,
            isCreateMode: false
        };

        this.valueChanged = this.valueChanged.bind(this);



    }

    valueChanged= (event) => {
        this.setState({ topic: {
                id: (new Date()).getTime(),
                title: event.target.value
            }} , () => console.log("value changed", this.state.topic))


    }

    saveLesson= () => {
        this.setState({lessons: [...this.props.lessons, this.state.module] })
    }















    render() {
        console.log(this.props.topics);
        return (
            <div>
                <ul className="nav nav-pills">
                    {this.props.topics.map((topic, index) =>

                        <TopicPillsList topic = {topic} key = {index}
                                    deleteTopic={this.props.deleteTopic}
                                    />

                    )}
                    <div className="col-xs-4">
                        <input id="topicFieldId"type="text"  style={{"width":"95%"}} onChange={this.valueChanged} value={this.state.topic.title}
                               className="form-control topicFieldIdWidth mr-sm-2 float-left" placeholder="Add new topic">
                        </input>
                    </div>

                        <i className="fa fa-2x fa-plus" style={{"paddingTop":"4px"}} onClick={() => this.props.createTopic(this.state.topic)} aria-hidden="true"/>
                    </ul>


            </div>)
    }
}
