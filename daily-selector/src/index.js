"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dailySelector = void 0;
class DailySelector {
    initialize(options) {
        // validates option
        if (dailySelectorHelper._validateOptions(options)) {
            let dateElement = document.getElementById(options.elementId);
            if (dateElement) {
                dateElement.addEventListener("click", (event) => {
                    var _a;
                    if (!document.getElementById(`${elementsMetaData.container.id}${dateElement.id}`)) {
                        event.preventDefault();
                        event.stopPropagation();
                        let container = dailySelectorHelper._createContainer(options);
                        let currentMonth = new Date().getMonth();
                        let currentYear = new Date().getFullYear();
                        let currentDate = new Date().getDate();
                        let currentDay = new Date().getDay();
                        const maxYear = ((_a = options.year) === null || _a === void 0 ? void 0 : _a.max) !== undefined ? options.year.max : currentYear;
                        dailySelectorHelper._setAttributesToElement(dateElement, "currentMonth", currentMonth);
                        dailySelectorHelper._setAttributesToElement(dateElement, "currentYear", currentYear);
                        dailySelectorHelper._setAttributesToElement(dateElement, "currentDate", currentDate);
                        dailySelectorHelper._setAttributesToElement(dateElement, "currentDay", currentDay);
                        dailySelectorHelper._updateCalendar(options, maxYear, currentMonth);
                        dailySelectorHelper._createYearList(options);
                        dailySelectorHelper._initializeViews(container, elementsMetaData.primaryView.id);
                    }
                    document.addEventListener("click", dailySelectorHelper._closeBoxOutside);
                });
            }
        }
    }
}
exports.dailySelector = new DailySelector();
// Example helper object and elementsMetaData for reference
const dailySelectorHelper = {
    _validateOptions: (options) => {
        // Validation logic here
        return true;
    },
    _createContainer: (options) => {
        // Container creation logic here
        return document.createElement('div');
    },
    _setAttributesToElement: (element, attributeName, value) => {
        element.setAttribute(attributeName, value.toString());
    },
    _updateCalendar: (options, maxYear, currentMonth) => {
        // Calendar update logic here
    },
    _createYearList: (options) => {
        // Year list creation logic here
    },
    _initializeViews: (container, primaryViewId) => {
        // View initialization logic here
    },
    _closeBoxOutside: (event) => {
        // Close box logic here
    }
};
const elementsMetaData = {
    container: {
        id: 'containerId'
    },
    primaryView: {
        id: 'primaryViewId'
    }
};
