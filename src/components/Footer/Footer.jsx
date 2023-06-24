// import { BsGithub } from "react-icons/fa";
import { BsGithub } from 'react-icons/bs';
import css from './Footer.module.css'

 const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.data}>
        © 2023 | All Rights Reserved | Developed by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/NataliiaDyrkach"
        >
          <BsGithub className={css.svg}/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;