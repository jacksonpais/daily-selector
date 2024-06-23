var DailySelector = function () {
  this.primaryColor = "#000000";
  this.secondaryColor = "#e9e8e8";
};

// HTML elements
const ELEMENTS = Object.freeze({
  DIV_ELEMENT: "div",
  SPAN_ELEMENT: "span",
  BUTTON_ELEMENT: "button",
  H2_ELEMENT: "h2",
  INPUT_ELEMENT: "input",
});

// Icons
const ICONS = Object.freeze({
  PREVIOUS:
    "<svg class='h-8 w-8 text-red-500' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z'/><polyline points='15 6 9 12 15 18' /></svg>",
  NEXT: "<svg class='h-8 w-8 text-red-500'  width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z'/>  <polyline points='9 6 15 12 9 18' /></svg>",
  SEARCH:
    "<svg class='h-8 w-8 text-red-500' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z'/><circle cx='10' cy='10' r='7' /><line x1='21' y1='21' x2='15' y2='15' /></svg>",
  CANCEL:
    "<svg class='h-8 w-8 text-red-500'  width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>  <path stroke='none' d='M0 0h24v24H0z'/>  <line x1='18' y1='6' x2='6' y2='18' />  <line x1='6' y1='6' x2='18' y2='18' /></svg>",
});

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

// navigation button
const NAVIGATION = Object.freeze({
  PREVIOUS: "PREVIOUS",
  NEXT: "NEXT",
});

// button actions
const ACTION = Object.freeze({
  CLEAR: "CLEAR",
  OK: "OK",
  TODAY: "TODAY",
  CANCEL: "CANCEL",
});

// elemnts ids and classes
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
  modalContent: {
    id: "daily_selector_modal_content",
    class: "daily-selector-modal-content",
  },
};

// data attribute to save elements id
const nameConstants = {
  ELEMENT_ID: "date-input",
};

DailySelector.prototype = {
  // initialize daily selector
  initialize: function (options) {
    // validates option
    if (_validateOptions(options)) {
      let dateElement = document.getElementById(options.elementId);

      dateElement.addEventListener("click", function (event) {
        if (
          document.getElementById(
            `${elementsMetaData.container.id}${dateElement.id}`
          ) === null
        ) {
          event.preventDefault();
          event.stopPropagation();
          let container = _createContainer(options);

          let currentMonth = new Date().getMonth();
          let currentYear = new Date().getFullYear();
          let currentDate = new Date().getDate();
          let currentDay = new Date().getDay();

          _setAttributesToElement(dateElement, "currentMonth", currentMonth);
          _setAttributesToElement(dateElement, "currentYear", currentYear);
          _setAttributesToElement(dateElement, "currentDate", currentDate);
          _setAttributesToElement(dateElement, "currentDay", currentDay);
          _updateCalendar(options, currentYear, currentMonth);
          _createYearList(options);
          _initializeViews(container, elementsMetaData.primaryView.id);
        }
        document.addEventListener("click", _closeBoxOutside);
      });
    }

    // validates options for empty elements id and min max year
    function _validateOptions(options) {
      let rtn = true;
      if (options.elementId === undefined) {
        console.error("elementId is not defined");
        rtn = false;
      } else if (options.elementId !== undefined && options.elementId === "") {
        console.error("elementId is empty");
        rtn = false;
      } else if (
        options.elementId !== "" &&
        document.getElementById(options.elementId) === null
      ) {
        console.error("elementId is incorrect");
        rtn = false;
      }
      let isValidYear = true;
      let minYear = 0;
      let maxYear = 0;
      if (options?.year?.min === undefined || !isNaN(options.year.min)) {
        isValidYear = false;
      }
      if (options?.year?.max === undefined || !isNaN(options.year.max)) {
        isValidYear = false;
      }
      if (!isValidYear) {
        minYear = parseInt(options?.year?.min);
        maxYear = parseInt(options?.year?.max);
        if (minYear > maxYear) {
          console.error("max year must be greater than min year");
          rtn = false;
        }
      }
      if (options?.color?.primary !== undefined) {
        if (!CSS.supports("color", options?.color?.primary)) {
          console.error("Not a valid primary color");
        }
      }
      if (options?.color?.secondary !== undefined) {
        if (!CSS.supports("color", options?.color?.secondary)) {
          console.error("Not a valid secondary color");
        }
      }
      return rtn;
    }

    // set element id to date element
    function _setElementId(element, id) {
      _setAttributesToElement(element, nameConstants.ELEMENT_ID, id);
    }

    // get element id from date element
    function _getElementId(element) {
      return _getAttributesFromElement(element, nameConstants.ELEMENT_ID);
    }

    // set attributes to element
    function _setAttributesToElement(element, key, value) {
      element.setAttribute(key, value);
    }

    // get attributes from element
    function _getAttributesFromElement(element, key) {
      return element.getAttribute(key);
    }

    // remove attributes from element
    function _removeAttributesFromElement(element, key) {
      return element.removeAttribute(key);
    }

    // create element with element id as attribute
    function _createElement(ELEMENTS, elementId) {
      let element = document.createElement(ELEMENTS);
      _setElementId(element, elementId);
      return element;
    }

    // select ui based on user option, default is inline
    function _createContainer(options) {
      switch (options.theme) {
        case "popup":
          return _createPopupContainer(options);
        case "inline":
        default:
          return _createInlineContainer(options);
      }
    }

    // create inline ui
    function _createInlineContainer(options) {
      let elementId = options.elementId;
      let containerId = `${elementsMetaData.container.id}${elementId}`;
      let parentDiv = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
      let dateElement = document.getElementById(elementId);
      let originalParent = dateElement.parentElement;
      let container = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
      if (originalParent !== null) {
        if (originalParent.children.length > 0) {
          for (let i = 0; i < originalParent.children.length; i++) {
            if (originalParent.children[i].id === dateElement.id) {
              originalParent.removeChild(originalParent.children[i]);
              parentDiv.appendChild(dateElement);
              parentDiv.style.position = "relative";
              container.id = containerId;
              container.classList.add(
                elementsMetaData.container.class,
                "inline-container"
              );
              _createCalendar(container, options);
              parentDiv.appendChild(container);
              originalParent.appendChild(parentDiv);
              break;
            }
          }
        }
      }
      return container;
    }

    // create popup ui
    function _createPopupContainer(options) {
      let elementId = options.elementId;
      let containerId = `${elementsMetaData.container.id}${elementId}`;
      let parentDiv = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
      let dateElement = document.getElementById(elementId);
      let originalParent = dateElement.parentElement;
      let container = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
      if (originalParent !== null) {
        if (originalParent.children.length > 0) {
          for (let i = 0; i < originalParent.children.length; i++) {
            if (originalParent.children[i].id === dateElement.id) {
              originalParent.removeChild(originalParent.children[i]);
              parentDiv.appendChild(dateElement);
              container.id = containerId;
              container.classList.add(elementsMetaData.container.class);
              _createCalendar(container, options);
              _createModal(container);
              originalParent.appendChild(parentDiv);
              break;
            }
          }
        }
      }
      return container;
    }

    //create modal for popup theme
    function _createModal(content) {
      let elementId = _getElementId(content);
      let modal = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
      modal.id = elementsMetaData.modal.id;
      modal.className = elementsMetaData.modal.class;
      let modalContent = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
      modalContent.className = elementsMetaData.modalContent.class;
      modalContent.appendChild(content);
      modal.appendChild(modalContent);
      document.body.appendChild(modal);
      _actionModal(modal, MODAL_ACTIONS.OPEN);
    }

    // Modal actions
    const MODAL_ACTIONS = Object.freeze({
      OPEN: "block",
      CLOSE: "hide",
    });

    // open close modal
    function _actionModal(modal, MODAL_ACTIONS) {
      modal.style.display = "block";
    }

    // initialize view on start point
    function _initializeViews(calendarContainer, initialViewId) {
      let view_1 = document.getElementById(elementsMetaData.primaryView.id);
      let view_2 = document.getElementById(elementsMetaData.secondaryView.id);
      _setAttributesToElement(calendarContainer, "display", initialViewId);
      if (initialViewId === elementsMetaData.primaryView.id) {
        view_1.classList.remove("hide");
        view_2.classList.add("hide");
      } else if (initialViewId === elementsMetaData.secondaryView.id) {
        view_2.classList.remove("hide");
        view_1.classList.add("hide");
      }
    }

    // toggle view
    function _toggleCalendarViews(calendarContainer) {
      let view_1 = document.getElementById(elementsMetaData.primaryView.id);
      let view_2 = document.getElementById(elementsMetaData.secondaryView.id);
      view_1.classList.add("hide");
      view_2.classList.add("hide");
      let viewId = _getAttributesFromElement(calendarContainer, "display");
      if (viewId === view_1.id) {
        view_2.classList.remove("hide");
        _setAttributesToElement(calendarContainer, "display", view_2.id);
      } else if (viewId === view_2.id) {
        view_1.classList.remove("hide");
        _setAttributesToElement(calendarContainer, "display", view_1.id);
      }
    }

    // creates a calendar ui
    function _createCalendar(calendarContainer, options) {
      let elementId = _getElementId(calendarContainer);
      let displayFormat = options.displayFormat;
      let primaryColor =
        options?.color?.primary === undefined
          ? dailySelector.primaryColor
          : options?.color?.primary;
      let secondaryColor =
        options?.color?.secondary === undefined
          ? dailySelector.secondaryColor
          : options?.color?.secondary;

      // Calendar header
      let calendarHeader = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
      calendarHeader.id = elementsMetaData.header.id;
      calendarHeader.classList.add(elementsMetaData.header.class);
      calendarHeader.style.backgroundColor = primaryColor;

      let dateDiv = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
      dateDiv.id = elementsMetaData.headerDate.id;
      dateDiv.classList.add(elementsMetaData.headerDate.class);
      let spanDate = _createElement(ELEMENTS.SPAN_ELEMENT, elementId);
      dateDiv.appendChild(spanDate);
      let yearDiv = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
      yearDiv.id = elementsMetaData.headerYear.id;
      yearDiv.classList.add(elementsMetaData.headerYear.class);
      let spanYear = _createElement(ELEMENTS.SPAN_ELEMENT, elementId);
      yearDiv.appendChild(spanYear);
      calendarHeader.appendChild(dateDiv);
      calendarHeader.appendChild(yearDiv);
      calendarContainer.appendChild(calendarHeader);
      calendarHeader.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        _toggleCalendarViews(calendarContainer);
      });

      // month calendar view
      let calendarMain = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
      calendarMain.id = elementsMetaData.primaryView.id;
      calendarMain.classList.add(elementsMetaData.primaryView.class);
      calendarContainer.appendChild(calendarMain);

      // year calendar view
      let calendarPastYear = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
      calendarPastYear.id = elementsMetaData.secondaryView.id;
      calendarPastYear.classList.add(elementsMetaData.secondaryView.class);
      calendarContainer.appendChild(calendarPastYear);

      // month view screen elements
      // Calendar naviagation - month view
      let calendarNavigation = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
      calendarNavigation.id = elementsMetaData.primaryNavigationView.id;
      calendarNavigation.classList.add(
        elementsMetaData.primaryNavigationView.class
      );
      calendarMain.appendChild(calendarNavigation);
      calendarNavigation.style.color = primaryColor;

      // Calendar previous month
      let btnPreviousMonth = _createElement(ELEMENTS.BUTTON_ELEMENT, elementId);
      btnPreviousMonth.id = elementsMetaData.primaryNavigationViewPrevious.id;
      btnPreviousMonth.innerHTML = ICONS.PREVIOUS;
      btnPreviousMonth.classList.add(
        elementsMetaData.primaryNavigationViewPrevious.class
      );
      calendarNavigation.appendChild(btnPreviousMonth);
      btnPreviousMonth.addEventListener("click", function (event) {
        _calendarNavigation(this, NAVIGATION.PREVIOUS);
      });
      btnPreviousMonth.style.color = primaryColor;

      // Calendar month year title
      let title = _createElement(ELEMENTS.H2_ELEMENT, elementId);
      title.id = elementsMetaData.primaryNavigationTitle.id;
      title.classList.add(elementsMetaData.primaryNavigationTitle.class);
      calendarNavigation.appendChild(title);
      title.style.color = primaryColor;

      // Calendar next month
      let btnNextMonth = _createElement(ELEMENTS.BUTTON_ELEMENT, elementId);
      btnNextMonth.id = elementsMetaData.primaryNavigationViewNext.id;
      btnNextMonth.innerHTML = ICONS.NEXT;
      btnNextMonth.classList.add(
        elementsMetaData.primaryNavigationViewNext.class
      );
      calendarNavigation.appendChild(btnNextMonth);
      btnNextMonth.addEventListener("click", function () {
        _calendarNavigation(this, NAVIGATION.NEXT);
      });
      btnNextMonth.style.color = primaryColor;

      // Calendar body
      let calendarBody = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
      calendarBody.id = elementsMetaData.primaryBody.id;
      calendarBody.classList.add(elementsMetaData.primaryBody.class);
      calendarMain.appendChild(calendarBody);

      // year view screen elements
      // Calendar year naviagation
      let calendarYearNavigation = _createElement(
        ELEMENTS.DIV_ELEMENT,
        elementId
      );
      calendarYearNavigation.id = elementsMetaData.secondaryNavigationView.id;
      calendarYearNavigation.classList.add(
        elementsMetaData.secondaryNavigationView.class
      );
      calendarPastYear.appendChild(calendarYearNavigation);
      calendarYearNavigation.style.color = primaryColor;

      // Calendar month year title
      let yearTitle = _createElement(ELEMENTS.H2_ELEMENT, elementId);
      yearTitle.id = elementsMetaData.secondaryNavigationTitle.id;
      yearTitle.classList.add(elementsMetaData.secondaryNavigationTitle.class);
      yearTitle.style.color = primaryColor;
      calendarYearNavigation.appendChild(yearTitle);

      // Search text box
      let searchYearInput = _createElement(ELEMENTS.INPUT_ELEMENT, elementId);
      searchYearInput.id = elementsMetaData.yearSearch.id;
      _setAttributesToElement(searchYearInput, "type", "text");
      _setAttributesToElement(searchYearInput, "placeholder", "Search year...");
      _setAttributesToElement(searchYearInput, "autocomplete", "Off");
      searchYearInput.classList.add(elementsMetaData.yearSearch.class, "hide");
      calendarYearNavigation.appendChild(searchYearInput);
      searchYearInput.addEventListener("input", function (event) {
        _filterYearList(searchYearInput);
      });

      // Search year
      let btnSearch = _createElement(ELEMENTS.BUTTON_ELEMENT, elementId);
      btnSearch.id = elementsMetaData.searchButton.id;
      btnSearch.innerHTML = ICONS.SEARCH;
      btnSearch.classList.add(elementsMetaData.searchButton.class);
      btnSearch.style.color = primaryColor;
      calendarYearNavigation.appendChild(btnSearch);
      btnSearch.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (searchYearInput.classList.contains("hide")) {
          yearTitle.classList.add("hide");
          searchYearInput.classList.remove("hide");
          btnSearch.innerHTML = ICONS.SEARCH;
        } else {
          searchYearInput.classList.add("hide");
          yearTitle.classList.remove("hide");
          btnSearch.innerHTML = ICONS.SEARCH;
        }
      });

      // Calendar body
      let calendarYearBody = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
      calendarYearBody.id = elementsMetaData.secondaryBody.id;
      calendarYearBody.classList.add(elementsMetaData.secondaryBody.class);
      calendarPastYear.appendChild(calendarYearBody);

      // Calendar action container
      let calendarAction = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
      calendarAction.id = elementsMetaData.actionContainer.id;
      calendarAction.classList.add(elementsMetaData.actionContainer.class);
      calendarContainer.appendChild(calendarAction);

      // clear button
      let btnClear = _createElement(ELEMENTS.BUTTON_ELEMENT, elementId);
      calendarAction.appendChild(btnClear);
      btnClear.textContent = ACTION.CLEAR;
      btnClear.style.color = primaryColor;
      btnClear.addEventListener("click", function (event) {
        event.preventDefault();
        const elementId = _getElementId(this);
        let dateElement = document.getElementById(elementId);
        dateElement.value = "";
        _resetDateElement(dateElement, options.theme);
      });

      // today button
      let btnToday = _createElement(ELEMENTS.BUTTON_ELEMENT, elementId);
      calendarAction.appendChild(btnToday);
      btnToday.textContent = ACTION.TODAY;
      btnToday.style.color = primaryColor;
      let today = new Date();
      if (options?.year?.max !== undefined) {
        if (parseInt(options?.year?.max) !== today.getFullYear()) {
          btnToday.classList.add("hide");
        }
      }

      btnToday.addEventListener("click", function (event) {
        event.preventDefault();
        const elementId = _getElementId(this);
        let containerId = `${elementsMetaData.container.id}${elementId}`;
        let container = document.getElementById(containerId);
        let currentMonth = today.getMonth();
        let currentYear = today.getFullYear();
        _updateCalendar(options, currentYear, currentMonth);
        let view_1 = document.getElementById(elementsMetaData.primaryView);
        let view_2 = document.getElementById(elementsMetaData.secondaryView);
        if (view_1.classList.contains("hide")) {
          view_1.classList.remove("hide");
          view_2.classList.add("hide");
        }
      });

      // cancel button
      let btnCancel = _createElement(ELEMENTS.BUTTON_ELEMENT, elementId);
      calendarAction.appendChild(btnCancel);
      btnCancel.textContent = ACTION.CANCEL;
      btnCancel.style.color = primaryColor;
      btnCancel.addEventListener("click", function (event) {
        event.preventDefault();
        const elementId = _getElementId(this);
        let dateElement = document.getElementById(elementId);
        _resetDateElement(dateElement, options.theme);
      });

      // ok button
      let btnOk = _createElement(ELEMENTS.BUTTON_ELEMENT, elementId);
      calendarAction.appendChild(btnOk);
      btnOk.textContent = ACTION.OK;
      btnOk.style.color = primaryColor;
      btnOk.addEventListener("click", function (event) {
        event.preventDefault();
        const elementId = _getElementId(this);
        let dateElement = document.getElementById(elementId);
        _getSelectedDate(dateElement, displayFormat);
        _resetDateElement(dateElement, options.theme);
      });

      // Calendar footer
      let calendarFooter = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
      calendarFooter.classList.add(elementsMetaData.footer.class);
      calendarContainer.appendChild(calendarFooter);
      calendarFooter.style.backgroundColor = primaryColor;
    }

    // Filter the year list based on search input
    function _filterYearList(yearSearch) {
      const searchValue = yearSearch.value.toLowerCase();
      const yearItems = document.querySelectorAll(".year-item");

      yearItems.forEach((item) => {
        const year = item.getAttribute("currentYear");
        if (year.includes(searchValue)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    }

    // create year list ui for secondary view
    function _createYearList(options) {
      let primaryColor =
        options?.color?.primary === undefined
          ? dailySelector.primaryColor
          : options?.color?.primary;
      let secondaryColor =
        options?.color?.secondary === undefined
          ? dailySelector.secondaryColor
          : options?.color?.secondary;

      let currentYearContent = null;
      const calendarYearBody = document.getElementById(
        elementsMetaData.secondaryBody.id
      );
      let elementId = _getElementId(calendarYearBody);
      let calendarYearsList = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
      calendarYearsList.id = elementsMetaData.yearList.id;
      calendarYearsList.classList.add(elementsMetaData.yearList.class);
      const currentTodayYear = new Date().getFullYear();
      const minYear =
        options?.year?.min === undefined || isNaN(options.year.min)
          ? currentTodayYear - 10
          : options.year.min;
      const maxYear =
        options?.year?.max === undefined || isNaN(options.year.max)
          ? currentTodayYear
          : options.year.max;
      for (let year = minYear; year <= maxYear; year++) {
        const yearItem = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
        yearItem.classList.add(elementsMetaData.yearItem.class);
        _setAttributesToElement(yearItem, "currentYear", year);

        const yearHeader = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
        yearHeader.classList.add(elementsMetaData.yearHeader.class);
        yearHeader.style.backgroundColor = primaryColor;
        yearHeader.textContent = year;
        yearItem.appendChild(yearHeader);

        const yearContent = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
        yearContent.classList.add(elementsMetaData.yearContent.class);

        const yearGrid = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
        yearGrid.classList.add(elementsMetaData.yearGrid.class);

        for (let month = 0; month < 12; month++) {
          const monthItem = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
          monthItem.classList.add(elementsMetaData.monthItem.class);
          monthItem.style.backgroundColor = secondaryColor;
          monthItem.textContent = new Date(year, month).toLocaleString(
            "default",
            { month: "short" }
          );
          _setAttributesToElement(monthItem, "currentMonth", month);
          _setAttributesToElement(monthItem, "currentYear", year);
          _setAttributesToElement(monthItem, "tabindex", "0");
          yearGrid.appendChild(monthItem);
          monthItem.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            this.focus();
            let elementId = _getElementId(this);
            let containerId = `${elementsMetaData.container.id}${elementId}`;
            let container = document.getElementById(containerId);
            let currentMonth = parseInt(
              _getAttributesFromElement(this, "currentMonth")
            );
            let currentYear = parseInt(
              _getAttributesFromElement(this, "currentYear")
            );
            _updateCalendar(options, currentYear, currentMonth);
            _toggleCalendarViews(container);
          });
        }

        yearContent.appendChild(yearGrid);
        yearItem.appendChild(yearContent);

        yearHeader.addEventListener("click", function (event) {
          event.preventDefault();
          let currentYear = parseInt(
            _getAttributesFromElement(this.parentElement, "currentYear")
          );
          let yearTitle = document.getElementById(
            elementsMetaData.secondaryNavigationTitle.id
          );
          yearTitle.textContent = currentYear;
          if (yearContent.style.display === "block") {
            yearContent.style.display = "none";
            yearHeader.style.borderBottom = "1px solid #ccc";
          } else {
            // Close previously open year content if any
            if (currentYearContent) {
              currentYearContent.style.display = "none";
              currentYearContent.previousElementSibling.style.borderBottom =
                "1px solid #ccc";
            }
            yearContent.style.display = "block";
            yearHeader.style.borderBottom = "none";
            currentYearContent = yearContent;
          }
        });
        calendarYearsList.appendChild(yearItem);
      }
      calendarYearBody.appendChild(calendarYearsList);
    }

    // gets selected date
    function _getSelectedDate(dateElement, displayFormat) {
      let currentYear = parseInt(
        _getAttributesFromElement(dateElement, "currentYear")
      );
      let currentMonth = parseInt(
        _getAttributesFromElement(dateElement, "currentMonth")
      );
      let currentDate = parseInt(
        _getAttributesFromElement(dateElement, "currentDate")
      );
      let currentDay = parseInt(
        _getAttributesFromElement(dateElement, "currentDay")
      );
      let dateObj = {
        year: currentYear,
        month: currentMonth,
        date: currentDate,
        day: currentDay,
      };
      let selectedDate = undefined;
      if (displayFormat !== undefined && displayFormat !== "") {
        selectedDate = _formatDate(dateObj, displayFormat);
      } else {
        selectedDate = new Date(currentYear, currentMonth, currentDate);
      }
      dateElement.value = selectedDate;
    }

    // formats date
    function _formatDate(dateObj, format) {
      let tokens = /(MMMM|MMM|MM|M|DD|D|BBBB|BBB|BB|B|YYYY|YY|-\/:,|.)/g;
      let matches = format.match(tokens);
      let output = "";
      for (let i = 0; i < matches.length; i++) {
        if (matches[i].trim() === "") {
          output += " ";
        } else {
          output += _convertDateToFormat(dateObj, matches[i].trim());
        }
      }
      return output;
    }

    // convert date to selected format
    function _convertDateToFormat(dateObj, item) {
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
          return currentYear
            .toString()
            .slice(2, dateObj.year.toString().length);
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
        case ".":
        case ",":
          return item;
      }
    }

    // validates date
    function _isDateValid(dateString) {
      const date = Date.parse(dateString);
      return !isNaN(date);
    }

    // set calendar's navigation previous month and next month
    function _calendarNavigation(e, navigation) {
      let elementId = _getElementId(e);
      let dateElement = document.getElementById(elementId);
      let currentMonth = parseInt(
        _getAttributesFromElement(dateElement, "currentMonth")
      );
      let currentYear = parseInt(
        _getAttributesFromElement(dateElement, "currentYear")
      );
      if (NAVIGATION.PREVIOUS === navigation) {
        if (currentMonth === 0) {
          currentMonth = 11;
          currentYear--;
        } else {
          currentMonth--;
        }
        _updateCalendar(options, currentYear, currentMonth);
      } else if (NAVIGATION.NEXT === navigation) {
        if (currentMonth === 11) {
          currentMonth = 0;
          currentYear++;
        } else {
          currentMonth++;
        }
        _updateCalendar(options, currentYear, currentMonth);
      }
    }

    // updates calendar on previous and next
    function _updateCalendar(options, currentYear, currentMonth) {
      let primaryColor =
        options?.color?.primary === undefined
          ? dailySelector.primaryColor
          : options?.color?.primary;
      let secondaryColor =
        options?.color?.secondary === undefined
          ? dailySelector.secondaryColor
          : options?.color?.secondary;
      const calendarDays = document.getElementById(
        elementsMetaData.primaryBody.id
      );
      const elementId = _getElementId(calendarDays);

      let dateElement = document.getElementById(elementId);
      _setAttributesToElement(dateElement, "currentMonth", currentMonth);
      _setAttributesToElement(dateElement, "currentYear", currentYear);
      calendarDays.innerHTML = `
          <div class="header" style="background-color:${primaryColor}">Sun</div>
          <div class="header" style="background-color:${primaryColor}">Mon</div>
          <div class="header" style="background-color:${primaryColor}">Tue</div>
          <div class="header" style="background-color:${primaryColor}">Wed</div>
          <div class="header" style="background-color:${primaryColor}">Thu</div>
          <div class="header" style="background-color:${primaryColor}">Fri</div>
          <div class="header" style="background-color:${primaryColor}">Sat</div>
        `;

      const firstDay = new Date(currentYear, currentMonth, 1).getDay();
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
      const today = new Date();
      for (let i = 0; i < firstDay; i++) {
        calendarDays.innerHTML += `<div style="background-color:${secondaryColor}"></div>`;
      }

      for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
        dayDiv.classList.add("day");
        dayDiv.style.backgroundColor = secondaryColor;
        _setAttributesToElement(dayDiv, "currentMonth", currentMonth);
        _setAttributesToElement(dayDiv, "currentYear", currentYear);
        _setAttributesToElement(dayDiv, "currentDate", i);
        let dt = new Date(currentYear, currentMonth, i);
        _setAttributesToElement(dayDiv, "currentDay", dt.getDay());
        dayDiv.textContent = i;
        dayDiv.addEventListener("click", function (event) {
          event.preventDefault();
          event.stopPropagation();
          _setSelectedDate(this, options);
        });

        if (
          i === today.getDate() &&
          currentMonth === today.getMonth() &&
          currentYear === today.getFullYear()
        ) {
          dayDiv.classList.add("selectedDay");
          dayDiv.style.backgroundColor = primaryColor;
        }

        calendarDays.appendChild(dayDiv);
      }
      _updateHeader(currentYear, currentMonth, today.getDate(), today.getDay());
    }

    // set selected date as attribute to date element
    function _setSelectedDate(item, options) {
      const elementId = _getElementId(item);
      let dateElement = document.getElementById(elementId);

      let primaryColor =
        options?.color?.primary === undefined
          ? dailySelector.primaryColor
          : options?.color?.primary;
      let secondaryColor =
        options?.color?.secondary === undefined
          ? dailySelector.secondaryColor
          : options?.color?.secondary;

      let selectedDates = document.getElementsByClassName("selectedDay");
      for (let i = 0; i < selectedDates.length; i++) {
        selectedDates[i].style.backgroundColor = secondaryColor;
        selectedDates[i].classList.remove("selectedDay");
      }
      item.classList.add("selectedDay");
      item.style.backgroundColor = primaryColor;

      let currentYear = parseInt(
        _getAttributesFromElement(item, "currentYear")
      );
      let currentMonth = parseInt(
        _getAttributesFromElement(item, "currentMonth")
      );
      let currentDate = parseInt(
        _getAttributesFromElement(item, "currentDate")
      );
      let currentDay = parseInt(_getAttributesFromElement(item, "currentDay"));
      _updateHeader(currentYear, currentMonth, currentDate, currentDay);
      _setAttributesToElement(dateElement, "currentMonth", currentMonth);
      _setAttributesToElement(dateElement, "currentYear", currentYear);
      _setAttributesToElement(dateElement, "currentDate", currentDate);
      _setAttributesToElement(dateElement, "currentDay", currentDay);
    }

    // updates calendar ui header
    function _updateHeader(currentYear, currentMonth, currentDate, currentDay) {
      const selectedDate = document.getElementById(
        elementsMetaData.headerDate.id
      );
      const selectedYear = document.getElementById(
        elementsMetaData.headerYear.id
      );
      const monthYear = document.getElementById(
        elementsMetaData.primaryNavigationTitle.id
      );

      monthYear.textContent = `${monthNames[currentMonth].name} ${currentYear}`;
      for (let i = 0; i < selectedYear.children.length; i++) {
        if (
          selectedYear.children[0].tagName.toLowerCase() ===
          ELEMENTS.SPAN_ELEMENT
        ) {
          selectedYear.children[0].textContent = currentYear;
        }
      }
      for (let i = 0; i < selectedDate.children.length; i++) {
        if (
          selectedDate.children[0].tagName.toLowerCase() ===
          ELEMENTS.SPAN_ELEMENT
        ) {
          selectedDate.children[0].textContent = `${dayNames[currentDay].name}, ${currentDate} ${monthNames[currentMonth].name}`;
        }
      }
    }

    // close ui on out side click
    function _closeBoxOutside(event) {
      let inputList = document.getElementsByClassName("daily-selector");
      for (let i = 0; i < inputList.length; i++) {
        let dateElement = document.getElementById(inputList[i].id);
        let container = document.getElementById(
          `${elementsMetaData.container.id}${inputList[i].id}`
        );
        if (event.target.id !== elementsMetaData.modal.id) {
          if (container !== null) {
            if (
              !container.contains(event.target) &&
              event.target !== dateElement.id
            ) {
              _resetDateElement(dateElement, options.theme);
              document.removeEventListener("click", _closeBoxOutside);
            }
          }
        }
      }
    }

    // reset date element to original statge and remove all atrributes
    function _resetDateElement(dateElement, theme) {
      let parentDiv = dateElement.parentElement;
      let originalParent = parentDiv.parentElement;
      originalParent.appendChild(dateElement);
      parentDiv.remove();
      _removeAttributesFromElement(dateElement, "currentMonth");
      _removeAttributesFromElement(dateElement, "currentYear");
      _removeAttributesFromElement(dateElement, "currentDate");
      _removeAttributesFromElement(dateElement, "currentDay");
      if (theme === "popup") {
        document.getElementById(elementsMetaData.modal.id).remove();
      }
    }
  },
};
var dailySelector = new DailySelector();
