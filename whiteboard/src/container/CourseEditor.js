    import React from 'react';
    import CourseServices from '../services/courseServices.js';
    import ModuleList from '../components/ModuleList';
    import LessonTabs from '../components/LessonTabs';
    import TopicPills from '../components/TopicPills';

    export default  class CourseEditor extends React.Component {
        constructor(props){
            super(props);
            this.courseService = new CourseServices();

            this.courseId = this.props.match.params.courseId;
            this.course = this.courseService.findCourseById(this.courseId);
            this.state = {
                selectedCourse: this.course,
                selectedModule: this.course.modules[0],
                selectedLesson: this.course.modules[0].lessons[0],
                selectedTopic: this.course.modules[0].lessons[0].topics[0]
                        }

            this.selectModule = this.selectModule.bind(this);
            this.selectLesson = this.selectLesson.bind(this);

        }


        selectModule = module =>{
           console.log("in select module");
            console.log(module);

            this.setState(
                {  selectedModule: module,
                        selectedLesson: module.lessons[0],
                        selectedTopic: module.lessons[0].topics[0]
                });}

        selectLesson = lesson => {
            this.setState(
                {  selectedLesson: lesson,
                    selectedTopic: lesson.topics[0]
                });
            }

        selectTopic = topic => {

            this.setState(
                {
                    selectedTopic: topic
                });
        }

        deleteLesson = updatedModule =>
        {
            console.log(this.state.selectedCourse);
            this.setState({selectedModule: updatedModule}, () => console.log(this.state.selectedModule));


        }



        render() {
            return(
                <div className="row">

                    <div className="col-4 left">
                        <ModuleList modules=
                                        {this.state.selectedCourse.modules} selectModule={this.selectModule}/>
                    </div>
                    <div className="col-8 right">
                        <LessonTabs lessons={this.state.selectedModule.lessons}  module={this.state.selectedModule}
                                    selectLesson={this.selectLesson} deleteLesson={this.deleteLesson}/>
                        <br/>
                        <TopicPills topics={this.state.selectedLesson.topics} selectTopic={this.selectTopic}/>
                    </div>
                </div>
            )}
    }



