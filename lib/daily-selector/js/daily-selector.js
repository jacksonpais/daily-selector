var DailySelector = function () {
  this.daily_selector_container_prefix = "daily_selector_container_";
  this.daily_selector_container_class = "daily-selector-container";
};

DailySelector.prototype = {
  initialize: function (options) {
    let dateElement = document.getElementById(options.elementId);
    let theme = options.theme;

    dateElement.addEventListener("click", function (event) {
      if (
        document.getElementById(
          `${dailySelector.daily_selector_container_prefix}${dateElement.id}`
        ) === null
      ) {
        event.preventDefault();
        event.stopPropagation();
        _createContainer(
          theme,
          `${dailySelector.daily_selector_container_prefix}${dateElement.id}`
        );

        let currentMonth = new Date().getMonth();
        let currentYear = new Date().getFullYear();
        _updateCalendar(currentYear, currentMonth);
      }
      document.addEventListener("click", _closeBoxOutside);
    });

    function _createContainer(theme, containerId) {
      switch (theme) {
        case "popup":
          break;
        case "theme":
        default:
          _createClassicContainer(containerId);
          break;
      }
    }

    function _createClassicContainer(containerId) {
      let elementId = containerId.split(
        dailySelector.daily_selector_container_prefix
      )[1];
      let parentDiv = document.createElement(ELEMENTS.CONTAINER_ELEMENT);
      let dateElement = document.getElementById(elementId);
      let originalParent = dateElement.parentElement;
      if (originalParent !== null) {
        if (originalParent.children.length > 0) {
          for (let i = 0; i < originalParent.children.length; i++) {
            if (originalParent.children[i].id === dateElement.id) {
              originalParent.removeChild(originalParent.children[i]);
              parentDiv.appendChild(dateElement);
              parentDiv.style.position = "relative";
              let container = document.createElement(
                ELEMENTS.CONTAINER_ELEMENT
              );
              container.id = containerId;
              container.classList.add(
                dailySelector.daily_selector_container_class
              );
              _createCalendar(container);
              parentDiv.appendChild(container);
              originalParent.appendChild(parentDiv);
              break;
            }
          }
        }
      }
    }

    function _createCalendar(calendarContainer) {
      let calendarHeader = document.createElement(ELEMENTS.CONTAINER_ELEMENT);
      calendarHeader.id = "calendar-header";
      calendarHeader.classList.add("calendar-header");
      let dateDiv = document.createElement(ELEMENTS.CONTAINER_ELEMENT);
      dateDiv.id = "selected-date";
      dateDiv.classList.add("date");
      let spanDate = document.createElement("span");
      dateDiv.appendChild(spanDate);
      let yearDiv = document.createElement(ELEMENTS.CONTAINER_ELEMENT);
      yearDiv.id = "selected-year";
      yearDiv.classList.add("year");
      let spanYear = document.createElement("span");
      yearDiv.appendChild(spanYear);
      calendarHeader.appendChild(dateDiv);
      calendarHeader.appendChild(yearDiv);

      let calendarNavigation = document.createElement(
        ELEMENTS.CONTAINER_ELEMENT
      );
      calendarNavigation.classList.add("calendar-navigation");
      let btnPreviousMonth = document.createElement("button");
      btnPreviousMonth.id = "prev-month";
      btnPreviousMonth.innerHTML = "&lt;";
      btnPreviousMonth.classList.add("icon");
      let btnNextMonth = document.createElement("button");
      btnNextMonth.id = "next-month";
      btnNextMonth.innerHTML = "&gt;";
      btnNextMonth.classList.add("icon");
      calendarNavigation.appendChild(btnPreviousMonth);
      let title = document.createElement("h2");
      title.id = "month-year";
      calendarNavigation.appendChild(title);
      calendarNavigation.appendChild(btnNextMonth);

      btnPreviousMonth.addEventListener("click", () => {
        if (currentMonth === 0) {
          currentMonth = 11;
          currentYear--;
        } else {
          currentMonth--;
        }
        dailySelector._updateCalendar(currentYear, currentMonth);
      });

      btnNextMonth.addEventListener("click", () => {
        if (currentMonth === 11) {
          currentMonth = 0;
          currentYear++;
        } else {
          currentMonth++;
        }
        dailySelector._updateCalendar(currentYear, currentMonth);
      });

      let calendarBody = document.createElement(ELEMENTS.CONTAINER_ELEMENT);
      calendarBody.id = "calendar-days";
      calendarBody.classList.add("calendar-days");

      let calendarFooter = document.createElement(ELEMENTS.CONTAINER_ELEMENT);
      calendarFooter.classList.add("calendar-footer");

      let calendarAction = document.createElement(ELEMENTS.CONTAINER_ELEMENT);
      calendarAction.id = "calendar-action";
      let btnCancel = document.createElement("button");
      let btnOk = document.createElement("button");
      calendarAction.appendChild(btnCancel);
      btnCancel.textContent = "CANCEL";
      calendarAction.appendChild(btnOk);
      btnOk.textContent = "OK";
      calendarAction.classList.add("calendar-action");

      calendarContainer.appendChild(calendarHeader);
      calendarContainer.appendChild(calendarNavigation);
      calendarContainer.appendChild(calendarBody);
      calendarContainer.appendChild(calendarAction);
      calendarContainer.appendChild(calendarFooter);
    }

    function _updateCalendar(currentYear, currentMonth) {
      let currentDate;
      let currentDay;

      const selectedDate = document.getElementById("selected-date");
      const selectedYear = document.getElementById("selected-year");
      const calendarDays = document.getElementById("calendar-days");
      const monthYear = document.getElementById("month-year");

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
        const dayDiv = document.createElement(ELEMENTS.CONTAINER_ELEMENT);
        dayDiv.textContent = i;

        if (
          i === today.getDate() &&
          currentMonth === today.getMonth() &&
          currentYear === today.getFullYear()
        ) {
          currentDate = today.getDate();
          currentDay = today.getDay();
          dayDiv.classList.add("today");
        }

        calendarDays.appendChild(dayDiv);
      }

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
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      monthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`;
      for (let i = 0; i < selectedYear.children.length; i++) {
        if (selectedYear.children[0].tagName.toLowerCase() === "span") {
          selectedYear.children[0].textContent = currentYear;
        }
      }
      for (let i = 0; i < selectedDate.children.length; i++) {
        if (selectedDate.children[0].tagName.toLowerCase() === "span") {
          selectedDate.children[0].textContent = `${dayNames[currentDay].name}, ${currentDate} ${monthNames[currentMonth]}`;
        }
      }
    }

    function _closeBoxOutside(event) {
      let inputList = document.getElementsByClassName("daily-selector");
      for (let i = 0; i < inputList.length; i++) {
        let dateElement = document.getElementById(inputList[i].id);
        let container = document.getElementById(
          `${dailySelector.daily_selector_container_prefix}${inputList[i].id}`
        );
        if (container !== null) {
          if (
            !container.contains(event.target) &&
            event.target !== dateElement.id
          ) {
            let parentDiv = dateElement.parentElement;
            let originalParent = parentDiv.parentElement;
            originalParent.appendChild(dateElement);
            parentDiv.remove();
            document.removeEventListener("click", _closeBoxOutside);
          }
        }
      }
    }

    const ELEMENTS = Object.freeze({
      CONTAINER_ELEMENT: "div",
    });
  },
};
var dailySelector = new DailySelector();
