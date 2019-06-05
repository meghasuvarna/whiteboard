import React from 'react'
import HeadingWidget from '../components/HeadingWidget'
import ListWidget from  '../components/ListWidget'
import LinkWidget from  '../components/LinkWidget'
import ImageWidget from  '../components/ImageWidget'
import ParagraphWidget from  '../components/ParagraphWidget'
import Switch from 'react-switch'

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
                                                  moveDownWidget={this.props.moveDownWidget}
                                                  isPreview = {this.props.isPreview}
                                                />
           case "Paragraph" : return <ParagraphWidget widget={widget} deleteWidget={this.props.deleteWidget}
                                                      updateWidget={this.props.updateWidget}
                                                      moveUpWidget={this.props.moveUpWidget}
                                                      moveDownWidget={this.props.moveDownWidget}
                                                      isPreview = {this.props.isPreview}
                                                      />
           case "List" : return <ListWidget widget={widget} deleteWidget={this.props.deleteWidget}
                                                            updateWidget={this.props.updateWidget}
                                                            moveUpWidget={this.props.moveUpWidget}
                                                            moveDownWidget={this.props.moveDownWidget}
                                                            isPreview = {this.props.isPreview}
                                                            />
           case "Image" : return <ImageWidget widget={widget} deleteWidget={this.props.deleteWidget}
                                                                updateWidget={this.props.updateWidget}
                                                                moveUpWidget={this.props.moveUpWidget}
                                                                moveDownWidget={this.props.moveDownWidget}
                                                                isPreview = {this.props.isPreview}
                                                                  />
           case "YouTube" : return <LinkWidget widget={widget}  deleteWidget={this.props.deleteWidget}
                                                                updateWidget={this.props.updateWidget}
                                                                moveUpWidget={this.props.moveUpWidget}
                                                                moveDownWidget={this.props.moveDownWidget}
                                                                isPreview = {this.props.isPreview}
                                                               />


        }
    }

    render() {
        return(

            <div style={{"paddingLeft":"15px"}} >
                <div style={{"paddingLeft":"15px"}} >
                    <h4 className="heading">Preview</h4> &nbsp;&nbsp;
                    <div  className=" heading" style={{"paddingLeft":"15px", "verticalAlign":"-webkit-baseline-middle"}} >
                    <Switch onChange={this.props.handlePreview}
                            checked={this.props.isPreview}
                            id="normal-switch"/></div>


                <button type="button" className="btn btn-success float-right" onClick={() => this.props.saveWidget(this.props.widgets)}>Save
                </button>
                </div>


<br/><br/>



            <ul className="list-group ">
                {   this.props.widgets.map (
                    (widget) =>
                        <li key={widget.id} className="list-group-item" style={{"overflow": "auto"}}>
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