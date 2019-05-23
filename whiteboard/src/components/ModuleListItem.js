import React from 'react';
import {BrowserRouter as Link} from "react-router-dom";


const ModuleListItem = ({module}) =>
    <li className="list-group-item">
        {module.title}
        <span className="float-right">
        <i className="fa fa-times" aria-hidden="true"></i>
        </span>
    </li>

export default ModuleListItem


