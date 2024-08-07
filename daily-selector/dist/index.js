"use strict";
// ===== TYPES =====
Object.defineProperty(exports, "__esModule", { value: true });
exports.dailySelector = void 0;
// ===== OPTIONS END =====
// ===== CONSTANTS =====
const defaultColorOptions = {
    primary: "#000000",
    secondary: "#e9e8e8",
};
const elementsMetaData = {
    container: {
        id: "daily_selector_container_",
        class: "daily-selector-container",
    },
    header: { id: "calendar_header", class: "calendar-header" },
    headerDate: { id: "selected_date", class: "date" },
    headerYear: { id: "selected_year", class: "year" },
    primaryView: { id: "calendar_main", class: "calendar-main" },
    primaryNavigationView: {
        id: "calendar_navigation",
        class: "calendar-navigation",
    },
    primaryNavigationViewPrevious: {
        id: "prev-month",
        class: "icon",
    },
    primaryNavigationViewNext: {
        id: "next-month",
        class: "icon",
    },
    primaryNavigationTitle: { id: "month_year_title", class: "month-year-title" },
    primaryBody: { id: "calendar_days", class: "calendar-days" },
    secondaryView: { id: "calendar_past_years", class: "calendar-past-years" },
    secondaryNavigationView: {
        id: "calendar_year_navigation",
        class: "calendar-year-navigation",
    },
    secondaryNavigationTitle: { id: "year_title", class: "year-title" },
    secondaryBody: { id: "calendar_years", class: "calendar-years" },
    actionContainer: { id: "calendar_action", class: "calendar-action" },
    footer: { id: "calendar_footer", class: "calendar-footer" },
    yearList: { id: "year_list", class: "year-list" },
    yearSearch: { id: "year_search", class: "search-bar" },
    yearItem: { id: "year_item", class: "year-item" },
    yearHeader: { id: "year_header", class: "year-header" },
    yearContent: { id: "year_content", class: "year-content" },
    yearGrid: { id: "year_grid", class: "year-grid" },
    monthItem: { id: "month_item", class: "month-item" },
    searchButton: { id: "btnSearch", class: "icon" },
    modal: { id: "daily_selector_modal", class: "daily-selector-modal" },
    modalOverlay: {
        id: "daily_selector_modal_overlay",
        class: "daily-selector-modal-overlay",
    },
    modalContent: {
        id: "daily_selector_modal_content",
        class: "daily-selector-modal-content",
    },
};
const nameConstants = {
    ELEMENT_ID: "date-input",
};
// month names object
const monthNames = [
    { id: 1, name: "January", shortName: "Jan" },
    { id: 2, name: "February", shortName: "Feb" },
    { id: 3, name: "March", shortName: "Mar" },
    { id: 4, name: "April", shortName: "Apr" },
    { id: 5, name: "May", shortName: "May" },
    { id: 6, name: "June", shortName: "Jun" },
    { id: 7, name: "July", shortName: "Jul" },
    { id: 8, name: "August", shortName: "Aug" },
    { id: 9, name: "September", shortName: "Sep" },
    { id: 10, name: "October", shortName: "Oct" },
    { id: 11, name: "November", shortName: "Nov" },
    { id: 12, name: "December", shortName: "Dec" },
];
//days names object
const dayNames = [
    { id: 1, name: "Sunday", shortName: "Sun" },
    { id: 2, name: "Monday", shortName: "Mon" },
    { id: 3, name: "Tuesday", shortName: "Tue" },
    { id: 4, name: "Wednesday", shortName: "Wed" },
    { id: 5, name: "Thursday", shortName: "Thu" },
    { id: 6, name: "Friday", shortName: "Fri" },
    { id: 7, name: "Saturday", shortName: "Sat" },
];
// ===== CONSTANTS END =====
// ===== ENUMS =====
var ELEMENTS;
(function (ELEMENTS) {
    ELEMENTS["DIV_ELEMENT"] = "div";
    ELEMENTS["SPAN_ELEMENT"] = "span";
    ELEMENTS["BUTTON_ELEMENT"] = "button";
    ELEMENTS["H2_ELEMENT"] = "h2";
    ELEMENTS["INPUT_ELEMENT"] = "input";
})(ELEMENTS || (ELEMENTS = {}));
// Icons
var ICONS;
(function (ICONS) {
    ICONS["PREVIOUS"] = "<svg width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z'/><polyline points='15 6 9 12 15 18' /></svg>";
    ICONS["NEXT"] = "<svg width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z'/>  <polyline points='9 6 15 12 9 18' /></svg>";
    ICONS["SEARCH"] = "<svg width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z'/><circle cx='10' cy='10' r='7' /><line x1='21' y1='21' x2='15' y2='15' /></svg>";
    ICONS["CANCEL"] = "<svg width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>  <path stroke='none' d='M0 0h24v24H0z'/>  <line x1='18' y1='6' x2='6' y2='18' />  <line x1='6' y1='6' x2='18' y2='18' /></svg>";
})(ICONS || (ICONS = {}));
// navigation button
var NAVIGATION;
(function (NAVIGATION) {
    NAVIGATION["PREVIOUS"] = "PREVIOUS";
    NAVIGATION["NEXT"] = "NEXT";
})(NAVIGATION || (NAVIGATION = {}));
// button actions
var ACTION;
(function (ACTION) {
    ACTION["CLEAR"] = "CLEAR";
    ACTION["OK"] = "OK";
    ACTION["TODAY"] = "TODAY";
    ACTION["CANCEL"] = "CANCEL";
})(ACTION || (ACTION = {}));
// date select, highlight and default color setters
var DATE;
(function (DATE) {
    DATE["DEFAULT"] = "DEFAULT";
    DATE["SELECT"] = "SELECT";
    DATE["TODAY"] = "TODAY";
})(DATE || (DATE = {}));
// ===== ENUMS END =====
class DailySelector {
    //initialize daily selector
    initialize(options) {
        // validates option
        if (dailySelectorHelper._validateOptions(options)) {
            let dateElement = document.getElementById(options.elementId);
            dateElement.addEventListener("click", (event) => {
                var _a;
                if (document.getElementById(`${elementsMetaData.container.id}${dateElement.id}`) === null) {
                    event.preventDefault();
                    event.stopPropagation();
                    let container = dailySelectorHelper._createContainer(options);
                    let currentMonth = new Date().getMonth();
                    let currentYear = new Date().getFullYear();
                    let currentDate = new Date().getDate();
                    let currentDay = new Date().getDay();
                    const maxYear = ((_a = options === null || options === void 0 ? void 0 : options.year) === null || _a === void 0 ? void 0 : _a.max) !== undefined ? options.year.max : currentYear;
                    dailySelectorHelper._setAttributesToElement(dateElement, "currentMonth", currentMonth.toString());
                    dailySelectorHelper._setAttributesToElement(dateElement, "currentYear", currentYear.toString());
                    dailySelectorHelper._setAttributesToElement(dateElement, "currentDate", currentDate.toString());
                    dailySelectorHelper._setAttributesToElement(dateElement, "currentDay", currentDay.toString());
                    dailySelectorHelper._updateCalendar(options, maxYear, currentMonth);
                    dailySelectorHelper._createYearList(options);
                    dailySelectorHelper._initializeViews(container, elementsMetaData.primaryView.id);
                }
            });
        }
    }
}
const dailySelector = new DailySelector();
exports.dailySelector = dailySelector;
const dailySelectorHelper = {
    // validates options for empty elements id and min max year
    _validateOptions: (options) => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let rtn = true;
        if (options.elementId === undefined) {
            console.error("elementId is not defined");
            rtn = false;
        }
        else if (options.elementId !== undefined && options.elementId === "") {
            console.error("elementId is empty");
            rtn = false;
        }
        else if (options.elementId !== "" &&
            document.getElementById(options.elementId) === null) {
            console.error("elementId is incorrect");
            rtn = false;
        }
        let isValidYear = true;
        let minYear = 0;
        let maxYear = 0;
        if (((_a = options === null || options === void 0 ? void 0 : options.year) === null || _a === void 0 ? void 0 : _a.min) === undefined || !isNaN(options.year.min)) {
            isValidYear = false;
        }
        if (((_b = options === null || options === void 0 ? void 0 : options.year) === null || _b === void 0 ? void 0 : _b.max) === undefined || !isNaN(options.year.max)) {
            isValidYear = false;
        }
        if (!isValidYear) {
            minYear = (_c = options === null || options === void 0 ? void 0 : options.year) === null || _c === void 0 ? void 0 : _c.min;
            maxYear = (_d = options === null || options === void 0 ? void 0 : options.year) === null || _d === void 0 ? void 0 : _d.max;
            if (minYear > maxYear) {
                console.error("max year must be greater than min year");
                rtn = false;
            }
        }
        if (((_e = options === null || options === void 0 ? void 0 : options.color) === null || _e === void 0 ? void 0 : _e.primary) !== undefined) {
            if (!CSS.supports("color", (_f = options === null || options === void 0 ? void 0 : options.color) === null || _f === void 0 ? void 0 : _f.primary)) {
                console.error("Not a valid primary color");
            }
        }
        if (((_g = options === null || options === void 0 ? void 0 : options.color) === null || _g === void 0 ? void 0 : _g.secondary) !== undefined) {
            if (!CSS.supports("color", (_h = options === null || options === void 0 ? void 0 : options.color) === null || _h === void 0 ? void 0 : _h.secondary)) {
                console.error("Not a valid secondary color");
            }
        }
        sessionStorage.setItem(`${options.elementId}-ds-option`, JSON.stringify(options));
        return rtn;
    },
    // select ui based on user option, default is popup
    _createContainer: (options) => {
        options = JSON.parse(sessionStorage.getItem(`${options.elementId}-ds-option`));
        let elementId = options.elementId;
        let containerId = `${elementsMetaData.container.id}${elementId}`;
        let container = dailySelectorHelper._createElement(ELEMENTS.DIV_ELEMENT, elementId);
        container.id = containerId;
        container.classList.add(elementsMetaData.container.class);
        dailySelectorHelper._createCalendar(container, options);
        dailySelectorModalHelper._createModal(container, options.closeOptions);
        return container;
    },
    // create element with element id as attribute
    _createElement: (ELEMENTS, elementId) => {
        let element = document.createElement(ELEMENTS);
        dailySelectorHelper._setElementId(element, elementId);
        return element;
    },
    // set element id to date element
    _setElementId: (element, id) => {
        dailySelectorHelper._setAttributesToElement(element, nameConstants.ELEMENT_ID, id);
    },
    // set attributes to element
    _setAttributesToElement: (element, key, value) => {
        element.setAttribute(key, value);
    },
    // get element id from date element
    _getElementId: (element) => {
        return dailySelectorHelper._getAttributesFromElement(element, nameConstants.ELEMENT_ID);
    },
    // get attributes from element
    _getAttributesFromElement: (element, key) => {
        return element.getAttribute(key);
    },
    // reset date element to original statge and remove all atrributes
    _resetDateElement: (dateElement) => {
        dailySelectorHelper._removeAttributesFromElement(dateElement, "currentMonth");
        dailySelectorHelper._removeAttributesFromElement(dateElement, "currentYear");
        dailySelectorHelper._removeAttributesFromElement(dateElement, "currentDate");
        dailySelectorHelper._removeAttributesFromElement(dateElement, "currentDay");
        document.getElementById(elementsMetaData.modal.id).remove();
    },
    // remove attributes from element
    _removeAttributesFromElement: (element, key) => {
        return element.removeAttribute(key);
    },
    // creates a calendar ui
    _createCalendar: (calendarContainer, options) => {
        var _a, _b, _c, _d;
        let elementId = dailySelectorHelper._getElementId(calendarContainer);
        let displayFormat = options.displayFormat;
        let primaryColor = ((_a = options === null || options === void 0 ? void 0 : options.color) === null || _a === void 0 ? void 0 : _a.primary) === undefined
            ? defaultColorOptions.primary
            : (_b = options === null || options === void 0 ? void 0 : options.color) === null || _b === void 0 ? void 0 : _b.primary;
        dailySelectorHelper._createCalendarHeader(calendarContainer, options);
        // month calendar view
        let calendarMain = dailySelectorHelper._createElement(ELEMENTS.DIV_ELEMENT, elementId);
        calendarMain.id = elementsMetaData.primaryView.id;
        calendarMain.classList.add(elementsMetaData.primaryView.class);
        calendarContainer.appendChild(calendarMain);
        // year calendar view
        let calendarPastYear = dailySelectorHelper._createElement(ELEMENTS.DIV_ELEMENT, elementId);
        calendarPastYear.id = elementsMetaData.secondaryView.id;
        calendarPastYear.classList.add(elementsMetaData.secondaryView.class);
        calendarContainer.appendChild(calendarPastYear);
        // month view screen elements
        // Calendar naviagation - month view
        let calendarNavigation = dailySelectorHelper._createElement(ELEMENTS.DIV_ELEMENT, elementId);
        calendarNavigation.id = elementsMetaData.primaryNavigationView.id;
        calendarNavigation.classList.add(elementsMetaData.primaryNavigationView.class);
        calendarMain.appendChild(calendarNavigation);
        calendarNavigation.style.color = primaryColor;
        // Calendar previous month
        let btnPreviousMonth = dailySelectorHelper._createElement(ELEMENTS.BUTTON_ELEMENT, elementId);
        btnPreviousMonth.id = elementsMetaData.primaryNavigationViewPrevious.id;
        btnPreviousMonth.innerHTML = ICONS.PREVIOUS;
        btnPreviousMonth.classList.add(elementsMetaData.primaryNavigationViewPrevious.class);
        calendarNavigation.appendChild(btnPreviousMonth);
        btnPreviousMonth.addEventListener("click", (event) => {
            dailySelectorHelper._calendarNavigation(event.currentTarget, NAVIGATION.PREVIOUS, options);
        });
        btnPreviousMonth.style.color = primaryColor;
        // Calendar month year title
        let title = dailySelectorHelper._createElement(ELEMENTS.H2_ELEMENT, elementId);
        title.id = elementsMetaData.primaryNavigationTitle.id;
        title.classList.add(elementsMetaData.primaryNavigationTitle.class);
        calendarNavigation.appendChild(title);
        title.style.color = primaryColor;
        title.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            dailySelectorHelper._toggleCalendarViews(calendarContainer);
        });
        // Calendar next month
        let btnNextMonth = dailySelectorHelper._createElement(ELEMENTS.BUTTON_ELEMENT, elementId);
        btnNextMonth.id = elementsMetaData.primaryNavigationViewNext.id;
        btnNextMonth.innerHTML = ICONS.NEXT;
        btnNextMonth.classList.add(elementsMetaData.primaryNavigationViewNext.class);
        calendarNavigation.appendChild(btnNextMonth);
        btnNextMonth.addEventListener("click", (event) => {
            dailySelectorHelper._calendarNavigation(event.currentTarget, NAVIGATION.NEXT, options);
        });
        btnNextMonth.style.color = primaryColor;
        // Calendar body
        let calendarBody = dailySelectorHelper._createElement(ELEMENTS.DIV_ELEMENT, elementId);
        calendarBody.id = elementsMetaData.primaryBody.id;
        calendarBody.classList.add(elementsMetaData.primaryBody.class);
        calendarMain.appendChild(calendarBody);
        // year view screen elements
        // Calendar year naviagation
        let calendarYearNavigation = dailySelectorHelper._createElement(ELEMENTS.DIV_ELEMENT, elementId);
        calendarYearNavigation.id = elementsMetaData.secondaryNavigationView.id;
        calendarYearNavigation.classList.add(elementsMetaData.secondaryNavigationView.class);
        calendarPastYear.appendChild(calendarYearNavigation);
        calendarYearNavigation.style.color = primaryColor;
        // back
        let btnCalendarBack = dailySelectorHelper._createElement(ELEMENTS.BUTTON_ELEMENT, elementId);
        btnCalendarBack.innerHTML = ICONS.PREVIOUS;
        btnCalendarBack.classList.add(elementsMetaData.primaryNavigationViewPrevious.class);
        calendarYearNavigation.appendChild(btnCalendarBack);
        btnCalendarBack.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            dailySelectorHelper._toggleCalendarViews(calendarContainer);
        });
        btnCalendarBack.style.color = primaryColor;
        // Calendar month year title
        let yearTitle = dailySelectorHelper._createElement(ELEMENTS.H2_ELEMENT, elementId);
        yearTitle.id = elementsMetaData.secondaryNavigationTitle.id;
        yearTitle.classList.add(elementsMetaData.secondaryNavigationTitle.class);
        yearTitle.style.color = primaryColor;
        calendarYearNavigation.appendChild(yearTitle);
        // Search text box
        let searchYearInput = dailySelectorHelper._createElement(ELEMENTS.INPUT_ELEMENT, elementId);
        searchYearInput.id = elementsMetaData.yearSearch.id;
        dailySelectorHelper._setAttributesToElement(searchYearInput, "type", "text");
        dailySelectorHelper._setAttributesToElement(searchYearInput, "placeholder", "Search year...");
        dailySelectorHelper._setAttributesToElement(searchYearInput, "autocomplete", "Off");
        searchYearInput.classList.add(elementsMetaData.yearSearch.class, "hide");
        calendarYearNavigation.appendChild(searchYearInput);
        searchYearInput.addEventListener("input", (event) => {
            dailySelectorHelper._filterYearList(event.currentTarget);
        });
        // Search year
        let btnSearch = dailySelectorHelper._createElement(ELEMENTS.BUTTON_ELEMENT, elementId);
        btnSearch.id = elementsMetaData.searchButton.id;
        btnSearch.innerHTML = ICONS.SEARCH;
        btnSearch.classList.add(elementsMetaData.searchButton.class);
        btnSearch.style.color = primaryColor;
        calendarYearNavigation.appendChild(btnSearch);
        btnSearch.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (searchYearInput.classList.contains("hide")) {
                yearTitle.classList.add("hide");
                searchYearInput.classList.remove("hide");
                btnSearch.innerHTML = ICONS.CANCEL;
            }
            else {
                searchYearInput.classList.add("hide");
                yearTitle.classList.remove("hide");
                btnSearch.innerHTML = ICONS.SEARCH;
            }
        });
        // Calendar body
        let calendarYearBody = dailySelectorHelper._createElement(ELEMENTS.DIV_ELEMENT, elementId);
        calendarYearBody.id = elementsMetaData.secondaryBody.id;
        calendarYearBody.classList.add(elementsMetaData.secondaryBody.class);
        calendarPastYear.appendChild(calendarYearBody);
        // Calendar action container
        let calendarAction = dailySelectorHelper._createElement(ELEMENTS.DIV_ELEMENT, elementId);
        calendarAction.id = elementsMetaData.actionContainer.id;
        calendarAction.classList.add(elementsMetaData.actionContainer.class);
        calendarContainer.appendChild(calendarAction);
        // clear button
        let btnClear = dailySelectorHelper._createElement(ELEMENTS.BUTTON_ELEMENT, elementId);
        calendarAction.appendChild(btnClear);
        btnClear.textContent = ACTION.CLEAR;
        btnClear.style.color = primaryColor;
        btnClear.addEventListener("click", (event) => {
            event.preventDefault();
            const elementId = dailySelectorHelper._getElementId(event.currentTarget);
            let dateElement = document.getElementById(elementId);
            dateElement.value = "";
            dailySelectorModalHelper._closeModal(dateElement);
            dailySelectorEventsHelper._createEvent(dateElement, EVENTS.CLEAR, {});
        });
        // today button
        let btnToday = dailySelectorHelper._createElement(ELEMENTS.BUTTON_ELEMENT, elementId);
        calendarAction.appendChild(btnToday);
        btnToday.textContent = ACTION.TODAY;
        btnToday.style.color = primaryColor;
        let today = new Date();
        if (((_c = options === null || options === void 0 ? void 0 : options.year) === null || _c === void 0 ? void 0 : _c.max) !== undefined) {
            if (((_d = options === null || options === void 0 ? void 0 : options.year) === null || _d === void 0 ? void 0 : _d.max) !== today.getFullYear()) {
                btnToday.classList.add("hide");
            }
        }
        btnToday.addEventListener("click", (event) => {
            event.preventDefault();
            let currentMonth = today.getMonth();
            let currentYear = today.getFullYear();
            dailySelectorHelper._updateCalendar(options, currentYear, currentMonth);
            let view_1 = document.getElementById(elementsMetaData.primaryView.id);
            let view_2 = document.getElementById(elementsMetaData.secondaryView.id);
            if (view_1.classList.contains("hide")) {
                view_1.classList.remove("hide");
                view_2.classList.add("hide");
            }
        });
        // cancel button
        let btnCancel = dailySelectorHelper._createElement(ELEMENTS.BUTTON_ELEMENT, elementId);
        calendarAction.appendChild(btnCancel);
        btnCancel.textContent = ACTION.CANCEL;
        btnCancel.style.color = primaryColor;
        btnCancel.addEventListener("click", (event) => {
            event.preventDefault();
            const elementId = dailySelectorHelper._getElementId(event.currentTarget);
            let dateElement = document.getElementById(elementId);
            dailySelectorModalHelper._closeModal(dateElement);
            dailySelectorEventsHelper._createEvent(dateElement, EVENTS.CANCEL, {});
        });
        // ok button
        let btnOk = dailySelectorHelper._createElement(ELEMENTS.BUTTON_ELEMENT, elementId);
        calendarAction.appendChild(btnOk);
        btnOk.textContent = ACTION.OK;
        btnOk.style.color = primaryColor;
        btnOk.addEventListener("click", (event) => {
            event.preventDefault();
            const elementId = dailySelectorHelper._getElementId(event.currentTarget);
            let dateElement = document.getElementById(elementId);
            dailySelectorHelper._getSelectedDate(dateElement, displayFormat);
            dailySelectorModalHelper._closeModal(dateElement);
            dailySelectorEventsHelper._createEvent(dateElement, EVENTS.OK, {});
        });
        // Calendar footer
        let calendarFooter = dailySelectorHelper._createElement(ELEMENTS.DIV_ELEMENT, elementId);
        calendarFooter.classList.add(elementsMetaData.footer.class);
        calendarContainer.appendChild(calendarFooter);
        calendarFooter.style.backgroundColor = primaryColor;
    },
    // creates a calendar header
    _createCalendarHeader: (calendarContainer, options) => {
        var _a, _b;
        let elementId = dailySelectorHelper._getElementId(calendarContainer);
        let primaryColor = ((_a = options === null || options === void 0 ? void 0 : options.color) === null || _a === void 0 ? void 0 : _a.primary) === undefined
            ? defaultColorOptions.primary
            : (_b = options === null || options === void 0 ? void 0 : options.color) === null || _b === void 0 ? void 0 : _b.primary;
        let calendarHeader = dailySelectorHelper._createElement(ELEMENTS.DIV_ELEMENT, elementId);
        calendarHeader.id = elementsMetaData.header.id;
        calendarHeader.style.backgroundColor = primaryColor;
        calendarHeader.classList.add(elementsMetaData.header.class);
        calendarHeader.style.removeProperty("padding");
        calendarHeader.style.removeProperty("height");
        if (options.includeHeader !== undefined && options.includeHeader === true) {
            let dateDiv = dailySelectorHelper._createElement(ELEMENTS.DIV_ELEMENT, elementId);
            dateDiv.id = elementsMetaData.headerDate.id;
            dateDiv.classList.add(elementsMetaData.headerDate.class);
            let spanDate = dailySelectorHelper._createElement(ELEMENTS.SPAN_ELEMENT, elementId);
            dateDiv.appendChild(spanDate);
            let yearDiv = dailySelectorHelper._createElement(ELEMENTS.DIV_ELEMENT, elementId);
            yearDiv.id = elementsMetaData.headerYear.id;
            yearDiv.classList.add(elementsMetaData.headerYear.class);
            let spanYear = dailySelectorHelper._createElement(ELEMENTS.SPAN_ELEMENT, elementId);
            yearDiv.appendChild(spanYear);
            calendarHeader.style.padding = "28px 20px 16px";
            calendarHeader.appendChild(dateDiv);
            calendarHeader.appendChild(yearDiv);
        }
        else {
            calendarHeader.style.height = "10px";
        }
        calendarContainer.appendChild(calendarHeader);
    },
    // set calendar's navigation previous month and next month
    _calendarNavigation: (currentTarget, navigation, options) => {
        let elementId = dailySelectorHelper._getElementId(currentTarget);
        let dateElement = document.getElementById(elementId);
        let currentMonth = parseInt(dailySelectorHelper._getAttributesFromElement(dateElement, "currentMonth"));
        let currentYear = parseInt(dailySelectorHelper._getAttributesFromElement(dateElement, "currentYear"));
        if (NAVIGATION.PREVIOUS === navigation) {
            if (currentMonth === 0) {
                currentMonth = 11;
                currentYear--;
            }
            else {
                currentMonth--;
            }
            dailySelectorHelper._updateCalendar(options, currentYear, currentMonth);
        }
        else if (NAVIGATION.NEXT === navigation) {
            if (currentMonth === 11) {
                currentMonth = 0;
                currentYear++;
            }
            else {
                currentMonth++;
            }
            dailySelectorHelper._updateCalendar(options, currentYear, currentMonth);
        }
    },
    // initialize view on start point
    _initializeViews: (calendarContainer, initialViewId) => {
        let view_1 = document.getElementById(elementsMetaData.primaryView.id);
        let view_2 = document.getElementById(elementsMetaData.secondaryView.id);
        dailySelectorHelper._setAttributesToElement(calendarContainer, "display", initialViewId);
        if (initialViewId === elementsMetaData.primaryView.id) {
            view_1.classList.remove("hide");
            view_2.classList.add("hide");
        }
        else if (initialViewId === elementsMetaData.secondaryView.id) {
            view_2.classList.remove("hide");
            view_1.classList.add("hide");
        }
    },
    // toggle view
    _toggleCalendarViews: (calendarContainer) => {
        let view_1 = document.getElementById(elementsMetaData.primaryView.id);
        let view_2 = document.getElementById(elementsMetaData.secondaryView.id);
        view_1.classList.add("hide");
        view_2.classList.add("hide");
        let viewId = dailySelectorHelper._getAttributesFromElement(calendarContainer, "display");
        if (viewId === view_1.id) {
            view_2.classList.remove("hide");
            dailySelectorHelper._setAttributesToElement(calendarContainer, "display", view_2.id);
        }
        else if (viewId === view_2.id) {
            view_1.classList.remove("hide");
            dailySelectorHelper._setAttributesToElement(calendarContainer, "display", view_1.id);
        }
    },
    // updates calendar on previous and next
    _updateCalendar: (options, currentYear, currentMonth) => {
        var _a, _b, _c, _d;
        options = JSON.parse(sessionStorage.getItem(`${options.elementId}-ds-option`));
        let primaryColor = ((_a = options === null || options === void 0 ? void 0 : options.color) === null || _a === void 0 ? void 0 : _a.primary) === undefined
            ? defaultColorOptions.primary
            : (_b = options === null || options === void 0 ? void 0 : options.color) === null || _b === void 0 ? void 0 : _b.primary;
        let secondaryColor = ((_c = options === null || options === void 0 ? void 0 : options.color) === null || _c === void 0 ? void 0 : _c.secondary) === undefined
            ? defaultColorOptions.secondary
            : (_d = options === null || options === void 0 ? void 0 : options.color) === null || _d === void 0 ? void 0 : _d.secondary;
        const calendarDays = document.getElementById(elementsMetaData.primaryBody.id);
        const elementId = dailySelectorHelper._getElementId(calendarDays);
        let dateElement = document.getElementById(elementId);
        dailySelectorHelper._setAttributesToElement(dateElement, "currentMonth", currentMonth.toString());
        dailySelectorHelper._setAttributesToElement(dateElement, "currentYear", currentYear.toString());
        calendarDays.innerHTML = `
          <div class="week-header" style="background-color:${primaryColor}">Sun</div>
          <div class="week-header" style="background-color:${primaryColor}">Mon</div>
          <div class="week-header" style="background-color:${primaryColor}">Tue</div>
          <div class="week-header" style="background-color:${primaryColor}">Wed</div>
          <div class="week-header" style="background-color:${primaryColor}">Thu</div>
          <div class="week-header" style="background-color:${primaryColor}">Fri</div>
          <div class="week-header" style="background-color:${primaryColor}">Sat</div>
        `;
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const today = new Date();
        for (let i = 0; i < firstDay; i++) {
            calendarDays.innerHTML += `<div style="background-color:${secondaryColor}"></div>`;
        }
        for (let i = 1; i <= daysInMonth; i++) {
            const dayDiv = dailySelectorHelper._createElement(ELEMENTS.DIV_ELEMENT, elementId);
            dayDiv.classList.add("day");
            dailySelectorHelper._setSelectedDateColor(dayDiv, DATE.DEFAULT, options);
            dailySelectorHelper._setAttributesToElement(dayDiv, "currentMonth", currentMonth.toString());
            dailySelectorHelper._setAttributesToElement(dayDiv, "currentYear", currentYear.toString());
            dailySelectorHelper._setAttributesToElement(dayDiv, "currentDate", i.toString());
            let dt = new Date(currentYear, currentMonth, i);
            dailySelectorHelper._setAttributesToElement(dayDiv, "currentDay", dt.getDay().toString());
            dayDiv.textContent = i.toString();
            dayDiv.addEventListener("click", (event) => {
                event.preventDefault();
                event.stopPropagation();
                dailySelectorHelper._setSelectedDate(event.currentTarget, options);
            });
            if (i === today.getDate() &&
                currentMonth === today.getMonth() &&
                currentYear === today.getFullYear()) {
                dailySelectorHelper._setSelectedDateColor(dayDiv, DATE.TODAY, options);
            }
            calendarDays.appendChild(dayDiv);
        }
        dailySelectorHelper._updateHeader(currentYear, currentMonth, today.getDate(), today.getDay());
    },
    // create year list ui for secondary view
    _createYearList: (options) => {
        var _a, _b, _c, _d, _e, _f;
        options = JSON.parse(sessionStorage.getItem(`${options.elementId}-ds-option`));
        let primaryColor = ((_a = options === null || options === void 0 ? void 0 : options.color) === null || _a === void 0 ? void 0 : _a.primary) === undefined
            ? defaultColorOptions.primary
            : (_b = options === null || options === void 0 ? void 0 : options.color) === null || _b === void 0 ? void 0 : _b.primary;
        let secondaryColor = ((_c = options === null || options === void 0 ? void 0 : options.color) === null || _c === void 0 ? void 0 : _c.secondary) === undefined
            ? defaultColorOptions.secondary
            : (_d = options === null || options === void 0 ? void 0 : options.color) === null || _d === void 0 ? void 0 : _d.secondary;
        let currentYearContent = null;
        const calendarYearBody = document.getElementById(elementsMetaData.secondaryBody.id);
        let elementId = dailySelectorHelper._getElementId(calendarYearBody);
        let calendarYearsList = dailySelectorHelper._createElement(ELEMENTS.DIV_ELEMENT, elementId);
        calendarYearsList.id = elementsMetaData.yearList.id;
        calendarYearsList.classList.add(elementsMetaData.yearList.class);
        const currentTodayYear = new Date().getFullYear();
        const minYear = ((_e = options === null || options === void 0 ? void 0 : options.year) === null || _e === void 0 ? void 0 : _e.min) === undefined || isNaN(options.year.min)
            ? currentTodayYear - 10
            : options.year.min;
        const maxYear = ((_f = options === null || options === void 0 ? void 0 : options.year) === null || _f === void 0 ? void 0 : _f.max) === undefined || isNaN(options.year.max)
            ? currentTodayYear
            : options.year.max;
        for (let year = minYear; year <= maxYear; year++) {
            const yearItem = dailySelectorHelper._createElement(ELEMENTS.DIV_ELEMENT, elementId);
            yearItem.classList.add(elementsMetaData.yearItem.class);
            dailySelectorHelper._setAttributesToElement(yearItem, "currentYear", year.toString());
            const yearHeader = dailySelectorHelper._createElement(ELEMENTS.DIV_ELEMENT, elementId);
            yearHeader.classList.add(elementsMetaData.yearHeader.class);
            yearHeader.style.backgroundColor = primaryColor;
            yearHeader.textContent = year.toString();
            yearItem.appendChild(yearHeader);
            const yearContent = dailySelectorHelper._createElement(ELEMENTS.DIV_ELEMENT, elementId);
            yearContent.classList.add(elementsMetaData.yearContent.class);
            const yearGrid = dailySelectorHelper._createElement(ELEMENTS.DIV_ELEMENT, elementId);
            yearGrid.classList.add(elementsMetaData.yearGrid.class);
            for (let month = 0; month < 12; month++) {
                const monthItem = dailySelectorHelper._createElement(ELEMENTS.DIV_ELEMENT, elementId);
                monthItem.classList.add(elementsMetaData.monthItem.class);
                monthItem.style.backgroundColor = secondaryColor;
                monthItem.textContent = new Date(year, month).toLocaleString("default", { month: "short" });
                dailySelectorHelper._setAttributesToElement(monthItem, "currentMonth", month.toString());
                dailySelectorHelper._setAttributesToElement(monthItem, "currentYear", year.toString());
                dailySelectorHelper._setAttributesToElement(monthItem, "tabindex", "0");
                yearGrid.appendChild(monthItem);
                monthItem.addEventListener("click", (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    event.currentTarget.focus();
                    let elementId = dailySelectorHelper._getElementId(event.currentTarget);
                    let containerId = `${elementsMetaData.container.id}${elementId}`;
                    let container = document.getElementById(containerId);
                    let currentMonth = parseInt(dailySelectorHelper._getAttributesFromElement(event.currentTarget, "currentMonth"));
                    let currentYear = parseInt(dailySelectorHelper._getAttributesFromElement(event.currentTarget, "currentYear"));
                    dailySelectorHelper._updateCalendar(options, currentYear, currentMonth);
                    dailySelectorHelper._toggleCalendarViews(container);
                });
            }
            yearContent.appendChild(yearGrid);
            yearItem.appendChild(yearContent);
            yearHeader.addEventListener("click", (event) => {
                event.preventDefault();
                let currentYear = parseInt(dailySelectorHelper._getAttributesFromElement(event.currentTarget.parentElement, "currentYear"));
                let yearTitle = document.getElementById(elementsMetaData.secondaryNavigationTitle.id);
                yearTitle.textContent = currentYear.toString();
                if (yearContent.style.display === "block") {
                    yearContent.style.display = "none";
                    yearHeader.style.borderBottom = "1px solid #ccc";
                }
                else {
                    // Close previously open year content if any
                    if (currentYearContent) {
                        currentYearContent.style.display = "none";
                        currentYearContent.previousElementSibling.style.borderBottom = "1px solid #ccc";
                    }
                    yearContent.style.display = "block";
                    yearHeader.style.borderBottom = "none";
                    currentYearContent = yearContent;
                }
            });
            calendarYearsList.appendChild(yearItem);
        }
        calendarYearBody.appendChild(calendarYearsList);
    },
    // Filter the year list based on search input
    _filterYearList: (yearSearch) => {
        const searchValue = yearSearch.value.toLowerCase();
        const yearItems = document.querySelectorAll(".year-item");
        yearItems.forEach((item) => {
            const year = item.getAttribute("currentYear");
            if (year.includes(searchValue)) {
                item.style.display = "block";
            }
            else {
                item.style.display = "none";
            }
        });
    },
    // updates calendar ui header
    _updateHeader: (currentYear, currentMonth, currentDate, currentDay) => {
        const selectedDate = document.getElementById(elementsMetaData.headerDate.id);
        const selectedYear = document.getElementById(elementsMetaData.headerYear.id);
        const monthYear = document.getElementById(elementsMetaData.primaryNavigationTitle.id);
        monthYear.textContent = `${monthNames[currentMonth].name} ${currentYear}`;
        if (selectedYear !== null) {
            for (let i = 0; i < selectedYear.children.length; i++) {
                if (selectedYear.children[0].tagName.toLowerCase() ===
                    ELEMENTS.SPAN_ELEMENT) {
                    selectedYear.children[0].textContent = currentYear.toString();
                }
            }
        }
        if (selectedDate !== null) {
            for (let i = 0; i < selectedDate.children.length; i++) {
                if (selectedDate.children[0].tagName.toLowerCase() ===
                    ELEMENTS.SPAN_ELEMENT) {
                    selectedDate.children[0].textContent = `${dayNames[currentDay].name}, ${currentDate} ${monthNames[currentMonth].name}`;
                }
            }
        }
    },
    // gets selected date
    _getSelectedDate: (dateElement, displayFormat) => {
        let currentYear = parseInt(dailySelectorHelper._getAttributesFromElement(dateElement, "currentYear"));
        let currentMonth = parseInt(dailySelectorHelper._getAttributesFromElement(dateElement, "currentMonth"));
        let currentDate = parseInt(dailySelectorHelper._getAttributesFromElement(dateElement, "currentDate"));
        let currentDay = parseInt(dailySelectorHelper._getAttributesFromElement(dateElement, "currentDay"));
        let dateObj = {
            year: currentYear,
            month: currentMonth,
            date: currentDate,
            day: currentDay,
        };
        let selectedDate;
        if (displayFormat !== undefined && displayFormat !== "") {
            selectedDate = dailySelectorHelper._formatDate(dateObj, displayFormat);
        }
        else {
            selectedDate = new Date(currentYear, currentMonth, currentDate).toString();
        }
        dateElement.value = selectedDate;
    },
    // formats date
    _formatDate: (dateObj, format) => {
        let tokens = /(MMMM|MMM|MM|M|DD|D|BBBB|BBB|BB|B|YYYY|YY|-\/:,|.)/g;
        let matches = format.match(tokens);
        let output = "";
        for (let i = 0; i < matches.length; i++) {
            if (matches[i].trim() === "") {
                output += " ";
            }
            else {
                output += dailySelectorHelper._convertDateToFormat(dateObj, matches[i].trim());
            }
        }
        return output;
    },
    // convert date to selected format
    _convertDateToFormat: (dateObj, item) => {
        let currentYear = dateObj.year;
        let currentMonth = dateObj.month;
        let currentDate = dateObj.date;
        let currentDay = dateObj.day;
        switch (item) {
            case "DD":
                return currentDate;
            case "D":
                return currentDate;
            case "MMMM":
                return monthNames[currentMonth].name;
            case "MMM":
                return monthNames[currentMonth].shortName;
            case "MM":
            case "M":
                return currentMonth;
            case "YYYY":
                return currentYear.toString();
            case "YY":
                return currentYear.toString().slice(2, dateObj.year.toString().length);
            case "B":
            case "BB":
                return currentDay;
            case "BBB":
                return dayNames[currentDay].shortName;
            case "BBBB":
                return dayNames[currentDay].name;
            case "-":
            case "/":
            case ":":
            case ".":
            case ",":
                return item;
        }
    },
    // sets colors to dates
    _setSelectedDateColor: (item, DATE_SETTERS, options) => {
        var _a, _b, _c, _d;
        let primaryColor = ((_a = options === null || options === void 0 ? void 0 : options.color) === null || _a === void 0 ? void 0 : _a.primary) === undefined
            ? defaultColorOptions.primary
            : (_b = options === null || options === void 0 ? void 0 : options.color) === null || _b === void 0 ? void 0 : _b.primary;
        let secondaryColor = ((_c = options === null || options === void 0 ? void 0 : options.color) === null || _c === void 0 ? void 0 : _c.secondary) === undefined
            ? defaultColorOptions.secondary
            : (_d = options === null || options === void 0 ? void 0 : options.color) === null || _d === void 0 ? void 0 : _d.secondary;
        if (DATE_SETTERS === DATE.DEFAULT) {
            item.style.backgroundColor = secondaryColor;
            item.style.color = "#000";
        }
        else if (DATE_SETTERS === DATE.SELECT) {
            item.style.backgroundColor = primaryColor;
            item.style.color = "#fff";
            item.classList.add("selectedDay");
        }
        else if (DATE_SETTERS === DATE.TODAY) {
            item.style.border = `1px solid ${primaryColor}`;
            item.style.backgroundColor = "#fff";
            item.style.color = primaryColor;
            item.classList.add("daily-selector-today");
        }
    },
    // set selected date as attribute to date element
    _setSelectedDate: (item, options) => {
        const elementId = dailySelectorHelper._getElementId(item);
        let dateElement = document.getElementById(elementId);
        let selectedDates = document.getElementsByClassName("selectedDay");
        for (let i = 0; i < selectedDates.length; i++) {
            dailySelectorHelper._setSelectedDateColor(selectedDates[i], DATE.DEFAULT, options);
        }
        let todayDate = document.getElementsByClassName("daily-selector-today");
        for (let i = 0; i < todayDate.length; i++) {
            dailySelectorHelper._setSelectedDateColor(todayDate[i], DATE.TODAY, options);
        }
        dailySelectorHelper._setSelectedDateColor(item, DATE.SELECT, options);
        let currentYear = parseInt(dailySelectorHelper._getAttributesFromElement(item, "currentYear"));
        let currentMonth = parseInt(dailySelectorHelper._getAttributesFromElement(item, "currentMonth"));
        let currentDate = parseInt(dailySelectorHelper._getAttributesFromElement(item, "currentDate"));
        let currentDay = parseInt(dailySelectorHelper._getAttributesFromElement(item, "currentDay"));
        dailySelectorHelper._updateHeader(currentYear, currentMonth, currentDate, currentDay);
        dailySelectorHelper._setAttributesToElement(dateElement, "currentMonth", currentMonth.toString());
        dailySelectorHelper._setAttributesToElement(dateElement, "currentYear", currentYear.toString());
        dailySelectorHelper._setAttributesToElement(dateElement, "currentDate", currentDate.toString());
        dailySelectorHelper._setAttributesToElement(dateElement, "currentDay", currentDay.toString());
    },
};
const EVENTS = {
    OK: "okEvent",
    CANCEL: "cancelEvent",
    CLEAR: "clearEvent",
};
class Events {
    _createEvent(dateElement, eventName, obj) {
        if (eventName === EVENTS.OK) {
            obj.type = "ok";
        }
        else if (eventName === EVENTS.CANCEL) {
            obj.type = "cancel";
        }
        else if (eventName === EVENTS.CLEAR) {
            obj.type = "clear";
        }
        obj.selectedValue = dateElement.value;
        const dailySelectorEvent = new CustomEvent(eventName, {
            detail: obj,
            bubbles: false,
            cancelable: false,
            composed: false,
        });
        dateElement.dispatchEvent(dailySelectorEvent);
    }
}
const dailySelectorEventsHelper = new Events();
// ===== EVENTS END =====
// ===== MODAL =====
class Modal {
    _createModal(content, closeOptions) {
        var _a, _b;
        const elementId = dailySelectorHelper._getElementId(content);
        const dateElement = document.getElementById(elementId);
        const modal = dailySelectorHelper._createElement(ELEMENTS.DIV_ELEMENT, elementId);
        modal.id = elementsMetaData.modal.id;
        modal.className = elementsMetaData.modal.class;
        const modalOverlay = dailySelectorHelper._createElement(ELEMENTS.DIV_ELEMENT, elementId);
        modalOverlay.id = elementsMetaData.modalOverlay.id;
        modalOverlay.classList.add(elementsMetaData.modalOverlay.class);
        this.closeOptions = closeOptions;
        const modalContent = dailySelectorHelper._createElement(ELEMENTS.DIV_ELEMENT, elementId);
        modalContent.id = elementsMetaData.modalContent.id;
        modalContent.className = elementsMetaData.modalContent.class;
        modalContent.appendChild(content);
        modal.appendChild(modalOverlay);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        const body = document.querySelector("body");
        body.classList.add("daily-selector-modal-active");
        const closeOnClickOutsideModal = (_a = this.closeOptions) === null || _a === void 0 ? void 0 : _a.closeOnClickOutsideModal;
        const closeOnKeyboardKeys = (_b = this.closeOptions) === null || _b === void 0 ? void 0 : _b.closeOnKeyboardKeys;
        if (closeOnClickOutsideModal === true) {
            modalOverlay.addEventListener("click", () => {
                this._closeModal(dateElement);
            });
        }
        if (closeOnKeyboardKeys === true) {
            document.onkeydown = (evt) => {
                evt = evt || window.event;
                let isEscape = false;
                if ("key" in evt) {
                    isEscape = evt.key === "Escape" || evt.key === "Esc";
                }
                else {
                    isEscape = evt.code === "Escape";
                }
                if (isEscape) {
                    this._closeModal(dateElement);
                }
            };
        }
    }
    _closeModal(dateElement) {
        const body = document.querySelector("body");
        body.classList.remove("daily-selector-modal-active");
        dailySelectorHelper._resetDateElement(dateElement);
    }
}
const dailySelectorModalHelper = new Modal();
// ===== MODAL END =====
