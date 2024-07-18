// ===== TYPES =====

type ElementsMetaData = {
  [key: string]: {
    id: string;
    class: string;
  };
};

type NameConstants = {
  ELEMENT_ID: string;
};

type MonthNames = {
  [key: number]: {
    id: number;
    name: string;
    shortName: string;
  };
};

type DayNames = {
  [key: number]: {
    id: number;
    name: string;
    shortName: string;
  };
};

type DateObject = {
  year: number;
  month: number;
  date: number;
  day: number;
};

// ===== TYPES END =====

// ===== OPTIONS =====

export interface Options {
  elementId: string;
  includeHeader?: boolean;
  displayFormat?: string;
  year?: YearOptions;
  color?: ColorOptions;
  closeOptions?: CloseOptions;
}

type YearOptions = {
  max?: number;
  min?: number;
};

type ColorOptions = {
  primary?: string;
  secondary?: string;
};

type CloseOptions = {
  closeOnClickOutsideModal?: boolean;
  closeOnKeyboardKeys?: boolean;
};

// ===== OPTIONS END =====

// ===== CONSTANTS =====

const defaultColorOptions: ColorOptions = {
  primary: "#000000",
  secondary: "#e9e8e8",
};

const elementsMetaData: ElementsMetaData = {
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

const nameConstants: NameConstants = {
  ELEMENT_ID: "date-input",
};

// month names object
const monthNames: MonthNames = [
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
const dayNames: DayNames = [
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

enum ELEMENTS {
  DIV_ELEMENT = "div",
  SPAN_ELEMENT = "span",
  BUTTON_ELEMENT = "button",
  H2_ELEMENT = "h2",
  INPUT_ELEMENT = "input",
}

// Icons
enum ICONS {
  PREVIOUS = "<svg width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z'/><polyline points='15 6 9 12 15 18' /></svg>",
  NEXT = "<svg width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z'/>  <polyline points='9 6 15 12 9 18' /></svg>",
  SEARCH = "<svg width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z'/><circle cx='10' cy='10' r='7' /><line x1='21' y1='21' x2='15' y2='15' /></svg>",
  CANCEL = "<svg width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>  <path stroke='none' d='M0 0h24v24H0z'/>  <line x1='18' y1='6' x2='6' y2='18' />  <line x1='6' y1='6' x2='18' y2='18' /></svg>",
}

// navigation button
enum NAVIGATION {
  PREVIOUS = "PREVIOUS",
  NEXT = "NEXT",
}

// button actions
enum ACTION {
  CLEAR = "CLEAR",
  OK = "OK",
  TODAY = "TODAY",
  CANCEL = "CANCEL",
}

// date select, highlight and default color setters
enum DATE {
  DEFAULT = "DEFAULT",
  SELECT = "SELECT",
  TODAY = "TODAY",
}

// ===== ENUMS END =====

class DailySelector {
  //initialize daily selector
  initialize(options: Options) {
    // validates option
    if (dailySelectorHelper._validateOptions(options)) {
      let dateElement: HTMLInputElement = document.getElementById(
        options.elementId
      ) as HTMLInputElement;
      dateElement.addEventListener("click", (event) => {
        if (
          document.getElementById(
            `${elementsMetaData.container.id}${dateElement.id}`
          ) === null
        ) {
          event.preventDefault();
          event.stopPropagation();
          let container = dailySelectorHelper._createContainer(options);
          let currentMonth: number = new Date().getMonth();
          let currentYear: number = new Date().getFullYear();
          let currentDate: number = new Date().getDate();
          let currentDay: number = new Date().getDay();
          const maxYear =
            options?.year?.max !== undefined ? options.year.max : currentYear;
          dailySelectorHelper._setAttributesToElement(
            dateElement,
            "currentMonth",
            currentMonth.toString()
          );
          dailySelectorHelper._setAttributesToElement(
            dateElement,
            "currentYear",
            currentYear.toString()
          );
          dailySelectorHelper._setAttributesToElement(
            dateElement,
            "currentDate",
            currentDate.toString()
          );
          dailySelectorHelper._setAttributesToElement(
            dateElement,
            "currentDay",
            currentDay.toString()
          );
          dailySelectorHelper._updateCalendar(options, maxYear, currentMonth);
          dailySelectorHelper._createYearList(options);
          dailySelectorHelper._initializeViews(
            container,
            elementsMetaData.primaryView.id
          );
        }
      });
    }
  }
}

const dailySelector = new DailySelector();
export { dailySelector };

const dailySelectorHelper = {
  // validates options for empty elements id and min max year
  _validateOptions: (options: Options): boolean => {
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
      minYear = options?.year?.min as number;
      maxYear = options?.year?.max as number;
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
    sessionStorage.setItem(
      `${options.elementId}-ds-option`,
      JSON.stringify(options)
    );
    return rtn;
  },

  // select ui based on user option, default is popup
  _createContainer: (options: Options): HTMLElement => {
    options = JSON.parse(
      sessionStorage.getItem(`${options.elementId}-ds-option`) as string
    );
    let elementId: string = options.elementId as string;
    let containerId = `${elementsMetaData.container.id}${elementId}`;
    let container = dailySelectorHelper._createElement(
      ELEMENTS.DIV_ELEMENT,
      elementId
    );
    container.id = containerId;
    container.classList.add(elementsMetaData.container.class);
    dailySelectorHelper._createCalendar(container, options);
    dailySelectorModalHelper._createModal(
      container,
      options.closeOptions as CloseOptions
    );
    return container;
  },

  // create element with element id as attribute
  _createElement: (ELEMENTS: ELEMENTS, elementId: string) => {
    let element = document.createElement(ELEMENTS);
    dailySelectorHelper._setElementId(element, elementId);
    return element;
  },

  // set element id to date element
  _setElementId: (element: HTMLElement, id: string) => {
    dailySelectorHelper._setAttributesToElement(
      element,
      nameConstants.ELEMENT_ID,
      id
    );
  },

  // set attributes to element
  _setAttributesToElement: (
    element: HTMLElement,
    key: string,
    value: string
  ) => {
    element.setAttribute(key, value);
  },

  // get element id from date element
  _getElementId: (element: HTMLElement) => {
    return dailySelectorHelper._getAttributesFromElement(
      element,
      nameConstants.ELEMENT_ID
    );
  },

  // get attributes from element
  _getAttributesFromElement: (element: HTMLElement, key: string) => {
    return element.getAttribute(key);
  },

  // reset date element to original statge and remove all atrributes
  _resetDateElement: (dateElement: HTMLElement) => {
    dailySelectorHelper._removeAttributesFromElement(
      dateElement,
      "currentMonth"
    );
    dailySelectorHelper._removeAttributesFromElement(
      dateElement,
      "currentYear"
    );
    dailySelectorHelper._removeAttributesFromElement(
      dateElement,
      "currentDate"
    );
    dailySelectorHelper._removeAttributesFromElement(dateElement, "currentDay");
    (
      document.getElementById(elementsMetaData.modal.id) as HTMLElement
    ).remove();
  },

  // remove attributes from element
  _removeAttributesFromElement: (element: HTMLElement, key: string) => {
    return element.removeAttribute(key);
  },

  // creates a calendar ui
  _createCalendar: (calendarContainer: HTMLElement, options: Options) => {
    let elementId: string = dailySelectorHelper._getElementId(
      calendarContainer
    ) as string;
    let displayFormat = options.displayFormat;
    let primaryColor =
      options?.color?.primary === undefined
        ? defaultColorOptions.primary
        : options?.color?.primary;

    dailySelectorHelper._createCalendarHeader(calendarContainer, options);

    // month calendar view
    let calendarMain = dailySelectorHelper._createElement(
      ELEMENTS.DIV_ELEMENT,
      elementId
    );
    calendarMain.id = elementsMetaData.primaryView.id;
    calendarMain.classList.add(elementsMetaData.primaryView.class);
    calendarContainer.appendChild(calendarMain);

    // year calendar view
    let calendarPastYear = dailySelectorHelper._createElement(
      ELEMENTS.DIV_ELEMENT,
      elementId
    );
    calendarPastYear.id = elementsMetaData.secondaryView.id;
    calendarPastYear.classList.add(elementsMetaData.secondaryView.class);
    calendarContainer.appendChild(calendarPastYear);

    // month view screen elements
    // Calendar naviagation - month view
    let calendarNavigation = dailySelectorHelper._createElement(
      ELEMENTS.DIV_ELEMENT,
      elementId
    );
    calendarNavigation.id = elementsMetaData.primaryNavigationView.id;
    calendarNavigation.classList.add(
      elementsMetaData.primaryNavigationView.class
    );
    calendarMain.appendChild(calendarNavigation);
    calendarNavigation.style.color = primaryColor as string;

    // Calendar previous month
    let btnPreviousMonth = dailySelectorHelper._createElement(
      ELEMENTS.BUTTON_ELEMENT,
      elementId
    );
    btnPreviousMonth.id = elementsMetaData.primaryNavigationViewPrevious.id;
    btnPreviousMonth.innerHTML = ICONS.PREVIOUS;
    btnPreviousMonth.classList.add(
      elementsMetaData.primaryNavigationViewPrevious.class
    );
    calendarNavigation.appendChild(btnPreviousMonth);
    btnPreviousMonth.addEventListener("click", (event: Event) => {
      dailySelectorHelper._calendarNavigation(
        event.currentTarget as HTMLElement,
        NAVIGATION.PREVIOUS,
        options
      );
    });

    btnPreviousMonth.style.color = primaryColor as string;

    // Calendar month year title
    let title = dailySelectorHelper._createElement(
      ELEMENTS.H2_ELEMENT,
      elementId
    );
    title.id = elementsMetaData.primaryNavigationTitle.id;
    title.classList.add(elementsMetaData.primaryNavigationTitle.class);
    calendarNavigation.appendChild(title);
    title.style.color = primaryColor as string;
    title.addEventListener("click", (event: Event) => {
      event.preventDefault();
      event.stopPropagation();
      dailySelectorHelper._toggleCalendarViews(calendarContainer);
    });

    // Calendar next month
    let btnNextMonth = dailySelectorHelper._createElement(
      ELEMENTS.BUTTON_ELEMENT,
      elementId
    );
    btnNextMonth.id = elementsMetaData.primaryNavigationViewNext.id;
    btnNextMonth.innerHTML = ICONS.NEXT;
    btnNextMonth.classList.add(
      elementsMetaData.primaryNavigationViewNext.class
    );
    calendarNavigation.appendChild(btnNextMonth);
    btnNextMonth.addEventListener("click", (event: Event) => {
      dailySelectorHelper._calendarNavigation(
        event.currentTarget as HTMLElement,
        NAVIGATION.NEXT,
        options
      );
    });
    btnNextMonth.style.color = primaryColor as string;

    // Calendar body
    let calendarBody = dailySelectorHelper._createElement(
      ELEMENTS.DIV_ELEMENT,
      elementId
    );
    calendarBody.id = elementsMetaData.primaryBody.id;
    calendarBody.classList.add(elementsMetaData.primaryBody.class);
    calendarMain.appendChild(calendarBody);

    // year view screen elements
    // Calendar year naviagation
    let calendarYearNavigation = dailySelectorHelper._createElement(
      ELEMENTS.DIV_ELEMENT,
      elementId
    );
    calendarYearNavigation.id = elementsMetaData.secondaryNavigationView.id;
    calendarYearNavigation.classList.add(
      elementsMetaData.secondaryNavigationView.class
    );
    calendarPastYear.appendChild(calendarYearNavigation);
    calendarYearNavigation.style.color = primaryColor as string;

    // back
    let btnCalendarBack = dailySelectorHelper._createElement(
      ELEMENTS.BUTTON_ELEMENT,
      elementId
    );
    btnCalendarBack.innerHTML = ICONS.PREVIOUS;
    btnCalendarBack.classList.add(
      elementsMetaData.primaryNavigationViewPrevious.class
    );
    calendarYearNavigation.appendChild(btnCalendarBack);
    btnCalendarBack.addEventListener("click", (event: Event) => {
      event.preventDefault();
      event.stopPropagation();
      dailySelectorHelper._toggleCalendarViews(calendarContainer);
    });
    btnCalendarBack.style.color = primaryColor as string;

    // Calendar month year title
    let yearTitle = dailySelectorHelper._createElement(
      ELEMENTS.H2_ELEMENT,
      elementId
    );
    yearTitle.id = elementsMetaData.secondaryNavigationTitle.id;
    yearTitle.classList.add(elementsMetaData.secondaryNavigationTitle.class);
    yearTitle.style.color = primaryColor as string;
    calendarYearNavigation.appendChild(yearTitle);

    // Search text box
    let searchYearInput = dailySelectorHelper._createElement(
      ELEMENTS.INPUT_ELEMENT,
      elementId
    );
    searchYearInput.id = elementsMetaData.yearSearch.id;
    dailySelectorHelper._setAttributesToElement(
      searchYearInput,
      "type",
      "text"
    );
    dailySelectorHelper._setAttributesToElement(
      searchYearInput,
      "placeholder",
      "Search year..."
    );
    dailySelectorHelper._setAttributesToElement(
      searchYearInput,
      "autocomplete",
      "Off"
    );
    searchYearInput.classList.add(elementsMetaData.yearSearch.class, "hide");
    calendarYearNavigation.appendChild(searchYearInput);
    searchYearInput.addEventListener("input", (event: Event) => {
      dailySelectorHelper._filterYearList(
        event.currentTarget as HTMLInputElement
      );
    });

    // Search year
    let btnSearch = dailySelectorHelper._createElement(
      ELEMENTS.BUTTON_ELEMENT,
      elementId
    );
    btnSearch.id = elementsMetaData.searchButton.id;
    btnSearch.innerHTML = ICONS.SEARCH;
    btnSearch.classList.add(elementsMetaData.searchButton.class);
    btnSearch.style.color = primaryColor as string;
    calendarYearNavigation.appendChild(btnSearch);
    btnSearch.addEventListener("click", (event: Event) => {
      event.preventDefault();
      event.stopPropagation();
      if (searchYearInput.classList.contains("hide")) {
        yearTitle.classList.add("hide");
        searchYearInput.classList.remove("hide");
        btnSearch.innerHTML = ICONS.CANCEL;
      } else {
        searchYearInput.classList.add("hide");
        yearTitle.classList.remove("hide");
        btnSearch.innerHTML = ICONS.SEARCH;
      }
    });

    // Calendar body
    let calendarYearBody = dailySelectorHelper._createElement(
      ELEMENTS.DIV_ELEMENT,
      elementId
    );
    calendarYearBody.id = elementsMetaData.secondaryBody.id;
    calendarYearBody.classList.add(elementsMetaData.secondaryBody.class);
    calendarPastYear.appendChild(calendarYearBody);

    // Calendar action container
    let calendarAction = dailySelectorHelper._createElement(
      ELEMENTS.DIV_ELEMENT,
      elementId
    );
    calendarAction.id = elementsMetaData.actionContainer.id;
    calendarAction.classList.add(elementsMetaData.actionContainer.class);
    calendarContainer.appendChild(calendarAction);

    // clear button
    let btnClear = dailySelectorHelper._createElement(
      ELEMENTS.BUTTON_ELEMENT,
      elementId
    );
    calendarAction.appendChild(btnClear);
    btnClear.textContent = ACTION.CLEAR;
    btnClear.style.color = primaryColor as string;
    btnClear.addEventListener("click", (event: Event) => {
      event.preventDefault();
      const elementId: string = dailySelectorHelper._getElementId(
        event.currentTarget as HTMLButtonElement
      ) as string;
      let dateElement: HTMLInputElement = document.getElementById(
        elementId as string
      ) as HTMLInputElement;
      dateElement.value = "";
      dailySelectorModalHelper._closeModal(dateElement);
      dailySelectorEventsHelper._createEvent(dateElement, EVENTS.CLEAR, {});
    });

    // today button
    let btnToday = dailySelectorHelper._createElement(
      ELEMENTS.BUTTON_ELEMENT,
      elementId
    );
    calendarAction.appendChild(btnToday);
    btnToday.textContent = ACTION.TODAY;
    btnToday.style.color = primaryColor as string;
    let today = new Date();
    if (options?.year?.max !== undefined) {
      if (options?.year?.max !== today.getFullYear()) {
        btnToday.classList.add("hide");
      }
    }

    btnToday.addEventListener("click", (event: Event) => {
      event.preventDefault();
      let currentMonth = today.getMonth();
      let currentYear = today.getFullYear();
      dailySelectorHelper._updateCalendar(options, currentYear, currentMonth);
      let view_1: HTMLElement = document.getElementById(
        elementsMetaData.primaryView.id
      ) as HTMLElement;
      let view_2: HTMLElement = document.getElementById(
        elementsMetaData.secondaryView.id
      ) as HTMLElement;
      if (view_1.classList.contains("hide")) {
        view_1.classList.remove("hide");
        view_2.classList.add("hide");
      }
    });

    // cancel button
    let btnCancel = dailySelectorHelper._createElement(
      ELEMENTS.BUTTON_ELEMENT,
      elementId
    );
    calendarAction.appendChild(btnCancel);
    btnCancel.textContent = ACTION.CANCEL;
    btnCancel.style.color = primaryColor as string;
    btnCancel.addEventListener("click", (event: Event) => {
      event.preventDefault();
      const elementId: string = dailySelectorHelper._getElementId(
        event.currentTarget as HTMLButtonElement
      ) as string;
      let dateElement: HTMLInputElement = document.getElementById(
        elementId
      ) as HTMLInputElement;
      dailySelectorModalHelper._closeModal(dateElement);
      dailySelectorEventsHelper._createEvent(dateElement, EVENTS.CANCEL, {});
    });

    // ok button
    let btnOk = dailySelectorHelper._createElement(
      ELEMENTS.BUTTON_ELEMENT,
      elementId
    );
    calendarAction.appendChild(btnOk);
    btnOk.textContent = ACTION.OK;
    btnOk.style.color = primaryColor as string;
    btnOk.addEventListener("click", (event: Event) => {
      event.preventDefault();
      const elementId: string = dailySelectorHelper._getElementId(
        event.currentTarget as HTMLButtonElement
      ) as string;
      let dateElement: HTMLInputElement = document.getElementById(
        elementId as string
      ) as HTMLInputElement;
      dailySelectorHelper._getSelectedDate(dateElement, displayFormat);
      dailySelectorModalHelper._closeModal(dateElement);
      dailySelectorEventsHelper._createEvent(dateElement, EVENTS.OK, {});
    });

    // Calendar footer
    let calendarFooter = dailySelectorHelper._createElement(
      ELEMENTS.DIV_ELEMENT,
      elementId
    );
    calendarFooter.classList.add(elementsMetaData.footer.class);
    calendarContainer.appendChild(calendarFooter);
    calendarFooter.style.backgroundColor = primaryColor as string;
  },

  // creates a calendar header
  _createCalendarHeader: (calendarContainer: HTMLElement, options: Options) => {
    let elementId: string = dailySelectorHelper._getElementId(
      calendarContainer
    ) as string;

    let primaryColor =
      options?.color?.primary === undefined
        ? defaultColorOptions.primary
        : options?.color?.primary;

    let calendarHeader: HTMLElement = dailySelectorHelper._createElement(
      ELEMENTS.DIV_ELEMENT,
      elementId
    ) as HTMLElement;
    calendarHeader.id = elementsMetaData.header.id;
    calendarHeader.style.backgroundColor = primaryColor as string;

    calendarHeader.classList.add(elementsMetaData.header.class);
    calendarHeader.style.removeProperty("padding");
    calendarHeader.style.removeProperty("height");

    if (options.includeHeader !== undefined && options.includeHeader === true) {
      let dateDiv = dailySelectorHelper._createElement(
        ELEMENTS.DIV_ELEMENT,
        elementId
      );
      dateDiv.id = elementsMetaData.headerDate.id;
      dateDiv.classList.add(elementsMetaData.headerDate.class);
      let spanDate = dailySelectorHelper._createElement(
        ELEMENTS.SPAN_ELEMENT,
        elementId as string
      );
      dateDiv.appendChild(spanDate);
      let yearDiv = dailySelectorHelper._createElement(
        ELEMENTS.DIV_ELEMENT,
        elementId as string
      );
      yearDiv.id = elementsMetaData.headerYear.id;
      yearDiv.classList.add(elementsMetaData.headerYear.class);
      let spanYear = dailySelectorHelper._createElement(
        ELEMENTS.SPAN_ELEMENT,
        elementId as string
      );
      yearDiv.appendChild(spanYear);
      calendarHeader.style.padding = "28px 20px 16px";
      calendarHeader.appendChild(dateDiv);
      calendarHeader.appendChild(yearDiv);
    } else {
      calendarHeader.style.height = "10px";
    }

    calendarContainer.appendChild(calendarHeader);
  },

  // set calendar's navigation previous month and next month
  _calendarNavigation: (
    currentTarget: HTMLElement,
    navigation: NAVIGATION,
    options: Options
  ) => {
    let elementId: string = dailySelectorHelper._getElementId(
      currentTarget
    ) as string;
    let dateElement: HTMLInputElement = document.getElementById(
      elementId
    ) as HTMLInputElement;
    let currentMonth = parseInt(
      dailySelectorHelper._getAttributesFromElement(
        dateElement,
        "currentMonth"
      ) as string
    );
    let currentYear = parseInt(
      dailySelectorHelper._getAttributesFromElement(
        dateElement,
        "currentYear"
      ) as string
    );
    if (NAVIGATION.PREVIOUS === navigation) {
      if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
      } else {
        currentMonth--;
      }
      dailySelectorHelper._updateCalendar(options, currentYear, currentMonth);
    } else if (NAVIGATION.NEXT === navigation) {
      if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
      } else {
        currentMonth++;
      }
      dailySelectorHelper._updateCalendar(options, currentYear, currentMonth);
    }
  },

  // initialize view on start point
  _initializeViews: (calendarContainer: HTMLElement, initialViewId: string) => {
    let view_1: HTMLElement = document.getElementById(
      elementsMetaData.primaryView.id
    ) as HTMLElement;
    let view_2: HTMLElement = document.getElementById(
      elementsMetaData.secondaryView.id
    ) as HTMLElement;
    dailySelectorHelper._setAttributesToElement(
      calendarContainer,
      "display",
      initialViewId
    );
    if (initialViewId === elementsMetaData.primaryView.id) {
      view_1.classList.remove("hide");
      view_2.classList.add("hide");
    } else if (initialViewId === elementsMetaData.secondaryView.id) {
      view_2.classList.remove("hide");
      view_1.classList.add("hide");
    }
  },

  // toggle view
  _toggleCalendarViews: (calendarContainer: HTMLElement) => {
    let view_1: HTMLElement = document.getElementById(
      elementsMetaData.primaryView.id
    ) as HTMLElement;
    let view_2: HTMLElement = document.getElementById(
      elementsMetaData.secondaryView.id
    ) as HTMLElement;
    view_1.classList.add("hide");
    view_2.classList.add("hide");
    let viewId = dailySelectorHelper._getAttributesFromElement(
      calendarContainer,
      "display"
    );
    if (viewId === view_1.id) {
      view_2.classList.remove("hide");
      dailySelectorHelper._setAttributesToElement(
        calendarContainer,
        "display",
        view_2.id
      );
    } else if (viewId === view_2.id) {
      view_1.classList.remove("hide");
      dailySelectorHelper._setAttributesToElement(
        calendarContainer,
        "display",
        view_1.id
      );
    }
  },

  // updates calendar on previous and next
  _updateCalendar: (
    options: Options,
    currentYear: number,
    currentMonth: number
  ) => {
    options = JSON.parse(
      sessionStorage.getItem(`${options.elementId}-ds-option`) as string
    );
    let primaryColor =
      options?.color?.primary === undefined
        ? defaultColorOptions.primary
        : options?.color?.primary;
    let secondaryColor =
      options?.color?.secondary === undefined
        ? defaultColorOptions.secondary
        : options?.color?.secondary;
    const calendarDays: HTMLElement = document.getElementById(
      elementsMetaData.primaryBody.id
    ) as HTMLElement;
    const elementId: string = dailySelectorHelper._getElementId(
      calendarDays
    ) as string;

    let dateElement: HTMLInputElement = document.getElementById(
      elementId as string
    ) as HTMLInputElement;
    dailySelectorHelper._setAttributesToElement(
      dateElement,
      "currentMonth",
      currentMonth.toString()
    );
    dailySelectorHelper._setAttributesToElement(
      dateElement,
      "currentYear",
      currentYear.toString()
    );
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
      const dayDiv = dailySelectorHelper._createElement(
        ELEMENTS.DIV_ELEMENT,
        elementId
      );
      dayDiv.classList.add("day");
      dailySelectorHelper._setSelectedDateColor(dayDiv, DATE.DEFAULT, options);
      dailySelectorHelper._setAttributesToElement(
        dayDiv,
        "currentMonth",
        currentMonth.toString()
      );
      dailySelectorHelper._setAttributesToElement(
        dayDiv,
        "currentYear",
        currentYear.toString()
      );
      dailySelectorHelper._setAttributesToElement(
        dayDiv,
        "currentDate",
        i.toString()
      );
      let dt = new Date(currentYear, currentMonth, i);
      dailySelectorHelper._setAttributesToElement(
        dayDiv,
        "currentDay",
        dt.getDay().toString()
      );
      dayDiv.textContent = i.toString();
      dayDiv.addEventListener("click", (event: Event) => {
        event.preventDefault();
        event.stopPropagation();
        dailySelectorHelper._setSelectedDate(
          event.currentTarget as HTMLElement,
          options
        );
      });

      if (
        i === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear()
      ) {
        dailySelectorHelper._setSelectedDateColor(dayDiv, DATE.TODAY, options);
      }

      calendarDays.appendChild(dayDiv);
    }
    dailySelectorHelper._updateHeader(
      currentYear,
      currentMonth,
      today.getDate(),
      today.getDay()
    );
  },

  // create year list ui for secondary view
  _createYearList: (options: Options) => {
    options = JSON.parse(
      sessionStorage.getItem(`${options.elementId}-ds-option`) as string
    );
    let primaryColor =
      options?.color?.primary === undefined
        ? defaultColorOptions.primary
        : options?.color?.primary;
    let secondaryColor =
      options?.color?.secondary === undefined
        ? defaultColorOptions.secondary
        : options?.color?.secondary;

    let currentYearContent: HTMLElement | null = null;
    const calendarYearBody: HTMLElement = document.getElementById(
      elementsMetaData.secondaryBody.id
    ) as HTMLElement;
    let elementId: string = dailySelectorHelper._getElementId(
      calendarYearBody
    ) as string;
    let calendarYearsList = dailySelectorHelper._createElement(
      ELEMENTS.DIV_ELEMENT,
      elementId
    );
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
      const yearItem = dailySelectorHelper._createElement(
        ELEMENTS.DIV_ELEMENT,
        elementId
      );
      yearItem.classList.add(elementsMetaData.yearItem.class);
      dailySelectorHelper._setAttributesToElement(
        yearItem,
        "currentYear",
        year.toString()
      );

      const yearHeader = dailySelectorHelper._createElement(
        ELEMENTS.DIV_ELEMENT,
        elementId
      );
      yearHeader.classList.add(elementsMetaData.yearHeader.class);
      yearHeader.style.backgroundColor = primaryColor as string;
      yearHeader.textContent = year.toString();
      yearItem.appendChild(yearHeader);

      const yearContent = dailySelectorHelper._createElement(
        ELEMENTS.DIV_ELEMENT,
        elementId
      );
      yearContent.classList.add(elementsMetaData.yearContent.class);

      const yearGrid = dailySelectorHelper._createElement(
        ELEMENTS.DIV_ELEMENT,
        elementId
      );
      yearGrid.classList.add(elementsMetaData.yearGrid.class);

      for (let month = 0; month < 12; month++) {
        const monthItem: HTMLDivElement = dailySelectorHelper._createElement(
          ELEMENTS.DIV_ELEMENT,
          elementId
        ) as HTMLDivElement;
        monthItem.classList.add(elementsMetaData.monthItem.class);
        monthItem.style.backgroundColor = secondaryColor as string;
        monthItem.textContent = new Date(year, month).toLocaleString(
          "default",
          { month: "short" }
        );
        dailySelectorHelper._setAttributesToElement(
          monthItem,
          "currentMonth",
          month.toString()
        );
        dailySelectorHelper._setAttributesToElement(
          monthItem,
          "currentYear",
          year.toString()
        );
        dailySelectorHelper._setAttributesToElement(monthItem, "tabindex", "0");
        yearGrid.appendChild(monthItem);
        monthItem.addEventListener("click", (event: Event) => {
          event.preventDefault();
          event.stopPropagation();
          (event.currentTarget as HTMLElement).focus();
          let elementId: string = dailySelectorHelper._getElementId(
            event.currentTarget as HTMLElement
          ) as string;
          let containerId = `${elementsMetaData.container.id}${elementId}`;
          let container: HTMLElement = document.getElementById(
            containerId
          ) as HTMLElement;
          let currentMonth = parseInt(
            dailySelectorHelper._getAttributesFromElement(
              event.currentTarget as HTMLElement,
              "currentMonth"
            ) as string
          );
          let currentYear = parseInt(
            dailySelectorHelper._getAttributesFromElement(
              event.currentTarget as HTMLElement,
              "currentYear"
            ) as string
          );
          dailySelectorHelper._updateCalendar(
            options,
            currentYear,
            currentMonth
          );
          dailySelectorHelper._toggleCalendarViews(container);
        });
      }

      yearContent.appendChild(yearGrid);
      yearItem.appendChild(yearContent);

      yearHeader.addEventListener("click", (event: Event) => {
        event.preventDefault();
        let currentYear = parseInt(
          dailySelectorHelper._getAttributesFromElement(
            (event.currentTarget as HTMLElement).parentElement as HTMLElement,
            "currentYear"
          ) as string
        );
        let yearTitle: HTMLElement = document.getElementById(
          elementsMetaData.secondaryNavigationTitle.id
        ) as HTMLElement;
        yearTitle.textContent = currentYear.toString();
        if (yearContent.style.display === "block") {
          yearContent.style.display = "none";
          yearHeader.style.borderBottom = "1px solid #ccc";
        } else {
          // Close previously open year content if any
          if (currentYearContent) {
            currentYearContent.style.display = "none";
            (
              currentYearContent.previousElementSibling as HTMLElement
            ).style.borderBottom = "1px solid #ccc";
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
  _filterYearList: (yearSearch: HTMLInputElement) => {
    const searchValue = yearSearch.value.toLowerCase();
    const yearItems: NodeListOf<HTMLElement> =
      document.querySelectorAll(".year-item");

    yearItems.forEach((item: HTMLElement) => {
      const year: string = item.getAttribute("currentYear") as string;
      if (year.includes(searchValue)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  },

  // updates calendar ui header
  _updateHeader: (
    currentYear: number,
    currentMonth: number,
    currentDate: number,
    currentDay: number
  ) => {
    const selectedDate: HTMLElement = document.getElementById(
      elementsMetaData.headerDate.id
    ) as HTMLElement;
    const selectedYear: HTMLElement = document.getElementById(
      elementsMetaData.headerYear.id
    ) as HTMLElement;
    const monthYear: HTMLElement = document.getElementById(
      elementsMetaData.primaryNavigationTitle.id
    ) as HTMLElement;

    monthYear.textContent = `${monthNames[currentMonth].name} ${currentYear}`;
    if (selectedYear !== null) {
      for (let i = 0; i < selectedYear.children.length; i++) {
        if (
          selectedYear.children[0].tagName.toLowerCase() ===
          ELEMENTS.SPAN_ELEMENT
        ) {
          selectedYear.children[0].textContent = currentYear.toString();
        }
      }
    }
    if (selectedDate !== null) {
      for (let i = 0; i < selectedDate.children.length; i++) {
        if (
          selectedDate.children[0].tagName.toLowerCase() ===
          ELEMENTS.SPAN_ELEMENT
        ) {
          selectedDate.children[0].textContent = `${dayNames[currentDay].name}, ${currentDate} ${monthNames[currentMonth].name}`;
        }
      }
    }
  },

  // gets selected date
  _getSelectedDate: (
    dateElement: HTMLInputElement,
    displayFormat: string | undefined
  ) => {
    let currentYear = parseInt(
      dailySelectorHelper._getAttributesFromElement(
        dateElement,
        "currentYear"
      ) as string
    );
    let currentMonth = parseInt(
      dailySelectorHelper._getAttributesFromElement(
        dateElement,
        "currentMonth"
      ) as string
    );
    let currentDate = parseInt(
      dailySelectorHelper._getAttributesFromElement(
        dateElement,
        "currentDate"
      ) as string
    );
    let currentDay = parseInt(
      dailySelectorHelper._getAttributesFromElement(
        dateElement,
        "currentDay"
      ) as string
    );
    let dateObj: DateObject = {
      year: currentYear,
      month: currentMonth,
      date: currentDate,
      day: currentDay,
    };
    let selectedDate: string;
    if (displayFormat !== undefined && displayFormat !== "") {
      selectedDate = dailySelectorHelper._formatDate(dateObj, displayFormat);
    } else {
      selectedDate = new Date(
        currentYear,
        currentMonth,
        currentDate
      ).toString();
    }
    dateElement.value = selectedDate;
  },

  // formats date
  _formatDate: (dateObj: DateObject, format: string) => {
    let tokens = /(MMMM|MMM|MM|M|DD|D|BBBB|BBB|BB|B|YYYY|YY|-\/:,|.)/g;
    let matches: RegExpMatchArray = format.match(tokens) as RegExpMatchArray;
    let output = "";
    for (let i = 0; i < matches.length; i++) {
      if (matches[i].trim() === "") {
        output += " ";
      } else {
        output += dailySelectorHelper._convertDateToFormat(
          dateObj,
          matches[i].trim()
        );
      }
    }
    return output;
  },

  // convert date to selected format
  _convertDateToFormat: (dateObj: DateObject, item: string) => {
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
  _setSelectedDateColor: (
    item: HTMLElement,
    DATE_SETTERS: DATE,
    options: Options
  ) => {
    let primaryColor =
      options?.color?.primary === undefined
        ? defaultColorOptions.primary
        : options?.color?.primary;
    let secondaryColor =
      options?.color?.secondary === undefined
        ? defaultColorOptions.secondary
        : options?.color?.secondary;
    if (DATE_SETTERS === DATE.DEFAULT) {
      item.style.backgroundColor = secondaryColor as string;
      item.style.color = "#000";
    } else if (DATE_SETTERS === DATE.SELECT) {
      item.style.backgroundColor = primaryColor as string;
      item.style.color = "#fff";
      item.classList.add("selectedDay");
    } else if (DATE_SETTERS === DATE.TODAY) {
      item.style.border = `1px solid ${primaryColor}`;
      item.style.backgroundColor = "#fff";
      item.style.color = primaryColor as string;
      item.classList.add("daily-selector-today");
    }
  },

  // set selected date as attribute to date element
  _setSelectedDate: (item: HTMLElement, options: Options) => {
    const elementId: string = dailySelectorHelper._getElementId(item) as string;
    let dateElement: HTMLInputElement = document.getElementById(
      elementId
    ) as HTMLInputElement;

    let selectedDates: HTMLCollectionOf<HTMLElement> =
      document.getElementsByClassName(
        "selectedDay"
      ) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < selectedDates.length; i++) {
      dailySelectorHelper._setSelectedDateColor(
        selectedDates[i],
        DATE.DEFAULT,
        options
      );
    }
    let todayDate: HTMLCollectionOf<HTMLElement> =
      document.getElementsByClassName(
        "daily-selector-today"
      ) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < todayDate.length; i++) {
      dailySelectorHelper._setSelectedDateColor(
        todayDate[i],
        DATE.TODAY,
        options
      );
    }
    dailySelectorHelper._setSelectedDateColor(item, DATE.SELECT, options);

    let currentYear = parseInt(
      dailySelectorHelper._getAttributesFromElement(
        item,
        "currentYear"
      ) as string
    );
    let currentMonth = parseInt(
      dailySelectorHelper._getAttributesFromElement(
        item,
        "currentMonth"
      ) as string
    );
    let currentDate = parseInt(
      dailySelectorHelper._getAttributesFromElement(
        item,
        "currentDate"
      ) as string
    );
    let currentDay = parseInt(
      dailySelectorHelper._getAttributesFromElement(
        item,
        "currentDay"
      ) as string
    );
    dailySelectorHelper._updateHeader(
      currentYear,
      currentMonth,
      currentDate,
      currentDay
    );
    dailySelectorHelper._setAttributesToElement(
      dateElement,
      "currentMonth",
      currentMonth.toString()
    );
    dailySelectorHelper._setAttributesToElement(
      dateElement,
      "currentYear",
      currentYear.toString()
    );
    dailySelectorHelper._setAttributesToElement(
      dateElement,
      "currentDate",
      currentDate.toString()
    );
    dailySelectorHelper._setAttributesToElement(
      dateElement,
      "currentDay",
      currentDay.toString()
    );
  },
};

// ===== EVENTS =====

type EventDetails = {
  type?: string;
  selectedValue?: string;
};

const EVENTS = {
  OK: "okEvent",
  CANCEL: "cancelEvent",
  CLEAR: "clearEvent",
};

class Events {
  _createEvent(
    dateElement: HTMLInputElement,
    eventName: string,
    obj: EventDetails
  ): void {
    if (eventName === EVENTS.OK) {
      obj.type = "ok";
    } else if (eventName === EVENTS.CANCEL) {
      obj.type = "cancel";
    } else if (eventName === EVENTS.CLEAR) {
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
  closeOptions?: CloseOptions;

  _createModal(content: HTMLElement, closeOptions: CloseOptions): void {
    const elementId: string = dailySelectorHelper._getElementId(
      content
    ) as string;
    const dateElement = document.getElementById(elementId) as HTMLInputElement;

    const modal = dailySelectorHelper._createElement(
      ELEMENTS.DIV_ELEMENT,
      elementId
    ) as HTMLElement;
    modal.id = elementsMetaData.modal.id;
    modal.className = elementsMetaData.modal.class;

    const modalOverlay = dailySelectorHelper._createElement(
      ELEMENTS.DIV_ELEMENT,
      elementId
    ) as HTMLElement;
    modalOverlay.id = elementsMetaData.modalOverlay.id;
    modalOverlay.classList.add(elementsMetaData.modalOverlay.class);
    this.closeOptions = closeOptions;

    const modalContent = dailySelectorHelper._createElement(
      ELEMENTS.DIV_ELEMENT,
      elementId
    ) as HTMLElement;
    modalContent.id = elementsMetaData.modalContent.id;
    modalContent.className = elementsMetaData.modalContent.class;
    modalContent.appendChild(content);
    modal.appendChild(modalOverlay);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    const body = document.querySelector("body") as HTMLBodyElement;
    body.classList.add("daily-selector-modal-active");

    const closeOnClickOutsideModal =
      this.closeOptions?.closeOnClickOutsideModal;
    const closeOnKeyboardKeys = this.closeOptions?.closeOnKeyboardKeys;

    if (closeOnClickOutsideModal === true) {
      modalOverlay.addEventListener("click", () => {
        this._closeModal(dateElement);
      });
    }

    if (closeOnKeyboardKeys === true) {
      document.onkeydown = (evt: KeyboardEvent) => {
        evt = evt || (window.event as KeyboardEvent);
        let isEscape = false;

        if ("key" in evt) {
          isEscape = evt.key === "Escape" || evt.key === "Esc";
        } else {
          isEscape = (evt as KeyboardEvent).code === "Escape";
        }

        if (isEscape) {
          this._closeModal(dateElement);
        }
      };
    }
  }

  _closeModal(dateElement: HTMLElement): void {
    const body = document.querySelector("body") as HTMLBodyElement;
    body.classList.remove("daily-selector-modal-active");
    dailySelectorHelper._resetDateElement(dateElement);
  }
}

const dailySelectorModalHelper = new Modal();

// ===== MODAL END =====
