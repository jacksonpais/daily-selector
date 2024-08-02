import CopyContent from "../../components/CopyContent/CopyContent";
import Title from "../../components/Title/Title";
import { MenuItem, SubMenuItem } from "../../model/MenuItem";
import styles from "./Examples.module.css";

interface ExampleProps {
  menuItem: MenuItem;
}

export default function ExamplePage(props: ExampleProps) {
  const { menuItem } = props;

  const npmJsContent = "npm i daily-selector";

  return (
    <>
      <Title title={menuItem?.title} />
      <div id={menuItem?.name}>
        <div
          className={`${styles.section} ${styles.sectionScroll}`}
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
          <p>Install daily-selector as an NPM package:</p>
          <CopyContent content={npmJsContent} />
          <p className={styles.subSection}>
            <strong>Installing via link</strong>
          </p>
          <p>Use daily-selector as a link:</p>
          <CopyContent content={npmJsContent} />
        </div>
      </div>
    </>
  );
}
