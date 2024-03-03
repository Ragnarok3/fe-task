import vectortLogo from "../assets/Vector.png";
import "../App.css";

export default function Header() {
  return (
    <div className="header">
      <a href="#" className="logo">
        <img src={vectortLogo} alt="vectorlogo" /> <span>Digital agency</span>
      </a>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a href="#" className="main-nav-link">
              About
            </a>{" "}
          </li>
          <li>
            <a href="#" className="main-nav-link">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link">
              Projects
            </a>
          </li>
          <li>
            <button href="#" className="button">
              Get in Touch
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
