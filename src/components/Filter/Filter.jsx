import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import css from '../ContactForm/ContactForm.module.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFieldFilter = event =>
    dispatch(setFilter(event.currentTarget.value));

  return (
    <div className={css.form}>
      <h2 className={css.text}>Contacts</h2>
      <p className={css.text}>Find contacts by name</p>
      <label className={css.label}>
        <input
          className={css.input}
          name="filter"
          type="text"
          value={filter}
          onChange={changeFieldFilter}
        />
      </label>
    </div>
  );
};

export default Filter;
