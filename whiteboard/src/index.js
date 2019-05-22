import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import WhiteBoard from './container/WhiteBoard';


ReactDOM.render(<div className="container-fluid">
<WhiteBoard/>
</div>,
    document.getElementById('root'))


