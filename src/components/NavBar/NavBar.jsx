import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';
import css from './NavBar.module.css'
export default function NavBar() {
  return (
    <nav className={css.navbar}>
      <Container>
        <div className={css.navbarLinkWrapper}>
          <NavLink to="/" className="navbarLink">
            <p className="navbar__link--title">Home</p>
          </NavLink>
          <NavLink to="/movies" className="navbarLink">
            <p className="navbar__link--title">Movies</p>
          </NavLink>
        </div>
      </Container>
    </nav>
  );
}
