import React from 'react';
import {BrowserRouter as Link} from "react-router-dom";


const ModuleListItem = ({module, deleteModule, selectModule}) =>
    <div>
    <li className="list-group-item" >
        <button type="button" className="list-group-item list-group-item-action" onClick={() => selectModule(module)}>
        {module.title}
        <span className="float-right">
        <i className="fa fa-times" onClick={() => deleteModule(module.id)} aria-hidden="true"></i>
        </span>
        </button>


    </li>
    </div>

export default ModuleListItem


