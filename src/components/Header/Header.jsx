import Form from '../Form/Form';
import css from './Header.module.css'
import { Logo } from './Logo';

const Header = ({ setCurrent, setFiveDays, setDate }) => {
  return (
    <header>
        <div className={css.header__container}>
          <div className={css.logo__wrapper}>
            <Logo />
            <h1 className={css.header__title}>weather</h1>
          </div>
            {/* <span>Iconka</span> */}
            <Form
              setDate={setDate}
              setFiveDays={setFiveDays}
              setCurrent={setCurrent}
            />
      </div>
    </header>
  );
};

export default Header;
