import { TiContacts } from 'react-icons/ti';
import css from './Logo.module.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link className={css.title} to="/">
      <TiContacts className={css.icon} />
      Phone<span className={css.titleColor}>book</span>
    </Link>
  );
};

export default Logo;
