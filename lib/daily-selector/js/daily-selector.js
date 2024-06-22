var DailySelector = function () {};

const ELEMENTS = Object.freeze({
  DIV_ELEMENT: "div",
  SPAN_ELEMENT: "span",
  BUTTON_ELEMENT: "button",
  H2_ELEMENT: "h2",
  INPUT_ELEMENT: "input",
});

const ICONS = Object.freeze({
  PREVIOUS:
    "<svg class='h-8 w-8 text-red-500' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z'/><polyline points='15 6 9 12 15 18' /></svg>",
  NEXT: "<svg class='h-8 w-8 text-red-500'  width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z'/>  <polyline points='9 6 15 12 9 18' /></svg>",
  SEARCH:
    "<svg class='h-8 w-8 text-red-500' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z'/><circle cx='10' cy='10' r='7' /><line x1='21' y1='21' x2='15' y2='15' /></svg>",
  CANCEL:
    "<svg class='h-8 w-8 text-red-500'  width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>  <path stroke='none' d='M0 0h24v24H0z'/>  <line x1='18' y1='6' x2='6' y2='18' />  <line x1='6' y1='6' x2='18' y2='18' /></svg>",
});

const dayNames = [
  { id: 1, name: "Sunday", shortName: "Sun" },
  { id: 2, name: "Monday", shortName: "Mon" },
  { id: 3, name: "Tuesday", shortName: "Tue" },
  { id: 4, name: "Wednesday", shortName: "Wed" },
  { id: 5, name: "Thursday", shortName: "Thu" },
  { id: 6, name: "Friday", shortName: "Fri" },
  { id: 7, name: "Saturday", shortName: "Sat" },
];

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

const ACTION = Object.freeze({
  CLEAR: "CLEAR",
  OK: "OK",
  TODAY: "TODAY",
  CANCEL: "CANCEL",
});

const nameConstants = {
  HIDE_CLASS: "hide",
  ELEMENT_ID: "date-input",
};

const elementsMetaData = {
  container: {
    id: "daily_selector_container_",
    class: "daily-selector-container",
  },
  header: { id: "calendar_header", class: "calendar-header" },
  headerDate: { id: "selected_date", class: "date" },
  headerYear: { id: "selected_year", class: "year" },
  actionContainer: { id: "calendar_action", class: "calendar-action" },
  footer: { id: "calendar_footer", class: "calendar-footer" },
};

DailySelector.prototype = {
  initialize: function (options) {
    if (options.elementId !== undefined && options.elementId !== "") {
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
          _initializeViews(container, "calendar-main");
        }
        document.addEventListener("click", _closeBoxOutside);
      });
    } else {
      console.error("elementId is missing in options");
    }

    function _setElementId(element, id) {
      _setAttributesToElement(element, nameConstants.ELEMENT_ID, id);
    }

    function _setAttributesToElement(element, key, value) {
      element.setAttribute(key, value);
    }

    function _getAttributesFromElement(element, key) {
      return element.getAttribute(key);
    }

    function _removeAttributesFromElement(element, key) {
      return element.removeAttribute(key);
    }

    function _getElementId(element) {
      return _getAttributesFromElement(element, nameConstants.ELEMENT_ID);
    }

    function _createElement(ELEMENTS, elementId) {
      let element = document.createElement(ELEMENTS);
      _setElementId(element, elementId);
      return element;
    }

    // select ui based on user option, default is inline
    function _createContainer(options) {
      switch (options.theme) {
        case "popup":
          break;
        case "inline":
        default:
          return _createInlineContainer(options);
      }
    }

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
              container.classList.add(elementsMetaData.container.class);
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

    function _initializeViews(calendarContainer, initialViewId) {
      let view_1 = document.getElementById("calendar-main");
      let view_2 = document.getElementById("calendar-past-years");
      _setAttributesToElement(calendarContainer, "display", initialViewId);
      if (initialViewId === "calendar-main") {
        view_1.classList.remove(nameConstants.HIDE_CLASS);
        view_2.classList.add(nameConstants.HIDE_CLASS);
      } else if (initialViewId === "calendar-past-years") {
        view_2.classList.remove(nameConstants.HIDE_CLASS);
        view_1.classList.add(nameConstants.HIDE_CLASS);
      }
    }

    function _toggleCalendarViews(calendarContainer) {
      let view_1 = document.getElementById("calendar-main");
      let view_2 = document.getElementById("calendar-past-years");
      view_1.classList.add(nameConstants.HIDE_CLASS);
      view_2.classList.add(nameConstants.HIDE_CLASS);
      let viewId = _getAttributesFromElement(calendarContainer, "display");
      if (viewId === view_1.id) {
        view_2.classList.remove(nameConstants.HIDE_CLASS);
        _setAttributesToElement(calendarContainer, "display", view_2.id);
      } else if (viewId === view_2.id) {
        view_1.classList.remove(nameConstants.HIDE_CLASS);
        _setAttributesToElement(calendarContainer, "display", view_1.id);
      }
    }

    // creates a calendar ui
    function _createCalendar(calendarContainer, options) {
      let elementId = _getElementId(calendarContainer);
      let displayFormat = options.displayFormat;

      // Calendar header
      let calendarHeader = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
      calendarHeader.id = elementsMetaData.header.id;
      calendarHeader.classList.add(elementsMetaData.header.class);
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
      calendarMain.id = "calendar-main";
      calendarMain.classList.add("calendar-main");
      calendarContainer.appendChild(calendarMain);

      // year calendar view
      let calendarPastYear = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
      calendarPastYear.id = "calendar-past-years";
      calendarPastYear.classList.add("calendar-past-years");
      calendarContainer.appendChild(calendarPastYear);

      // month view screen elements
      // Calendar naviagation - month view
      let calendarNavigation = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
      calendarNavigation.id = "calendar-navigation";
      calendarNavigation.classList.add("calendar-navigation");
      calendarMain.appendChild(calendarNavigation);

      // Calendar previous month
      let btnPreviousMonth = _createElement(ELEMENTS.BUTTON_ELEMENT, elementId);
      btnPreviousMonth.id = "prev-month";
      btnPreviousMonth.innerHTML = ICONS.PREVIOUS;
      btnPreviousMonth.classList.add("icon");
      calendarNavigation.appendChild(btnPreviousMonth);
      btnPreviousMonth.addEventListener("click", function (event) {
        _calendarNavigation(this, NAVIGATION.PREVIOUS);
      });

      // Calendar month year title
      let title = _createElement(ELEMENTS.H2_ELEMENT, elementId);
      title.id = "month-year-title";
      calendarNavigation.appendChild(title);

      // Calendar next month
      let btnNextMonth = _createElement(ELEMENTS.BUTTON_ELEMENT, elementId);
      btnNextMonth.id = "next-month";
      btnNextMonth.innerHTML = ICONS.NEXT;
      btnNextMonth.classList.add("icon");
      calendarNavigation.appendChild(btnNextMonth);
      btnNextMonth.addEventListener("click", function () {
        _calendarNavigation(this, NAVIGATION.NEXT);
      });

      // Calendar body
      let calendarBody = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
      calendarBody.id = "calendar-days";
      calendarBody.classList.add("calendar-days");
      calendarMain.appendChild(calendarBody);

      // year view screen elements
      // Calendar year naviagation
      let calendarYearNavigation = _createElement(
        ELEMENTS.DIV_ELEMENT,
        elementId
      );
      calendarYearNavigation.id = "calendar-year-navigation";
      calendarYearNavigation.classList.add("calendar-year-navigation");
      calendarPastYear.appendChild(calendarYearNavigation);

      // Calendar month year title
      let yearTitle = _createElement(ELEMENTS.H2_ELEMENT, elementId);
      yearTitle.id = "year-title";
      yearTitle.classList.add("year-title");
      calendarYearNavigation.appendChild(yearTitle);

      // Search text box
      let searchYearInput = _createElement(ELEMENTS.INPUT_ELEMENT, elementId);
      searchYearInput.id = "year-search";
      _setAttributesToElement(searchYearInput, "type", "text");
      _setAttributesToElement(searchYearInput, "placeholder", "Search year...");
      _setAttributesToElement(searchYearInput, "autocomplete", "Off");
      searchYearInput.classList.add("search-bar", nameConstants.HIDE_CLASS);
      calendarYearNavigation.appendChild(searchYearInput);
      searchYearInput.addEventListener("input", function (event) {
        _filterYearList(searchYearInput);
      });

      // Search year
      let btnSearch = _createElement(ELEMENTS.BUTTON_ELEMENT, elementId);
      btnSearch.id = "btnSearch";
      btnSearch.innerHTML = ICONS.SEARCH;
      btnSearch.classList.add("icon");
      calendarYearNavigation.appendChild(btnSearch);
      btnSearch.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (searchYearInput.classList.contains(nameConstants.HIDE_CLASS)) {
          yearTitle.classList.add(nameConstants.HIDE_CLASS);
          searchYearInput.classList.remove(nameConstants.HIDE_CLASS);
          btnSearch.innerHTML = ICONS.SEARCH;
        } else {
          searchYearInput.classList.add(nameConstants.HIDE_CLASS);
          yearTitle.classList.remove(nameConstants.HIDE_CLASS);
          btnSearch.innerHTML = ICONS.SEARCH;
        }
      });

      // Calendar body
      let calendarYearBody = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
      calendarYearBody.id = "calendar-years";
      calendarYearBody.classList.add("calendar-years");
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
      btnClear.addEventListener("click", function (event) {
        event.preventDefault();
        const elementId = _getElementId(this);
        let dateElement = document.getElementById(elementId);
        dateElement.value = "";
        _resetDateElement(dateElement);
      });

      // today button
      let btnToday = _createElement(ELEMENTS.BUTTON_ELEMENT, elementId);
      calendarAction.appendChild(btnToday);
      btnToday.textContent = ACTION.TODAY;
      btnToday.addEventListener("click", function (event) {
        event.preventDefault();
        const elementId = _getElementId(this);
        let containerId = `${elementsMetaData.container.id}${elementId}`;
        let container = document.getElementById(containerId);
        let today = new Date();
        let currentMonth = today.getMonth();
        let currentYear = today.getFullYear();
        _updateCalendar(options, currentYear, currentMonth);
        let view_1 = document.getElementById("calendar-main");
        let view_2 = document.getElementById("calendar-past-years");
        if (view_1.classList.contains(nameConstants.HIDE_CLASS)) {
          view_1.classList.remove(nameConstants.HIDE_CLASS);
          view_2.classList.add(nameConstants.HIDE_CLASS);
        }
      });

      // cancel button
      let btnCancel = _createElement(ELEMENTS.BUTTON_ELEMENT, elementId);
      calendarAction.appendChild(btnCancel);
      btnCancel.textContent = ACTION.CANCEL;
      btnCancel.addEventListener("click", function (event) {
        event.preventDefault();
        const elementId = _getElementId(this);
        let dateElement = document.getElementById(elementId);
        _resetDateElement(dateElement);
      });

      // ok button
      let btnOk = _createElement(ELEMENTS.BUTTON_ELEMENT, elementId);
      calendarAction.appendChild(btnOk);
      btnOk.textContent = ACTION.OK;
      btnOk.addEventListener("click", function (event) {
        event.preventDefault();
        const elementId = _getElementId(this);
        let dateElement = document.getElementById(elementId);
        _getSelectedDate(dateElement, displayFormat);
        _resetDateElement(dateElement);
      });

      // Calendar footer
      let calendarFooter = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
      calendarFooter.classList.add(elementsMetaData.footer.class);
      calendarContainer.appendChild(calendarFooter);
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

    function _createYearList(options) {
      let currentYearContent = null;
      const calendarYearBody = document.getElementById("calendar-years");
      let elementId = _getElementId(calendarYearBody);

      let calendarYearsList = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
      calendarYearsList.id = "year-list";
      calendarYearsList.classList.add("year-list");
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
        yearItem.classList.add("year-item");
        _setAttributesToElement(yearItem, "currentYear", year);

        const yearHeader = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
        yearHeader.classList.add("year-header");
        yearHeader.textContent = year;
        yearItem.appendChild(yearHeader);

        const yearContent = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
        yearContent.classList.add("year-content");

        const yearGrid = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
        yearGrid.classList.add("year-grid");

        for (let month = 0; month < 12; month++) {
          const monthItem = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
          monthItem.classList.add("month-item");
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
          let yearTitle = document.getElementById("year-title");
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

    function _isDateValid(dateString) {
      const date = Date.parse(dateString);
      return !isNaN(date);
    }

    const NAVIGATION = Object.freeze({
      PREVIOUS: "PREVIOUS",
      NEXT: "NEXT",
    });

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

    function _updateCalendar(options, currentYear, currentMonth) {
      const calendarDays = document.getElementById("calendar-days");
      const elementId = _getElementId(calendarDays);

      let dateElement = document.getElementById(elementId);
      _setAttributesToElement(dateElement, "currentMonth", currentMonth);
      _setAttributesToElement(dateElement, "currentYear", currentYear);
      calendarDays.innerHTML = `
          <div class="header">Sun</div>
          <div class="header">Mon</div>
          <div class="header">Tue</div>
          <div class="header">Wed</div>
          <div class="header">Thu</div>
          <div class="header">Fri</div>
          <div class="header">Sat</div>
        `;

      const firstDay = new Date(currentYear, currentMonth, 1).getDay();
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
      const today = new Date();
      for (let i = 0; i < firstDay; i++) {
        calendarDays.innerHTML += `<div></div>`;
      }

      for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = _createElement(ELEMENTS.DIV_ELEMENT, elementId);
        dayDiv.classList.add("day");
        _setAttributesToElement(dayDiv, "currentMonth", currentMonth);
        _setAttributesToElement(dayDiv, "currentYear", currentYear);
        _setAttributesToElement(dayDiv, "currentDate", i);
        let dt = new Date(currentYear, currentMonth, i);
        _setAttributesToElement(dayDiv, "currentDay", dt.getDay());
        dayDiv.textContent = i;
        dayDiv.addEventListener("click", function (event) {
          event.preventDefault();
          event.stopPropagation();
          _setSelectedDate(this);
        });

        if (
          i === today.getDate() &&
          currentMonth === today.getMonth() &&
          currentYear === today.getFullYear()
        ) {
          dayDiv.classList.add("selectedDay");
        }

        calendarDays.appendChild(dayDiv);
      }
      _updateHeader(currentYear, currentMonth, today.getDate(), today.getDay());
    }

    function _setSelectedDate(item) {
      const elementId = _getElementId(item);
      let dateElement = document.getElementById(elementId);

      let selectedDates = document.getElementsByClassName("selectedDay");
      for (let i = 0; i < selectedDates.length; i++) {
        selectedDates[i].classList.remove("selectedDay");
      }
      item.classList.add("selectedDay");

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

    function _updateHeader(currentYear, currentMonth, currentDate, currentDay) {
      const selectedDate = document.getElementById(
        elementsMetaData.headerDate.id
      );
      const selectedYear = document.getElementById(
        elementsMetaData.headerYear.id
      );
      const monthYear = document.getElementById("month-year-title");

      monthYear.textContent = `${monthNames[currentMonth].name} ${currentYear}`;
      for (let i = 0; i < selectedYear.children.length; i++) {
        if (selectedYear.children[0].tagName.toLowerCase() === "span") {
          selectedYear.children[0].textContent = currentYear;
        }
      }
      for (let i = 0; i < selectedDate.children.length; i++) {
        if (selectedDate.children[0].tagName.toLowerCase() === "span") {
          selectedDate.children[0].textContent = `${dayNames[currentDay].name}, ${currentDate} ${monthNames[currentMonth].name}`;
        }
      }
    }

    function _closeBoxOutside(event) {
      let inputList = document.getElementsByClassName("daily-selector");
      for (let i = 0; i < inputList.length; i++) {
        let dateElement = document.getElementById(inputList[i].id);
        let container = document.getElementById(
          `${elementsMetaData.container.id}${inputList[i].id}`
        );
        if (container !== null) {
          if (
            !container.contains(event.target) &&
            event.target !== dateElement.id
          ) {
            _resetDateElement(dateElement);
            document.removeEventListener("click", _closeBoxOutside);
          }
        }
      }
    }

    function _resetDateElement(dateElement) {
      let parentDiv = dateElement.parentElement;
      let originalParent = parentDiv.parentElement;
      originalParent.appendChild(dateElement);
      parentDiv.remove();
      _removeAttributesFromElement(dateElement, "currentMonth");
      _removeAttributesFromElement(dateElement, "currentYear");
      _removeAttributesFromElement(dateElement, "currentDate");
      _removeAttributesFromElement(dateElement, "currentDay");
    }
  },
};
var dailySelector = new DailySelector();
