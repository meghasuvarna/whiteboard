import React from 'react';
import {BrowserRouter as Link} from "react-router-dom";
import ModuleListItem from "./ModuleListItem";


const LessonTabs = ({lessons}) =>
    <ul className="nav nav-tabs">
        { lessons.map((lesson, index) =>
            <li className="nav-item" key={index}>
                <a className="nav-link">
                    {lesson.title}</a></li>
        )} </ul>

export default LessonTabs;