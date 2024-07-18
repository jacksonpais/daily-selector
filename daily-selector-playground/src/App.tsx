import { useEffect, useState } from "react";
import "./App.css";
import { dailySelector, Options } from "../../daily-selector/src/index";
import "../../daily-selector/src/daily-selector.css";
// import { dailySelector } from "daily-selector"

function App() {
  const [option, setOption] = useState<Options>({
    elementId: "birthdate",
  });

  useEffect(() => {
    dailySelector.initialize(option);
  }, []);
  return (
    <>
      <div className="app">
        <header className="header">
          <div className="logo">daily-selector</div>
          <div className="menu-icon">☰</div>
          <nav className="menu ">
            <ul>
              <li>Menu 1</li>
              <li>Menu 2</li>
              <li>Menu 3</li>
              <li>Menu 4</li>
            </ul>
          </nav>
        </header>
        <main className="content">
          <h1>daily-selector</h1>
          <p>
            The daily-selector is a lightweight, feature-rich and customizable
            date selector tool that can be easily integrated into any web
            application. This utility provides a user-friendly interface for
            selecting dates, months, and years, with a smooth and responsive
            design.
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
                      <select id="includeHeader">
                        <option value="">Select</option>
                        <option value="true">true</option>
                        <option value="false">false</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>displayFormat</td>
                    <td>
                      <select id="displayFormat">
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
                      <select id="minYear"></select>
                    </td>
                  </tr>
                  <tr>
                    <td>max</td>
                    <td>
                      <select id="maxYear"></select>
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
                      <select id="closeOnClickOutsideModal">
                        <option value="">Select</option>
                        <option value="true">true</option>
                        <option value="false">false</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>closeOnKeyboardKeys</td>
                    <td>
                      <select id="closeOnKeyboardKeys">
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
              <pre id="output"></pre>
            </div>
          </div>
        </main>
        <footer className="footer">
          <div>© 2024 daily-selector. All rights reserved.</div>
        </footer>
      </div>
    </>
  );
}

export default App;
