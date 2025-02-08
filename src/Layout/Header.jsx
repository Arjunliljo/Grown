import Navbar from "./Navbar";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <Navbar />
      <div className="header__button"></div>
    </header>
  );
}
