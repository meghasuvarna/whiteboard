import React from 'react'
import HeadingWidget from '../components/HeadingWidget'
import ListWidget from  '../components/ListWidget'
import LinkWidget from  '../components/LinkWidget'
import ImageWidget from  '../components/ImageWidget'
import ParagraphWidget from  '../components/ParagraphWidget'


export default class WidgetListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.props.findAllWidgets();
    }


    renderWidgets = widget =>{
        switch (widget.type) {
           case "Heading" : return <HeadingWidget widget={widget} deleteWidget={this.props.deleteWidget}
                                                  updateWidget={this.props.updateWidget}
                                                  moveUpWidget={this.props.moveUpWidget}
                                                  moveDownWidget={this.props.moveDownWidget}/>
           case "Paragraph" : return <ParagraphWidget widget={widget} deleteWidget={this.props.deleteWidget}
                                                      updateWidget={this.props.updateWidget}
                                                      moveUpWidget={this.props.moveUpWidget}
                                                      moveDownWidget={this.props.moveDownWidget}/>
           case "List" : return <ListWidget widget={widget} deleteWidget={this.props.deleteWidget}
                                                            updateWidget={this.props.updateWidget}
                                                            moveUpWidget={this.props.moveUpWidget}
                                                            moveDownWidget={this.props.moveDownWidget}/>
           case "Image" : return <ImageWidget widget={widget} deleteWidget={this.props.deleteWidget}
                                                                updateWidget={this.props.updateWidget}
                                                                  moveUpWidget={this.props.moveUpWidget}
                                                                  moveDownWidget={this.props.moveDownWidget}/>
           case "YouTube" : return <LinkWidget widget={widget} deleteWidget={this.props.deleteWidget}
                                                            updateWidget={this.props.updateWidget}
                                                               moveUpWidget={this.props.moveUpWidget}
                                                               moveDownWidget={this.props.moveDownWidget}/>


        }
    }

    render() {
        return(
            <div>
            <div className="float-right">
                <button type="button" className="btn btn-success" >Save
                </button>
            </div>
<br/><br/>



            <ul className="list-group ">
                {   this.props.widgets.map (
                    (widget,index) =>
                        <li key={index} className="list-group-item">
                            {this.renderWidgets(widget)}
                        </li>

                )
                }
            </ul>

                <div className="float-right">
                <i className="fa fa-3x fa-plus-circle" onClick={this.props.addWidget}/>
                </div>

            </div>
        );
    }
}