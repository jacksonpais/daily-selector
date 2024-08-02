import styles from "./GettingStarted.module.css";
import CopyContent from "../../components/CopyContent/CopyContent";
import Title from "../../components/Title/Title";
import { MenuItem, SubMenuItem } from "../../model/MenuItem";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";

interface GettingStartedProps {
  menuItem: MenuItem;
  setScreen: any;
  setSubmenuRefs: any;
}

export default function GettingStartedPage(props: GettingStartedProps) {
  const { menuItem, setScreen, setSubmenuRefs } = props;

  const {
    ref: refInstallation,
    inView: inViewInstallation,
    entry: entryInstallation,
  } = useInView();
  const {
    ref: refStyles,
    inView: inViewStyles,
    entry: entryStyles,
  } = useInView();
  const { ref: refUsage, inView: inViewUsage, entry: entryUsage } = useInView();
  const {
    ref: refConfiguration,
    inView: inViewConfiguration,
    entry: entryConfiguration,
  } = useInView();
  const {
    ref: refFormatting,
    inView: inViewFormatting,
    entry: entryFormatting,
  } = useInView();

  useEffect(() => {
    if (inViewInstallation) {
      setScreen({
        item: menuItem.name,
        subItem: (menuItem.subMenu as SubMenuItem[])[0].name,
      });
    }
    if (inViewStyles) {
      setScreen({
        item: menuItem.name,
        subItem: (menuItem.subMenu as SubMenuItem[])[1].name,
      });
    }
    if (inViewUsage) {
      setScreen({
        item: menuItem.name,
        subItem: (menuItem.subMenu as SubMenuItem[])[2].name,
      });
    }
    if (inViewConfiguration) {
      setScreen({
        item: menuItem.name,
        subItem: (menuItem.subMenu as SubMenuItem[])[3].name,
      });
    }
    if (inViewFormatting) {
      setScreen({
        item: menuItem.name,
        subItem: (menuItem.subMenu as SubMenuItem[])[4].name,
      });
    }
    setSubmenuRefs([
      entryInstallation,
      entryStyles,
      entryUsage,
      entryConfiguration,
      entryFormatting,
    ]);
  }, [
    inViewInstallation,
    inViewStyles,
    inViewUsage,
    inViewConfiguration,
    inViewFormatting,
  ]);

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
      <Title title={menuItem?.title} />
      <div id={menuItem?.name}>
        <div
          className={`${styles.section} ${styles.sectionScroll}`}
          id={(menuItem.subMenu as SubMenuItem[])[0].name}
          ref={refInstallation}
        >
          <h3>Installation</h3>
          <p>
            daily-selector is delivered through npm package as well as through
            link
          </p>
          <p>
            To integrate daily-selector into your project, follow these steps:
          </p>
          <p className={styles.subSection}>
            <strong>Installing via npm module</strong>
          </p>
          <p>
            npm package{" "}
            <Link
              className={styles.link}
              target="_blank"
              to="https://www.npmjs.com/package/daily-selector"
            >
              link
            </Link>
          </p>
          <p>Install daily-selector as an NPM package:</p>
          <CopyContent content={npmJsContent} />
          <p className={styles.subSection}>
            <strong>Installing via link</strong>
          </p>
          <p>Use daily-selector as a link:</p>
          <CopyContent content={scriptContent} />
        </div>

        <div
          className={`${styles.section} ${styles.sectionScroll}`}
          id={(menuItem.subMenu as SubMenuItem[])[1].name}
          ref={refStyles}
        >
          <h3>Styles</h3>
          <p>You will need to include daily-selector CSS file.</p>
          <p>
            Since this is a ui library, the css files contains the design
            elements required for the structure and design of the daily-selector
          </p>
          <p>
            Please note that this css contains the basic design of the library
            and its highly customizable.
          </p>
          <p>This step depends on how daily-selector was installed:</p>
          <p className={styles.subSection}>
            <strong>If installed via npm module</strong>
          </p>
          <p>inport the css file</p>
          <CopyContent content={importCssContent} />
          <p className={styles.subSection}>
            <strong>If installed via link</strong>
          </p>
          <p>link to the file:</p>
          <CopyContent content={cssLinkContent} />
        </div>

        <div
          className={`${styles.section} ${styles.sectionScroll}`}
          id={(menuItem.subMenu as SubMenuItem[])[2].name}
          ref={refUsage}
        >
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

        <div
          className={`${styles.section} ${styles.sectionScroll}`}
          id={(menuItem.subMenu as SubMenuItem[])[3].name}
          ref={refConfiguration}
        >
          <h3>Configuration</h3>
          <p>daily-selector in action using all the options available:</p>
          <CopyContent content={allOptionContent} />
          <p>
            Please note: we are in the process of adding more features to our
            beloved daily-selector and the above will be updated.
          </p>
          <ul className={styles["configuration-list"]}>
            <li>
              <span className={styles["configuration-item"]}>elementId</span>{" "}
              binds the date selector to a form field
            </li>
            <li>
              <span className={styles["configuration-item"]}>
                includeHeader
              </span>{" "}
              adds header to the date selector, this header acts as a text
              holder for the selected date with date, month year and day.{" "}
              <strong>By default includeHeader is false</strong>
            </li>
            <li>
              <span className={styles["configuration-item"]}>
                displayFormat
              </span>{" "}
              formats date to the selected format, more information on
              formatting is mentioned in the next section.{" "}
              <strong>
                By default displayFormat is set to javascript date object
              </strong>
            </li>
            <li>
              <span className={styles["configuration-item"]}>year</span> sets
              the min and max to the limit of year list in date selector. The
              year has 2 inputs min and max.{" "}
              <strong>
                By default min is set to current year - 10 and max is set to
                current year
              </strong>
            </li>
            <li>
              <span className={styles["configuration-item"]}>color</span> sets
              the color to the UI. There is two colors for the date selector ui,
              primary and secondary.{" "}
              <strong>
                By default primary color is set to #000000 and secondary color
                is set to #e9e8e8
              </strong>
            </li>
            <li>
              <span className={styles["configuration-item"]}>closeOptions</span>{" "}
              sets the options for the closing of the modal. Date selector opens
              on the modal, this configuration helps how to closing of the modal
              should behave. There are two options in closeOptions -
              closeOnClickOutsideModal and closeOnKeyboardKeys. The names of the
              options define its meaning clearly.{" "}
              <strong>
                By default closeOnClickOutsideModal is set to false and
                closeOnKeyboardKeys is set to false
              </strong>
            </li>
          </ul>
        </div>

        <div
          className={`${styles.section} ${styles.sectionScroll}`}
          id={(menuItem.subMenu as SubMenuItem[])[4].name}
          ref={refFormatting}
        >
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
      </div>
    </>
  );
}
