import { dailySelector, Options } from "daily-selector";
import "daily-selector/src/daily-selector.css";
import { MenuItem } from "../../model/MenuItem";
import styles from "./Palyground.module.css";
import { useEffect, useState } from "react";
import Title from "../../components/Title/Title";

interface PlaygroundProps {
  menuItem?: MenuItem;
}

export default function PlaygroundPage(props: PlaygroundProps) {
  const { menuItem } = props;

  useEffect(() => {
    dailySelector.initialize(option);
    setOutput(cleanup());
  }, []);

  const [option, setOption] = useState<Options>({
    elementId: "birthdate",
  });
  const [output, setOutput] = useState("");

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

  const yearList = [
    2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
  ];

  return (
    <>
      <Title title={menuItem?.title} />

      <div className={styles.container} id={menuItem?.name}>
        <div className={styles.playgroundContainer}>
          <div className={styles.leftSection}>
            <div className={styles["table-container"]}>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Option</th>
                    <th>Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>elementId</td>
                    <td>birthdate</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>includeHeader</td>
                    <td>
                      <select
                        id="includeHeader"
                        onChange={(e) => setChanges(e)}
                      >
                        <option value="">Select</option>
                        <option value="true">true</option>
                        <option value="false">false</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>displayFormat</td>
                    <td>
                      <select
                        id="displayFormat"
                        onChange={(e) => setChanges(e)}
                      >
                        <option value="">Select</option>
                        <option value="DD-MMM-YYYY">DD-MMM-YYYY</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>year</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
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
                    <td></td>
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
                    <td></td>
                    <td>color</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
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
                    <td></td>
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
                    <td></td>
                    <td>closeOptions</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
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
                    <td></td>
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
          </div>
          <div className={styles.rightSection}>
            <div className={styles["pre-container"]}>
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
        </div>
      </div>
    </>
  );
}
