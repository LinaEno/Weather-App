import Form from '../Form/Form';

const Header = ({ setCurrent, setFiveDays, setDate }) => {
  return (
    <header>
      <div>
        <nav>
          <div>
            <img src={''} alt="Logo" />
            <h1>weather</h1>
          </div>
          <div>
            <span>Iconka</span>
            <Form
              setDate={setDate}
              setFiveDays={setFiveDays}
              setCurrent={setCurrent}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
