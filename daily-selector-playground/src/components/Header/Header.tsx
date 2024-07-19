import "./styles.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon">
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
      </div>
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
  );
}
