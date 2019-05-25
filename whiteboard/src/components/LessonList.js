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

    };



    editLesson= () => {
        this.setState({isEditMode: true})
    };

    saveLesson= () => {
        this.setState({isEditMode: false})
    };



    render() {
       return (
                <li className="nav-item" >
                    {this.state.isEditMode?
                        <span className="d-inline-block">
                            <input type="text" className="form-control"
                                   onChange={this.lessonNameChanged} value={this.state.lesson.title}>
                            </input>
                           &nbsp;
                                <i className="fa fa-check" onClick={this.saveLesson} />

                        </span>
                        :
                        <div onClick={() => this.props.selectLesson(this.props.lesson)}>
                            <span className="nav-link">
                            {this.state.lesson.title}
                                &nbsp;&nbsp;
                            <span className="float-right">
                                {
                                        <i className="fa fa-pencil" onClick={this.editLesson}/>
                                }

                                &nbsp;&nbsp;
                                <i className="fa fa-times" onClick={() => this.props.deleteLesson(this.props.lesson.id)} aria-hidden="true"/>
                        </span>
                        </span>
                        </div>}
                </li>

        )
    }
}
