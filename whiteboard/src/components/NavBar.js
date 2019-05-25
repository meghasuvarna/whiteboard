import React from 'react';



export default  class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state= {} ;

    }
    render() {
        return(


        <nav className="navbar navbar-dark bg-primary">
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <label className="navbar-brand float-left" >
                Course Name
            </label>

                <form className="form-inline ml-auto">
                    <div className="col-xs-4">
                    <input type="text" className="form-control mr-sm-2 float-left" placeholder="New Course Title">
                        </input>
                    </div>
                    <i className="fa fa-plus fa-2x" aria-hidden="true"></i>
                </form>

        </nav>)
    }
}