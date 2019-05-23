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
            selectedCourse: this.courseService.findCourseById(this.courseId),
            selectedModule:this.courseService.findCourseById(this.courseId).modules[0],
            selectedLesson:null,
            selectedTopic:null
                    }
        this.selectModule = this.selectModule.bind(this);
    }

    selectModule = module =>
   //console.log(module.lessons[0]);
        this.setState(
            {  selectedModule: module,
                    selectedLesson: module.lessons[0],
                    selectedTopic: module.lessons[0].topics[0]
            });

    render() {
        return(
            <div className="row">

                <div className="col-4 left">
                    <ModuleList modules=
                                    {this.state.selectedCourse.modules} selectModule={this.selectModule}/>
                </div>
                <div className="col-8 right">
                    <LessonTabs lessons={this.state.selectedModule.lessons}/>
                    <br/>
                    <TopicPills topics={this.state.selectedTopic}/>
                </div>
            </div>
        )}
}



