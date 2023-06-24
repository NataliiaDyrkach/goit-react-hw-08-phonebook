import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/oparation';
import css from './LoginForm.module.css';



const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <span className={css.span}>E-mail</span>
        <input className={css.input} type="email" name="email" />
      </label>
      <label className={css.label}>
        <span className={css.span}>Password</span>
        <input className={css.input} type="password" name="password" />
      </label>
      <button className={css.button} type="submit">Log In</button>
    </form>
  );
};


export default LoginForm;