import React from 'react';
import {BrowserRouter as Link} from "react-router-dom";


const TopicPills = ({topics, selectTopic}) =>
    <ul className="nav nav-pills">
        { topics.map((topic, index) =>
            <li className="nav-item" key={index} onClick={() => selectTopic(topic)}>
                <a className="nav-link">
                    {topic.title}</a></li>
        )} </ul>

export default TopicPills;
