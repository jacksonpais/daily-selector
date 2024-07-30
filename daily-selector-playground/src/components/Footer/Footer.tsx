import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div>
        © {new Date().getFullYear()} daily-selector. All rights reserved.
      </div>
    </footer>
  );
}
