import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Menu = () => {
  return (
    <header className="site-header">
      <div className="slogan-logo">
        <Link to="/">
          <img className="logo" src={logo} alt="Логотип" />
        </Link>
        <h2 className="header-slogan" title="Построй себя сам">
          Build yourself <span className="slogan-highlight">Yourself</span>
        </h2>
      </div>
      <nav className="nav-header">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-header-links active-link' : 'nav-header-links'
          }
          to="/training-programs"
        >
          Программы тренировок
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-header-links active-link' : 'nav-header-links'
          }
          to="/exercise-pick"
        >
          Подобрать упражнение
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-header-links active-link' : 'nav-header-links'
          }
          to="/bmi"
        >
          BMI Калькулятор
        </NavLink>
      </nav>
    </header>
  );
};

export default Menu;
