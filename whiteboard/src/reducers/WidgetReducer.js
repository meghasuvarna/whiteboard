const WidgetReducer = (state = {widgets: []}, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
        case "FIND_ALL_WIDGETS":
        case "FIND_WIDGET":
        case "DELETE_WIDGET":
        case "UPDATE_WIDGET":
            return {
                widgets: action.widgets
            };
        default:
            return state;
    }
};

export default WidgetReducer;