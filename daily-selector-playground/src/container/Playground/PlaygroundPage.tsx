import { dailySelector, Options } from "daily-selector";
import "daily-selector/src/daily-selector.css";
import { MenuItem } from "../../model/MenuItem";
import styles from "./Palyground.module.css";
import { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import CopyContent from "../../components/CopyContent/CopyContent";

interface PlaygroundProps {
  menuItem?: MenuItem;
}

export default function PlaygroundPage(props: PlaygroundProps) {
  const { menuItem } = props;

  useEffect(() => {
    dailySelector.initialize(option);
    setOutput(JSON.stringify(option, null, 4));
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
    setOutput(JSON.stringify(option, null, 4));
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
                    <th colSpan={2}>Option</th>
                    <th>Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={2}>elementId</td>
                    <td>birthdate</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>includeHeader</td>
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
                    <td colSpan={2}>displayFormat</td>
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
                    <td colSpan={3}>year</td>
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
                    <td colSpan={3}>color</td>
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
                    <td colSpan={3}>closeOptions</td>
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
              <CopyContent
                content={`dailySelector.initialize(${output})`}
                showMinMaxIcon={true}
                title="code"
                showCodeByDefault={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
