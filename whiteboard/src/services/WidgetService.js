

let singleton = null;
let i = 1;
let widgets = {};
let baseURL ="http://localhost:8080";
let currentLength = 0;


export default class WidgetService {

    constructor() {
        if (!singleton) {
            singleton = this
        }
        this.widgets = widgets;
    }

    //creates a new widget instance and adds it to the collection of widgets
    createWidget = () =>

        fetch(baseURL + "/api/widgets",
            {
                body: JSON.stringify(
                    {
                        id: Math.floor(Math.random() * 10) + i++,
                        title: "New Heading",

                        name: null,
                        type:"Heading",
                        size: "1",
                        text: "Heading text here"
                    }
                ),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            })
            .then(response => response.json());



    //retrieves all widget instances as an array of widgets
    findAllWidgets = () =>
        fetch("http://localhost:8080/api/widgets")
            .then(response => response.json());
    // this.widgets;

    //retrieves a widget instance that matches the id parameter
    findWidgetById = widgetId =>
        this.widgets.find(
            widget => widget.id === widgetId
        );


    updateWidget = (id, newWidget) =>
        fetch(baseURL + "/api/widgets/" + id,
            {
                body: JSON.stringify(
                    {
                        name: newWidget.name,
                        type: newWidget.type,
                        text: newWidget.text,
                        url: newWidget.url,
                        size: newWidget.size,
                        cssClass: newWidget.cssClass,
                        height: newWidget.height,
                        value: newWidget.value,
                        dataType: newWidget.dataType
                    }
                ),
                headers: {'Content-Type': 'application/json'},
                method: 'PUT'
            })
            .then(response => response.json());

    // //updates the widget instance whose id matches the id parameter.
    // //Updates the instance with values in widget parameter
    // updateWidget = (id, newWidget) => {
    //
    //
    //     fetch( baseURL + "/api/widgets/" + id,
    //         {
    //             body: JSON.stringify( {
    //                 order: newWidget.order,
    //                 name: newWidget.name,
    //                 type: newWidget.type,
    //                 text: newWidget.text,
    //                 url: newWidget.url,
    //                 size: newWidget.size,
    //                 cssClass: newWidget.cssClass,
    //                 height: newWidget.height,
    //                 value: newWidget.value,
    //                 dataType: newWidget.dataType
    //             }),
    //             headers: {'Content-Type': 'application/json'},
    //             method: 'PUT'
    //         }).then(response => response.json())
    //         .then(data => data)
    // };



    //deletes widget instance whose id matches the id parameters
    deleteWidget = id =>
        fetch(baseURL + "/api/widgets/" + id,
            {
                headers: {'Content-Type': 'application/json'},
                method: 'DELETE'
            }).then(response => response.json());


}