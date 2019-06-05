import 'array.prototype.move'



const WidgetReducer = (state = {widgets: [], isPreview: false}, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":  return {
            widgets: [...state.widgets, action.widget]
        };
        case "FIND_ALL_WIDGETS":
        case "FIND_WIDGET":
        case "DELETE_WIDGET":return {
            widgets: action.widgets
        };
        case "UPDATE_WIDGET":
            return {
                widgets: state.widgets.map(widget => action.widget.id === widget.id? action.widget : widget)
            };

        case "SAVE_ALL":
            return {
                widgets: action.widgets
            };
        case "MOVE_UP":
            let index = state.widgets.indexOf(action.widget);
            if(index !== 0) {
                state.widgets.move(index, index - 1)

            }
            else
            {
                alert('Cannot move further up!')
            }
            return Object.assign({} ,{
                widgets:state.widgets.splice(0)
            });

        case "MOVE_DOWN" :
            let indx = state.widgets.indexOf(action.widget);
            console.log(indx);
            if(indx + 1  !== state.widgets.length)
            {
                state.widgets.move(indx,indx+1)}

            else{

                alert('Cannot move further down!')
            }
            return Object.assign({} ,{
                widgets:state.widgets.splice(0)
            });

        case "HANDLE_PREVIEW":
            return {
                isPreview: !state.isPreview,
                widgets: state.widgets
            };
        default:
            return state;
    }
};

export default WidgetReducer;