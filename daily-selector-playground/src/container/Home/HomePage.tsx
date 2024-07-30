import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import { MenuItem } from "../../model/MenuItem";
import styles from "./Home.module.css";
import { useEffect } from "react";
import { dailySelector } from "daily-selector";

interface HomeProps {
  menuItem?: MenuItem;
}

export default function HomePage(props: HomeProps) {
  const { menuItem } = props;
  useEffect(() => {
    dailySelector.initialize({
      elementId: "birthdate",
      includeHeader: true,
      displayFormat: "DD-MMM-YYYY",
      year: {
        min: 2014,
        max: 2024,
      },
      color: {
        primary: "#0a508b",
        secondary: "#afd9fd",
      },
      closeOptions: {
        closeOnClickOutsideModal: false,
        closeOnKeyboardKeys: false,
      },
    });
  }, []);

  return (
    <>
      <Title title={menuItem?.title} />
      <div className={styles.section} id={menuItem?.name}>
        <h3>Overview</h3>
        <p>
          The daily-selector is a lightweight, feature-rich and customizable
          date selector tool that can be easily integrated into any web
          application. This utility provides a user-friendly interface for
          selecting dates, months, and years, with a smooth and responsive
          design.
        </p>
      </div>

      <div className={styles.section}>
        <h3>Features</h3>
        <ul className={styles["features-list"]}>
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

      <div className={styles.section}>
        <div className={styles.versionSection}>
          <span className={styles.version}>v1.0.1</span>
        </div>
        <div>
          <h3>Release Notes</h3>
          <ul>
            <li className={styles["features-list"]}>
              First release of the daily-selector library
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.section}>
        <h3>In Action</h3>
        <div>
          <input
            type="text"
            id="birthdate"
            className="daily-selector"
            autoComplete="off"
          />
        </div>
      </div>

      <div className={`${styles.section} ${styles.otherSections}`}>
        <div className={styles["main-box-container"]}>
          <div className={styles.boxContainer}>
            <div className={`${styles.box} ${styles.leftBox}`}>
              Learn how to quickly set up and start using daily-selector.
            </div>
            <div className={`${styles.box} ${styles.rightBox}`}>
              <Link className={styles.boxLink} to="/getting-started">
                <span>Getting Started</span>
                <div className={styles.boxLinkIcon}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
                    <line x1="10" y1="14" x2="20" y2="4" />
                    <polyline points="15 4 20 4 20 9" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles["main-box-container"]}>
          <div className={styles.boxContainer}>
            <div className={`${styles.box} ${styles.leftBox}`}>
              Explore various examples to see daily-selector in action.
            </div>
            <div className={`${styles.box} ${styles.rightBox}`}>
              <Link className={styles.boxLink} to="/examples">
                <span>Examples</span>
                <div className={styles.boxLinkIcon}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
                    <line x1="10" y1="14" x2="20" y2="4" />
                    <polyline points="15 4 20 4 20 9" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles["main-box-container"]}>
          <div className={styles.boxContainer}>
            <div className={`${styles.box} ${styles.leftBox}`}>
              Experiment with daily-selector settings in the interactive
              playground.
            </div>
            <div className={`${styles.box} ${styles.rightBox}`}>
              <Link className={styles.boxLink} to="/playground">
                <span>Playground</span>
                <div className={styles.boxLinkIcon}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
                    <line x1="10" y1="14" x2="20" y2="4" />
                    <polyline points="15 4 20 4 20 9" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles["main-box-container"]}>
          <div className={styles.boxContainer}>
            <div className={`${styles.box} ${styles.leftBox}`}>
              Discover future enhancements and plans for daily-selector.
            </div>
            <div className={`${styles.box} ${styles.rightBox}`}>
              <Link className={styles.boxLink} to="/future-scope">
                <span>Future scope</span>
                <div className={styles.boxLinkIcon}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
                    <line x1="10" y1="14" x2="20" y2="4" />
                    <polyline points="15 4 20 4 20 9" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.section} ${styles.technologySection}`}>
        <p>
          This library is built with no external dependencies purely in HTML,
          CSS & JavaScript
        </p>
        <p>Check the daily-selector github repo below</p>
        <div className={styles["tech-container"]}>
          <Link
            to="https://github.com/jacksonpais/daily-selector"
            target="_blank"
          >
            <svg
              className={styles["github-logo"]}
              viewBox="0 0 24 24"
              fill="black"
            >
              <path d="M12 2C6.475 2 2 6.475 2 12c0 4.418 2.866 8.166 6.839 9.489.5.09.682-.216.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.003.07 1.53 1.03 1.53 1.03.892 1.528 2.341 1.087 2.91.831.091-.647.35-1.087.636-1.337-2.22-.252-4.555-1.11-4.555-4.944 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.563 9.563 0 012.506.337c1.909-1.296 2.748-1.026 2.748-1.026.546 1.376.202 2.393.1 2.646.64.698 1.029 1.591 1.029 2.682 0 3.843-2.337 4.688-4.565 4.935.359.309.678.918.678 1.852 0 1.337-.012 2.419-.012 2.748 0 .269.181.577.688.48A10.003 10.003 0 0022 12c0-5.525-4.475-10-10-10z" />
            </svg>
          </Link>
          <div className={styles.technologies}>
            <div className={styles.technology}>TypeScript</div>
            <div className={styles.technology}>CSS</div>
            <div className={styles.technology}>JavaScript</div>
            <div className={styles.technology}>HTML</div>
          </div>
        </div>
      </div>
    </>
  );
}
