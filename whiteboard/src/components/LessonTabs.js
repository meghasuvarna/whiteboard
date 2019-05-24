import React from 'react';
import LessonList from '../components/LessonList';

export default  class LessonTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lesson: {
                id: -1,
                title: "New Lesson"


            },

            module : this.props.module,
            isCreateMode: false
        };

        this.valueChanged = this.valueChanged.bind(this);



    }

    valueChanged= (event) => {
        this.setState({ lesson: {
                id: (new Date()).getTime(),
                title: event.target.value
            }} , () => console.log("value changed", this.state.lesson))


    }

    saveLesson= () => {
        this.setState({lessons: [...this.props.lessons, this.state.module] })
    }


    render() {
        return (
            <div>
            <ul className="nav nav-tabs col-8">
            {this.props.module.lessons.map((lesson) =>

                <LessonList lesson = {lesson}
                            selectLesson={this.props.selectLesson}
                            deleteLesson={this.props.deleteLesson}
                            key={lesson.id}/>

            )}
                <div className="col-xs-4">
                    <input type="text"   onChange={this.valueChanged} value={this.state.lesson.title}
                           className="form-control mr-sm-2 float-left" placeholder="Add new lesson">
                    </input>
                </div>
                <button>
                <i className="fa fa-plus" onClick={() => this.props.createLesson(this.state.lesson)} aria-hidden="true"/>
            </button> </ul>


            </div>)
    }
}
