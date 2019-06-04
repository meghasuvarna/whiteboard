import React from 'react'

export default class HeadingWidget extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            widget: this.props.widget,


        }

    }

    headingSizeChanged = event => {
        let tempWidget = {...this.state.widget};
        tempWidget.size = event.target.value;
        this.setState({widget: tempWidget});

    }



    headingTextChanged = event => {
        let tempWidget = {...this.state.widget};
        tempWidget.text = event.target.value;
        this.setState({widget: tempWidget});
    }

    widgetTypeChanged = event => {
        let tempWidget = {...this.state.widget};
        tempWidget.type = event.target.value;
        if( tempWidget.type === "Paragraph")
        {
            tempWidget.url = null;
            tempWidget.size = null;
            tempWidget.name = null;
            tempWidget.text = "Paragraph text here."

        }
        if( tempWidget.type === "YouTube")
        {
            tempWidget.url = "https://www.google.com";
            tempWidget.size = null;
            tempWidget.name = null;
            tempWidget.text = "URL text here."
        }
        if( tempWidget.type === "List")
        {
            tempWidget.url = null;
            tempWidget.size = null;
            tempWidget.name = null;
            tempWidget.text = "List text here."
        }
        if( tempWidget.type === "Image")
        {
            tempWidget.url = "https://lorempixel.com/400/200/";
            tempWidget.size = null;
            tempWidget.name = null;
            tempWidget.text = "null";

        }
        this.setState(
            {widget: tempWidget}, () => this.props.updateWidget(this.state.widget));


    }

    render() {
        return(

            <div>
                <div>

                    <h1 className="heading">Heading Widget</h1>

                    <span>
                          <span>&nbsp;&nbsp;</span>
                    <button type="button" className="btn btn-danger float-right btnMargin"
                            onClick={() => this.props.deleteWidget(this.props.widget.id)}>
                        <i className="fa fa-times "></i></button>
                    <select className="form-control form-control-lg col-lg-12 float-right
                     widgetTypeDropDown btnMargin" height="10px" value="Heading" onChange={this.widgetTypeChanged}>
                            <option value="Heading">Heading </option>
                            <option value="Paragraph">Paragraph</option>
                            <option value="List">List</option>
                            <option value="Image">Image</option>
                            <option value="YouTube">Link</option>
                    </select>
                        <span>&nbsp;&nbsp;</span>
                     <button type="button" className="btn btn-warning float-right btnMargin" onClick={() => this.props.moveUpWidget(this.state.widget)}>
                        <i className="fa fa-angle-up"></i>
                    </button>

                    <button type="button" className="btn btn-warning float-right btnMargin" onClick={() => this.props.moveDownWidget(this.state.widget)}>
                        <i className="fa fa-angle-down"></i></button>
                          <span>&nbsp;&nbsp;</span>
                    </span>


                </div>
                <br/>
                <input  className="form-control form-control-lg col-lg-12 float-left widgetTextbox
                "height="10px" onChange={this.headingTextChanged} placeholder="Heading Text"
                        value={this.state.widget.text}
                />

                <select className="form-control form-control-lg col-lg-12 float-left widgetTextbox" height="10px"
                        value={this.state.widget.size} onChange={this.headingSizeChanged}>
                    <option value="1">Heading 1 </option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>

                <input  className="form-control form-control-lg col-lg-12 float-left widgetTextbox
                "height="10px"  placeholder="Widget Name"

                />
                <br/>
                <h2>Preview</h2>
                {
                    (this.state.widget.size === 1 || this.state.widget.size === "1") &&
                    <h1>{this.state.widget.text}</h1>
                }
                {
                    (this.state.widget.size === 2 || this.state.widget.size === "2") &&
                    <h2>{this.state.widget.text}</h2>
                }
                {
                    (this.state.widget.size === 3 || this.state.widget.size === "3") &&
                    <h3>{this.state.widget.text}</h3>
                }


            </div >




        );
    }
}