import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer>
        <hr />
        <div className="footer-links">
          <ul>
            <li>
              <NavLink to="/contact-information">Контактная информация</NavLink>
            </li>
            <li>
              <NavLink to="/user-agreement">
                Пользовательское соглашение
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-contacts">
          <p>© 2025-2025 Мой сайт</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
