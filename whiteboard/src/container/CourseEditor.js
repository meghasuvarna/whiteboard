import React from 'react';
import CourseServices from '../services/courseServices.js';
import ModuleList from '../components/ModuleList';
import LessonTabs from '../components/LessonTabs';
import TopicPills from '../components/TopicPills';

export default  class CourseEditor extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.courseService = new CourseServices();
        this.courseId = this.props.match.params.courseId;


        this.state = {
            selectedCourse: this.courseService.findCourseById(this.courseId)
                    }
        console.log(this.state.selectedCourse.modules);
    }

    // selectModule = module =>
    //     this.setState(
    //         {  selectedModule: module,
    //                 selectedLesson: module.lessons[0],: module.lessons[0].topics[0]
    //         });

    render() {
        return(
            <div className="row">

                <div className="col-3">
                    <ModuleList modules=
                                    {this.state.selectedCourse.modules}/></div>
                <div className="col-3">
                    {/*<LessonTabs lessons={this.state.selectedCourse.modules}/>*/}
                    {/*<TopicPills topics={this.state.selectedCourse}/>*/}
                </div>
            </div>
        )}
}



