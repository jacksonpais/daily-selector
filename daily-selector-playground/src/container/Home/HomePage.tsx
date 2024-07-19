import "./styles.css";
import { useEffect, useState } from "react";
import { dailySelector, Options } from "daily-selector";
import "daily-selector/src/daily-selector.css";
import CopyContent from "../../components/CopyContent/CopyContent";
import Title from "../../components/Title/Title";

export default function HomePage() {
  const [option, setOption] = useState<Options>({
    elementId: "birthdate",
  });
  const [output, setOutput] = useState("");

  useEffect(() => {
    dailySelector.initialize(option);
    setOutput(cleanup());
  }, []);

  const cleanup = (): string => {
    let finalObj: Options = option;
    let regexString = "";
    const brace = {
      brace: 1,
    };

    let str = JSON.stringify(finalObj).substring(
      1,
      JSON.stringify(finalObj).length - 1
    );
    regexString = str.replace(
      /({|}[,]*|[^{}:]+:[^{}:,]*[,{]*)/g,
      (p1: string): string => {
        const returnFunction = (): string =>
          `<div style="text-indent: ${brace["brace"] * 20}px;">${p1}</div>`;
        let returnString: string;
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
  };

  const setChanges = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>
  ): void => {
    let opt: Options = option;

    let id = e.currentTarget.id;
    if (id === "includeHeader") {
      opt.includeHeader = e.currentTarget.value === "false" ? false : true;
    }
    if (id === "displayFormat") {
      opt.displayFormat = e.currentTarget.value;
    }
    if (id === "minYear") {
      if (e.currentTarget.value !== "") {
        if (opt.year !== undefined) {
          opt.year.min = parseInt(e.currentTarget.value);
        } else {
          opt.year = {
            min: parseInt(e.currentTarget.value),
          };
        }
      }
    }
    if (id === "maxYear") {
      if (e.currentTarget.value !== "") {
        if (opt.year !== undefined) {
          opt.year.max = parseInt(e.currentTarget.value);
        } else {
          opt.year = {
            max: parseInt(e.currentTarget.value),
          };
        }
      }
    }
    if (id === "primaryColor") {
      if (e.currentTarget.value !== "") {
        if (opt.color !== undefined) {
          opt.color.primary = e.currentTarget.value;
        } else {
          opt.color = {
            primary: e.currentTarget.value,
          };
        }
      }
    }
    if (id === "secondaryColor") {
      if (e.currentTarget.value !== "") {
        if (opt.color !== undefined) {
          opt.color.secondary = e.currentTarget.value;
        } else {
          opt.color = {
            secondary: e.currentTarget.value,
          };
        }
      }
    }
    if (id === "closeOnClickOutsideModal") {
      if (e.currentTarget.value !== "") {
        if (opt.closeOptions !== undefined) {
          opt.closeOptions.closeOnClickOutsideModal =
            e.currentTarget.value === "false" ? false : true;
        } else {
          opt.closeOptions = {
            closeOnClickOutsideModal:
              e.currentTarget.value === "false" ? false : true,
          };
        }
      }
    }
    if (id === "closeOnKeyboardKeys") {
      if (e.currentTarget.value !== "") {
        if (opt.closeOptions !== undefined) {
          opt.closeOptions.closeOnKeyboardKeys =
            e.currentTarget.value === "false" ? false : true;
        } else {
          opt.closeOptions = {
            closeOnKeyboardKeys:
              e.currentTarget.value === "false" ? false : true,
          };
        }
      }
    }
    setOption(opt);
    dailySelector.initialize(opt);
    setOutput(cleanup());
  };

  const yearList = [
    2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
  ];
  const npmJsContent = "npm i daily-selector";
  const scriptContent = `<script src="./daily-selector.js"></script>`;
  const importCssContent = `import "daily-selector/src/daily-selector.css";`;
  const cssLinkContent = `<link rel="stylesheet" href="./daily-selector.css" />`;
  const usageContent = `<input type="text" id="birthdate" class="daily-selector" />`;
  const jsContent = `<script>
  document.addEventListener("DOMContentLoaded", (event) => {
    dailySelector.initialize({
      elementId: "birthdate"
    });
  });
</script>`;
  const jqueryContent = `<script>
  $( document ).ready(function() {
    dailySelector.initialize({
       elementId: "birthdate"
    });
  });
</script>`;
  const reactContent = `useEffect(() => {
  dailySelector.initialize({
    elementId: "birthdate"
  });
}, []);`;
  const allOptionContent = `<script>
  document.addEventListener("DOMContentLoaded", (event) => {
    dailySelector.initialize({
      elementId: "birthdate",
      includeHeader: false,
      displayFormat: "DD-MMM-YYYY",
      year: {
        min: 1970,
        max: 2024
      },
      color: {
        primary: "rgb(5 64 181)",
        secondary: "#bfecff"
      },
      closeOptions: {
        closeOnClickOutsideModal: false,
        closeOnKeyboardKeys: false,
      }
    });
  });
</script>`;
  const jsDateContent = `Wed Jun 05 2020 00:00:00 GMT+0530 (India Standard Time)`;
  const separatorContent = `- / : . ,`;

  return (
    <>
      {/* <Title title={menuItem?.title} /> */}
      <div className="section">
        <h3>Overview</h3>
        <p>
          The daily-selector is a lightweight, feature-rich and customizable
          date selector tool that can be easily integrated into any web
          application. This utility provides a user-friendly interface for
          selecting dates, months, and years, with a smooth and responsive
          design.
        </p>
      </div>

      <div className="section">
        <h3>Features</h3>
        <ul className="features-list">
          <li>
            <strong>Responsive Design:</strong> Ensures the date selector looks
            great on any device.
          </li>
          <li>
            <strong>Month and Year Selection:</strong> Allows users to quickly
            navigate between months and years.
          </li>
          <li>
            <strong>Customizable UI:</strong> Easily change the look and feel to
            match your application's theme.
          </li>
          <li>
            <strong>No External Dependencies:</strong> Pure HTML, CSS, and
            JavaScript.
          </li>
          <li>
            <strong>Feature rich utility:</strong> Offers a wide range of
            features related to date selector.
          </li>
        </ul>
      </div>

      <div className="section">
        <h3>Installation</h3>
        <p>
          To integrate daily-selector into your project, follow these steps:
        </p>
        <p>You can install daily-selector as an NPM package:</p>
        <CopyContent content={npmJsContent} />
        <p>Or link directly to the file:</p>
        <CopyContent content={scriptContent} />
      </div>

      <div className="section">
        <h3>Styles</h3>
        <p>You will also need to include DailySelector CSS file.</p>
        <p>
          You will also need to include Pikaday CSS file. This step depends on
          how Pikaday was installed. Either import from NPM:
        </p>
        <CopyContent content={importCssContent} />
        <p>Or link to the file:</p>
        <CopyContent content={cssLinkContent} />
      </div>

      <div className="section">
        <h3>Usage</h3>
        <p>daily-selector can be bound to an input field:</p>
        <CopyContent content={usageContent} />
        <p>Add the JavaScript to the end of your document:</p>
        <CopyContent content={jsContent} />
        <p>If you're using jQuery :</p>
        <CopyContent content={jqueryContent} />
        <p>If you're using React :</p>
        <CopyContent content={reactContent} />
        <p>
          Only elementId is required compulsorily. All other options of the
          daily-selector help in customizing the daily-selector.
        </p>
        <p>More of this is explained in the configuration section.</p>
      </div>

      <div className="section">
        <h3>Configuration</h3>
        <p>daily-selector in action using all the options available:</p>
        <CopyContent content={allOptionContent} />
        <p>
          Please note: we are in the process of adding more features to our
          beloved daily-selector and the above will be updated.
        </p>
        <ul className="configuration-list">
          <li>
            <span className="configuration-item">elementId</span> binds the date
            selector to a form field
          </li>
          <li>
            <span className="configuration-item">includeHeader</span> adds
            header to the date selector, this header acts as a text holder for
            the selected date with date, month year and day.{" "}
            <strong>By default includeHeader is false</strong>
          </li>
          <li>
            <span className="configuration-item">displayFormat</span> formats
            date to the selected format, more information on formatting is
            mentioned in the next section.{" "}
            <strong>
              By default displayFormat is set to javascript date object
            </strong>
          </li>
          <li>
            <span className="configuration-item">year</span> sets the min and
            max to the limit of year list in date selector. The year has 2
            inputs min and max.{" "}
            <strong>
              By default min is set to current year - 10 and max is set to
              current year
            </strong>
          </li>
          <li>
            <span className="configuration-item">color</span> sets the color to
            the UI. There is two colors for the date selector ui, primary and
            secondary.{" "}
            <strong>
              By default primary color is set to #000000 and secondary color is
              set to #e9e8e8
            </strong>
          </li>
          <li>
            <span className="configuration-item">closeOptions</span> sets the
            options for the closing of the modal. Date selector opens on the
            modal, this configuration helps how to closing of the modal should
            behave. There are two options in closeOptions -
            closeOnClickOutsideModal and closeOnKeyboardKeys. The names of the
            options define its meaning clearly.{" "}
            <strong>
              By default closeOnClickOutsideModal is set to false and
              closeOnKeyboardKeys is set to false
            </strong>
          </li>
        </ul>
      </div>

      <div className="section">
        <h3>Formatting</h3>
        <p>
          By default, dates are formatted and parsed using standard JavaScript
          Date object.
        </p>
        <CopyContent content={jsDateContent} />
        <p>But it can be formatted with built-in options.</p>
        <table>
          <thead>
            <tr>
              <th>Built-in Formats</th>
              <th>Output</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>D</td>
              <td>Dates - 1, 2, 3, 4, 5,...9, 10, 11</td>
            </tr>
            <tr>
              <td>DD</td>
              <td>Dates - 01, 02, 03, 04, 05, ....09, 10, 11</td>
            </tr>
            <tr>
              <td>M</td>
              <td>Months - 1, 2, 3, 4, 5,...9, 10, 11</td>
            </tr>
            <tr>
              <td>MM</td>
              <td>Months - 01, 02, 03, 04, 05, ....09, 10, 11</td>
            </tr>
            <tr>
              <td>MMM</td>
              <td>Months - Jan, Feb, Mar.....</td>
            </tr>
            <tr>
              <td>MMMM</td>
              <td>Months - January, February, March.....</td>
            </tr>
            <tr>
              <td>YY</td>
              <td>Years - 22, 23, 24...</td>
            </tr>
            <tr>
              <td>YYYY</td>
              <td>years - 2022, 2023, 2024.....</td>
            </tr>
            <tr>
              <td>B</td>
              <td>Days - 1, 2, 3, 4, 5,...9, 10, 11</td>
            </tr>
            <tr>
              <td>BB</td>
              <td>Days - 01, 02, 03, 04, 05, ....09, 10, 11</td>
            </tr>
            <tr>
              <td>BBB</td>
              <td>Days - Sun, Mon, Tue.....</td>
            </tr>
            <tr>
              <td>BBBB</td>
              <td>Days - Sunday, Monday, Tuesday.....</td>
            </tr>
          </tbody>
        </table>
        <p>Allowed separators are:</p>
        <CopyContent content={separatorContent} />
      </div>

      <div className="container">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Option</th>
                <th>Property</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>elementId</td>
                <td>birthdate</td>
              </tr>
              <tr>
                <td>includeHeader</td>
                <td>
                  <select id="includeHeader" onChange={(e) => setChanges(e)}>
                    <option value="">Select</option>
                    <option value="true">true</option>
                    <option value="false">false</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>displayFormat</td>
                <td>
                  <select id="displayFormat" onChange={(e) => setChanges(e)}>
                    <option value="">Select</option>
                    <option value="DD-MMM-YYYY">DD-MMM-YYYY</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>year</td>
                <td></td>
              </tr>
              <tr>
                <td>min</td>
                <td>
                  <select id="minYear" onChange={(e) => setChanges(e)}>
                    <option value="">Select</option>
                    {yearList.map((year) => (
                      <option value={year} key={`minYear_${year}`}>
                        {year}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>max</td>
                <td>
                  <select id="maxYear" onChange={(e) => setChanges(e)}>
                    <option value="">Select</option>
                    {yearList.map((year) => (
                      <option value={year} key={`maxYear_${year}`}>
                        {year}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>color</td>
                <td></td>
              </tr>
              <tr>
                <td>primary</td>
                <td>
                  <input
                    type="color"
                    id="primaryColor"
                    autoComplete="off"
                    onChange={(e) => setChanges(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>secondary</td>
                <td>
                  <input
                    type="color"
                    id="secondaryColor"
                    autoComplete="off"
                    onChange={(e) => setChanges(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>closeOptions</td>
                <td></td>
              </tr>
              <tr>
                <td>closeOnClickOutsideModal</td>
                <td>
                  <select
                    id="closeOnClickOutsideModal"
                    onChange={(e) => setChanges(e)}
                  >
                    <option value="">Select</option>
                    <option value="true">true</option>
                    <option value="false">false</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>closeOnKeyboardKeys</td>
                <td>
                  <select
                    id="closeOnKeyboardKeys"
                    onChange={(e) => setChanges(e)}
                  >
                    <option value="">Select</option>
                    <option value="true">true</option>
                    <option value="false">false</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pre-container">
          <div>
            <p id="message"></p>
          </div>
          <div>
            <input
              type="text"
              id="birthdate"
              className="daily-selector"
              autoComplete="off"
            />
          </div>
          <pre dangerouslySetInnerHTML={{ __html: output }}></pre>
        </div>
      </div>
    </>
  );
}
