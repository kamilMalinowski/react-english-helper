import logo from "./logo.svg";
import "./App.css";
import { FiSearch } from "react-icons/fi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function App() {
  return (
    <div>
      {/* header */}
      <header className="header">
        <div className="header__wrapper">
          <p className="header__clock">19:00</p>
          <button className="header__hamburger">
            <div className="header__hamburger-line"></div>
            <div className="header__hamburger-line"></div>
            <div className="header__hamburger-line"></div>
          </button>
        </div>
      </header>

      {/* hero */}
      <section className="hero">
        <div className="hearo__image-box">
          <img
            className="hearo__picture"
            src="https://www.kamil--m.com/education/assets/english.jpg"
            alt="english flag"
          />
          <img className="hearo__logo" src={logo} alt="logo" />
        </div>
      </section>

      {/* invitation */}
      <section className="invitation">
        <div className="invitation__inputs">
          <div className="invitation__input-box">
            <label htmlFor="getStarted" className="invitation__label"></label>
            <input
              type="radio"
              name="invitation"
              id="getStarted"
              className="invitation__input"
              checked
            />
          </div>
          <div className="invitation__input-box">
            <label
              htmlFor="searchSection"
              className="invitation__label"
            ></label>
            <input
              type="radio"
              name="invitation"
              id="searchSection"
              className="invitation__input"
            />
          </div>
        </div>
        <h1 className="invitation__title">Welcome to the English Helper app</h1>
        <p className="invitation__description">
          learn the most popular words of the English language
        </p>
        <button className="invitation__btn">
          <span className="invitation__btn-text">Get started</span>
          <HiOutlineArrowNarrowRight />
        </button>
        <div className="invitation__search-box">
          <label htmlFor="search" className="invitation__search-label">
            Search
          </label>
          <input type="search" name="search" id="search" />
          <FiSearch />
        </div>
      </section>
    </div>
  );
}

export default App;
