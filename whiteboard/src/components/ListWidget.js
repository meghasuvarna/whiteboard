import React from 'react'

export default class ListWidget extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            widget: this.props.widget,
            orderType: "ul"
        }
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
        if( tempWidget.type === "Heading")
        {
            tempWidget.url = null;
            tempWidget.size = 1;
            tempWidget.name = null;
            tempWidget.text = "Heading text here."

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

    textChanged = event => {
        let tempWidget = {...this.state.widget};
        tempWidget.text = event.target.value;
        this.setState({widget: tempWidget});
    }

    orderChanged = event => {
        this.setState({orderType: event.target.value});


    }

    render() {
        console.log(this.state.widget.text);
        console.log(this.state.orderType);
        return(
            <div>
                <div>
                    <h1 className="heading">List Widget</h1>

                    <button type="button" className="btn btn-danger float-right btnMargin">
                        <i className="fa fa-times "  onClick={() => this.props.deleteWidget(this.props.widget.id)}></i></button>
                    <select className="form-control form-control-lg col-lg-12 float-right
                     widgetTypeDropDown btnMargin" height="10px" value="List" onChange={this.widgetTypeChanged}>
                        <option value="Heading">Heading </option>
                        <option value="Paragraph">Paragraph</option>
                        <option value="List">List</option>
                        <option value="Image">Image</option>
                        <option value="Link">Link</option>
                    </select>

                    <button type="button" className="btn btn-warning float-right btnMargin">
                        <i className="fa fa-angle-up"></i>
                    </button>

                    <button type="button" className="btn btn-warning float-right btnMargin">
                        <i className="fa fa-angle-down"></i></button>
                </div>
                <br/>

                <textarea className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                          value={this.state.widget.text} onChange={this.textChanged}>
                </textarea>

                <select className="form-control form-control-lg col-lg-12 float-left widgetTextbox" height="10px"
                        value={this.state.orderType} onChange={this.orderChanged}>
                    <option value="ul">Unordered list</option>
                    <option value="ol">Ordered  list</option>

                </select>

                <input  className="form-control form-control-lg col-lg-12 float-left widgetTextbox
                "height="10px"  placeholder="Widget Name"/>
                <br/>
                <h2>Preview</h2>
                {
                    this.state.orderType=== "ol" &&
                    <ol>
                        <li>
                            {this.state.widget.text}
                        </li>
                    </ol>

                }
                {
                    this.state.orderType=== "ul" &&
                    <ul>
                        <li>
                            {this.state.widget.text}
                        </li>
                    </ul>
                }





            </div>




        );
    }
}