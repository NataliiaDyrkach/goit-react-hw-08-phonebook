import homeBg from 'components/images/phonebook.png';
import css from '../components/Layout/Layout.module.css';

const HomePage = () => {
  return (
    <>
      <div className={css.container}>
        <img className={css.img} src={homeBg} alt="Phone book" />
      </div>
    </>
  );
};

export default HomePage;
