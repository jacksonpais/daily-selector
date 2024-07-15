
let output = document.getElementById("output");

function initialize() {
  let obj = {
    elementId: "birthdate",
    includeHeader: undefined,
    displayFormat: undefined,
    year: undefined,
    color: undefined,
    closeOptions: undefined
  }
  setObj(obj);
  populateSelect(document.getElementById("minYear"))
  populateSelect(document.getElementById("maxYear"))

  document.getElementById("includeHeader").addEventListener("change", function (e) {
    obj = getObj();
    obj.includeHeader = e.target.value === "false" ? false : true;
    setObj(obj);
    createOption();
    let output = document.getElementById("output");
    output.innerHTML = cleanup(obj);
    dailySelector.initialize(getObj());
  });
  document.getElementById("displayFormat").addEventListener("change", function (e) {
    obj = getObj();
    obj.displayFormat = e.target.value;
    setObj(obj);
    let output = document.getElementById("output");
    output.innerHTML = cleanup(obj);
    dailySelector.initialize(getObj());
  })
  document.getElementById("minYear").addEventListener("change", function (e) {
    obj = getObj();
    if (e.target.value !== "") {
      if (obj.year !== undefined) {
        obj.year.min = parseInt(e.target.value);
      } else {
        obj.year = {
          min: parseInt(e.target.value)
        }
      }
    }
    setObj(obj);
    let output = document.getElementById("output");
    output.innerHTML = cleanup(obj);
    dailySelector.initialize(getObj());
  })
  document.getElementById("maxYear").addEventListener("change", function (e) {
    obj = getObj();
    if (e.target.value !== "") {
      if (obj.year !== undefined) {
        obj.year.max = parseInt(e.target.value);
      } else {
        obj.year = {
          max: parseInt(e.target.value)
        }
      }
    }
    setObj(obj);
    let output = document.getElementById("output");
    output.innerHTML = cleanup(obj);
    dailySelector.initialize(getObj());
  })
  document.getElementById("primaryColor").addEventListener("change", function (e) {
    obj = getObj();
    if (e.target.value !== "") {
      if (obj.color !== undefined) {
        obj.color.primary = e.target.value;
      } else {
        obj.color = {
          primary: e.target.value
        }
      }
    }
    setObj(obj);
    let output = document.getElementById("output");
    output.innerHTML = cleanup(obj);
    dailySelector.initialize(getObj());
  })
  document.getElementById("secondaryColor").addEventListener("change", function (e) {
    obj = getObj();
    if (e.target.value !== "") {
      if (obj.color !== undefined) {
        obj.color.secondary = e.target.value;
      } else {
        obj.color = {
          secondary: e.target.value
        }
      }
    }
    setObj(obj);
    let output = document.getElementById("output");
    output.innerHTML = cleanup(obj);
    dailySelector.initialize(getObj());
  })
  document.getElementById("closeOnClickOutsideModal").addEventListener("change", function (e) {
    obj = getObj();
    if (e.target.value !== "") {
      if (obj.closeOptions !== undefined) {
        obj.closeOptions.closeOnClickOutsideModal = e.target.value === "false" ? false : true
      } else {
        obj.closeOptions = {
          closeOnClickOutsideModal: e.target.value === "false" ? false : true
        }
      }
    }
    setObj(obj);
    let output = document.getElementById("output");
    output.innerHTML = cleanup(obj);
    dailySelector.initialize(getObj());
  })
  document.getElementById("closeOnKeyboardKeys").addEventListener("change", function (e) {
    obj = getObj();
    if (e.target.value !== "") {
      if (obj.closeOptions !== undefined) {
        obj.closeOptions.closeOnKeyboardKeys =  e.target.value === "false" ? false : true;
      } else {
        obj.closeOptions = {
          closeOnKeyboardKeys:  e.target.value === "false" ? false : true
        }
      }
    }
    setObj(obj);
    let output = document.getElementById("output");
    output.innerHTML = cleanup(obj);
    dailySelector.initialize(getObj());
  })
}

function setObj(obj) {
  localStorage.setItem("default", JSON.stringify(obj));
}

function getObj() {
  let obj = JSON.parse(localStorage.getItem("default"));
  return obj;
}

function createOption() {
  let obj = getObj();
  let isValidYear = true;
  if (minYear === undefined || !isNaN(minYear)) {
    isValidYear = false;
  }
  if (maxYear === undefined || !isNaN(maxYear)) {
    isValidYear = false;
  }
  if (!isValidYear) {
    minYear = parseInt(minYear);
    maxYear = parseInt(maxYear);
    if (minYear > maxYear) {
      setMessage("max year must be greater than min year")
      rtn = false;
    }
  } else {
    setMessage("No a valid year")
  }
  return obj;
}

function cleanup(finalObj) {
  let regexString = "";
  const brace = {
    brace: 1
  };

  let str = JSON.stringify(finalObj).substring(1, JSON.stringify(finalObj).length - 1)
  regexString = str.replace(
    /({|}[,]*|[^{}:]+:[^{}:,]*[,{]*)/g,
    (m, p1) => {
      const returnFunction = () =>
        `<div style="text-indent: ${brace["brace"] * 20}px;">${p1}</div>`;
      let returnString = 0;
      if (p1.lastIndexOf("{") === p1.length - 1) {
        returnString = returnFunction();
        brace["brace"] += 1;
      } else if (p1.indexOf("}") === 0) {
        brace["brace"] -= 1;
        returnString = returnFunction();
      } else {
        returnString = returnFunction();
      }
      return returnString;
    }
  );
  return `<div style="text-indent: 0px;">dailySelector.initialize({</div>${regexString}<div style="text-indent: 0px;">})</div>`;
}

function setMessage(message) {
  document.getElementById("message").textContent = message;
}

function populateSelect(ddlYears) {
  let optionDefault = document.createElement("OPTION");
  optionDefault.innerHTML = "Select";
  optionDefault.value = 0;
  ddlYears.appendChild(optionDefault);
  let currentYear = (new Date()).getFullYear();
  for (let i = currentYear - 10; i <= currentYear; i++) {
    let option = document.createElement("OPTION");
    option.innerHTML = i;
    option.value = i;
    ddlYears.appendChild(option);
  }
}
