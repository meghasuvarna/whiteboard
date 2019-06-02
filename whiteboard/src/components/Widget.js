import React from 'react'

export default class Widget extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <div>
                <h1>Heading Widget</h1>
                    <button type="button" className="btn btn-warning">
                        <i className="fa fa-angle-up"></i>
                    </button>
                    <button type="button" className="btn btn-warning">
                        <i className="fa fa-angle-down"></i></button>
                    <select className="form-control form-control-lg col-lg-12 float-left widgetTextbox" height="10px">
                        <option value="1"> Heading 1 </option>
                        <option value="2">Heading 2</option>
                        <option value="3">Heading 3</option>
                    </select>
                    <button type="button" className="btn btn-danger">
                        <i className="fa fa-times"></i></button>
                </div>

                <input  className="form-control form-control-lg col-lg-12 float-left widgetTextbox
                "height="10px"
                        defaultValue={this.props.widget.text}/>



                <input  className="form-control form-control-lg col-lg-12 float-left widgetTextbox "  height="10px"
                        defaultValue={this.props.widget.size}/>


                <select className="form-control form-control-lg col-lg-12 float-left widgetTextbox" height="10px">
                    <option value="1"> Heading 1 </option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>


            </div>




        );
    }
}