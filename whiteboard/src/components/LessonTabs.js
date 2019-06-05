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
            <div className="row">
            <div className="col-8 bg-dark" style={{"paddingLeft": "0px"}}>
            <ul className="nav nav-tabs bg-dark text-white navtabCss">
            {this.props.module.lessons.map((lesson) =>

                <LessonList lesson = {lesson}
                            selectLesson={this.props.selectLesson}
                            selectedLesson={this.props.selectedLesson}
                            deleteLesson={this.props.deleteLesson}
                            key={lesson.id}/>

            )}

             </ul>
            </div>
            <div className="col-4 bg-dark" style={{"paddingRight": "0px", "paddingTop": "20px"}}>

                    <input onChange={this.valueChanged} value={this.state.lesson.title}
                           className="form-control mr-sm-2 float-left" placeholder="Add new lesson">
                    </input>


                <i className="fa fa-plus fa-2x float-left text-white" style={{"paddingTop":"4px"}}
                   onClick={() => this.props.createLesson(this.state.lesson)} aria-hidden="true"/>
            </div>

            </div>
        )
    }
}
