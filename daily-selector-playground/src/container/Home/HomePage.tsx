import "./styles.css";
import { useEffect, useState } from "react";
import { dailySelector, Options } from "daily-selector";
import "daily-selector/src/daily-selector.css";

export default function HomePage() {
  const [option, setOption] = useState<Options>({
    elementId: "birthdate",
  });
  const [output, setOutput] = useState("");

  useEffect(() => {
    console.log(option);
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

  return (
    <>
      <h1>daily-selector</h1>
      <p>
        The daily-selector is a lightweight, feature-rich and customizable date
        selector tool that can be easily integrated into any web application.
        This utility provides a user-friendly interface for selecting dates,
        months, and years, with a smooth and responsive design.
      </p>
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
