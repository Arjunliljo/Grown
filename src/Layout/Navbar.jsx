import { useState } from "react";

export default function Navbar() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleMenu = () => {
    setIsChecked((prev) => !prev);
    document.body.classList.toggle("no-scroll", !isChecked);
  };

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsChecked(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <>
      <div className="navigation">
        <input
          checked={isChecked}
          type="checkbox"
          className="navigation__checkbox"
          id="navi__toggle"
          aria-label="Toggle navigation"
        />
        <label
          htmlFor="navi__toggle"
          className="navigation__btn"
          onClick={toggleMenu}
        >
          <span className="navigation__icon"></span>
        </label>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a onClick={(e) => smoothScroll(e, "#home")}>Home</a>
            </li>
            <li className="navigation__item">
              <a onClick={(e) => smoothScroll(e, "#about")}>About</a>
            </li>
            <li className="navigation__item">
              <a onClick={(e) => smoothScroll(e, "#service")}>Service</a>
            </li>
            <li className="navigation__item">
              <a onClick={(e) => smoothScroll(e, "#projects")}>Projects</a>
            </li>
            <li className="navigation__item">
              <a
                href="https://wa.me/911237896540"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
            <li
              className="navigation__item"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="header__button-mobile"></div>
            </li>
          </ul>
        </nav>
      </div>
      <nav className="navbar">
        <li>
          <a onClick={(e) => smoothScroll(e, "#home")}>Home</a>
        </li>
        <li>
          <a onClick={(e) => smoothScroll(e, "#about")}>About</a>
        </li>
        <li>
          <a onClick={(e) => smoothScroll(e, "#service")}>Services</a>
        </li>
        <li>
          <a onClick={(e) => smoothScroll(e, "#projects")}>Projects</a>
        </li>
        <li>
          <a
            href="https://wa.me/911234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </li>
      </nav>
    </>
  );
}
