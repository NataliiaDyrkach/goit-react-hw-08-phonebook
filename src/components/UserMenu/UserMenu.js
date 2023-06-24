import { useDispatch } from 'react-redux';
import { useAuth } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/oparation';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <div className={css.user}>
        <p className={css.username}>Welcome, {user.name} {user.email}</p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
