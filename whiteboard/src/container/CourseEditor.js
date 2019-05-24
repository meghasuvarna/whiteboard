    import React from 'react';
    import CourseServices from '../services/courseServices.js';
    import ModuleList from '../components/ModuleList';
    import LessonTabs from '../components/LessonTabs';
    import TopicPills from '../components/TopicPills';

    export default  class CourseEditor extends React.Component {
        constructor(props){
            super(props);
            this.courseService = new CourseServices();
            console.log("inside constructor");
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
            this.createLesson = this.createLesson.bind(this);
            this.createTopic = this.createTopic.bind(this);


        }


        selectModule = module =>{
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
            console.log(this.state.selectedLesson)

            }



        createLesson= (lesson) => {
            var tempState = this.state;
            var addNewModule = this.state.selectedModule;
            console.log(lesson.id);
            addNewModule.lessons = [...addNewModule.lessons, lesson];
            tempState.selectedModule = addNewModule;

            this.setState(tempState);


        }




        deleteLesson= (id) => {

            var tempState = this.state;
            var updatedModule = this.state.selectedModule;

            var updatedLessons = updatedModule.lessons.filter(lesson => lesson.id !== id);
            updatedModule.lessons = updatedLessons;
            tempState.selectedModule = updatedModule;
            tempState.selectedLesson = updatedModule.lessons[0];
            console.log(updatedModule.lessons[0]);
            console.log("hjj");

            this.setState(tempState);
            console.log(this.state.selectedLesson);



        }

        createTopic= (topic) => {
            var tempState = this.state;
            var updateLessonwithNewTopic = this.state.selectedLesson;

            updateLessonwithNewTopic.topics = [...updateLessonwithNewTopic.topics, topic];
            tempState.selectedLesson = updateLessonwithNewTopic;

            this.setState(tempState);


        }

        deleteTopic= (id) => {


            var tempState = this.state;
            var updatedlesson = this.state.selectedLesson;

            var updatedtopics = updatedlesson.topics.filter(topic => topic.id !== id);

            tempState.selectedLesson.topics = updatedtopics;



            tempState.selectedTopic = updatedlesson.topics[0];


            this.setState(tempState);
        }

        render() {

            return(
                <div className="row">

                    <div className="col-4 left" >
                        <ModuleList modules=
                                        {this.state.selectedCourse.modules} selectModule={this.selectModule}/>
                    </div>
                    <div className="col-8 right">
                        <LessonTabs lessons={this.state.selectedModule.lessons}  module={this.state.selectedModule}
                                    selectLesson={this.selectLesson}
                                    createLesson={ this.createLesson}
                                    deleteLesson={this.deleteLesson}

                                   />
                        <br/>
                        <TopicPills topics={this.state.selectedLesson.topics}
                                    createTopic={ this.createTopic}
                                    deleteTopic={this.deleteTopic}
                        />
                    </div>
                </div>
            )}
    }



