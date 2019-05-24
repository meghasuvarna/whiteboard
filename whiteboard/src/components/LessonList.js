import React from 'react';


export default  class LessonList extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            lesson: this.props.lesson,
            isEditMode: false
        };
        this.editLesson = this.editLesson.bind(this);
        this.lessonNameChanged = this.lessonNameChanged.bind(this);


    }


    lessonNameChanged = (event) => {

        this.setState( {lesson:  {
                title: event.target.value}})

    }



    editLesson= () => {
        this.setState({isEditMode: !this.state.isEditMode})
    }



    render() {
       return (
                <li className="nav-item" role="button"
                    onClick={() => this.props.selectLesson(this.props.lesson)}>
                    {this.state.isEditMode?

                        <input type="text"
                               onChange={this.lessonNameChanged} value={this.state.lesson.title}>
                        </input>
                        :
                        <div><a className="nav-link">
                            {this.state.lesson.title}</a>
                        </div>}
                        <span className="float-right">
                                {
                                    this.state.isEditMode? <i className="fa fa-check" onClick={this.editLesson}/>:
                                        <i className="fa fa-pencil" onClick={this.editLesson}/>
                                }

                        &nbsp;&nbsp;
                        <i className="fa fa-times" onClick={() => this.props.deleteLesson(this.props.lesson.id)} aria-hidden="true"/>
                        </span>



                </li>

        )
    }
}
