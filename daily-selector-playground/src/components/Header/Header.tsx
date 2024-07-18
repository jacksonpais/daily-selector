import "./styles.css";

export default function Header() {
  return (
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
  );
}
