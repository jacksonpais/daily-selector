import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

interface HeaderProps {
  toggleMenu: any;
  isMenuOpen: boolean;
}

export default function Header(props: HeaderProps) {
  const { toggleMenu, isMenuOpen } = props;
  return (
    <header className={styles.header}>
      <NavLink className={styles.logo} to="/">
        <div className={styles["logo-icon"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="9" y1="4" x2="9" y2="20" />
          </svg>
        </div>
        <span>daily-selector</span>
      </NavLink>
      <div className={styles["menu-icon"]} onClick={toggleMenu}>
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <line x1="4" y1="6" x2="20" y2="6" />{" "}
            <line x1="4" y1="12" x2="20" y2="12" />{" "}
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        )}
      </div>
    </header>
  );
}
