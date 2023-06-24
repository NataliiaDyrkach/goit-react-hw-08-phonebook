import { useAuth } from 'redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'
import Logo from 'components/Logo/Logo';


const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={css.nav}>
      <Logo/>
      <NavLink className={css.navLink} to="/">HOME</NavLink>
      {isLoggedIn && <NavLink className={css.navLink} to="contacts">CONTACTS</NavLink>}
    </div>
  );
};

export default Navigation;