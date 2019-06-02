import React from 'react'

export default class LinkWidget extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            widget: this.props.widget,


        }

    }


    urlChanged = event => {
        let tempWidget = {...this.state.widget};
        tempWidget.url = event.target.value;
        this.setState({widget: tempWidget});
    }

    urlTextChanged = event => {
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
        if( tempWidget.type === "Heading")
        {
            tempWidget.url = null;
            tempWidget.size = 1;
            tempWidget.name = null;
            tempWidget.text = "Heading text here."

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

                    <h1 className="heading">Link Widget</h1>

                    <span>
                          <span>&nbsp;&nbsp;</span>
                    <button type="button" className="btn btn-danger float-right btnMargin"
                            onClick={() => this.props.deleteWidget(this.props.widget.id)}>
                        <i className="fa fa-times "></i></button>
                    <select className="form-control form-control-lg col-lg-12 float-right
                     widgetTypeDropDown btnMargin" height="10px" value="YouTube" onChange={this.widgetTypeChanged}>
                            <option value="Heading">Heading </option>
                            <option value="Paragraph">Paragraph</option>
                            <option value="List">List</option>
                            <option value="Image">Image</option>
                            <option value="YouTube">Link</option>
                    </select>
                        <span>&nbsp;&nbsp;</span>
                    <button type="button" className="btn btn-warning float-right btnMargin">
                        <i className="fa fa-angle-up"></i>
                    </button>
                         <span>&nbsp;&nbsp;</span>
                    <button type="button" className="btn btn-warning float-right btnMargin">
                        <i className="fa fa-angle-down"></i></button>
                          <span>&nbsp;&nbsp;</span>
                    </span>


                </div>
                <br/>
                <input  className="form-control form-control-lg col-lg-12 float-left widgetTextbox
                "height="10px" onChange={this.urlChanged} placeholder="Link URL"
                        value={this.state.widget.url}
                />

                <input  className="form-control form-control-lg col-lg-12 float-left widgetTextbox
                "height="10px" onChange={this.urlTextChanged} placeholder="Link Text"
                        value={this.state.widget.text}
                />



                <input  className="form-control form-control-lg col-lg-12 float-left widgetTextbox
                "height="10px"  placeholder="Widget Name"

                />
                <br/>
                <h2>Preview</h2>
                <a href={this.state.widget.url}> {this.state.widget.text}</a>
            </div >




        );
    }
}