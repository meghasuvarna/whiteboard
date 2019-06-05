import React from 'react';
import {connect} from "react-redux";
import WidgetListComponent from "../components/WidgetListComponent";
import WidgetService from "../services/WidgetService";
const widgetService = new WidgetService();

const stateToPropertyMapper = state => ({
    widgets: state.widgets,
    isPreview: state.isPreview

});

const dispatcherToPropertyMapper = dispatch => ({
    findAllWidgets: () => widgetService.findAllWidgets()
        .then(widgets => dispatch({
            type: 'FIND_ALL_WIDGETS',
            widgets: widgets
        })),

    deleteWidget: (widgetId) => widgetService.deleteWidget(widgetId)
        .then(widgets => dispatch({
            type: 'DELETE_WIDGET',
            widgets: widgets
        })),

    addWidget: () => widgetService.createWidget()
        .then(widget => dispatch({
            type: 'CREATE_WIDGET',
            widget: widget
        })),
    saveWidget: (widgets) => {
        widgets.map(widget =>
        widgetService.updateWidget(widget.id, widget)
        .then(widgets => dispatch({
            type: 'SAVE_ALL',
            widgets: widgets
        })))},
    updateWidget: (widget, widgets) =>
        dispatch({
                type: 'UPDATE_WIDGET',
                widget: widget,
                widgets: widgets
            }),
    moveUpWidget: (widget) => dispatch({
                type: 'MOVE_UP',
                widget: widget
            }),
    moveDownWidget: (widget) => dispatch({
        type: 'MOVE_DOWN',
        widget: widget
    }),
    handlePreview: () => dispatch({
        type: 'HANDLE_PREVIEW'
    })

});

const WidgetListContainer = connect(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetListComponent);

export default WidgetListContainer;