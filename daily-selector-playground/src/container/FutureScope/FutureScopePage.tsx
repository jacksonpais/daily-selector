import Title from "../../components/Title/Title";
import { MenuItem } from "../../model/MenuItem";
import styles from "./FutureScope.module.css";

interface FutureScopeProps {
  menuItem: MenuItem;
}

export default function FutureScopePage(props: FutureScopeProps) {
  const { menuItem } = props;
  return (
    <>
      <Title title={menuItem?.title} />
      <div id={menuItem?.name}>
        <div className={styles.section}>
          <h3>Overview</h3>
          <p>
            This section will update you of the scope planned for daily-selector
          </p>
          <table>
            <thead>
              <tr>
                <th>Scope</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>If date falls in range stop navigation through button</td>
              </tr>
              <tr>
                <td>Stop keyboard from popping in mobile view</td>
              </tr>
              <tr>
                <td>Screen height change issue</td>
              </tr>
              <tr>
                <td>Min max date range</td>
              </tr>
              <tr>
                <td>Separate all code in duifferent modules</td>
              </tr>
              <tr>
                <td>Disable date list</td>
              </tr>
              <tr>
                <td>Highlight date list</td>
              </tr>
              <tr>
                <td>Internationalization and localization</td>
              </tr>
              <tr>
                <td>Include date range from and to</td>
              </tr>
              <tr>
                <td>Include Time</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
