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
            lessons: this.props.lessons,
            module : this.props.module,
            isCreateMode: false
        };


        this.createLesson = this.createLesson.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.valueChanged = this.valueChanged.bind(this);

    }

    valueChanged= (event) => {
        this.setState({ lesson: {
                id: (new Date().getDate()),
                title: event.target.value
            },
        lessons: this.props.lessons})

    }

    saveLesson= () => {
        this.setState({lessons: [...this.props.lessons, this.state.module] })
    }

    createLesson= () => {
        this.setState({isEditMode: !this.state.isEditMode})

    }

    deleteLesson= (id) => {

         var tempState = this.state;
         tempState.lessons = (this.props.lessons.filter(lesson => lesson.id !== id));
         tempState.module.lessons = tempState.lessons;
         this.setState(tempState);
         this.props.deleteLesson(this.state.module);
        }











    render() {
        return (
            <ul className="nav nav-tabs col-8">
            {this.props.lessons.map((lesson) =>

                <LessonList lesson = {lesson}
                            selectLesson={this.props.selectLesson}
                            deleteLesson={this.deleteLesson}
                            key={lesson.id}/>

            )} </ul>)
    }
}
