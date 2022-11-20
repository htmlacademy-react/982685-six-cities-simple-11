import './spinner.css';

function Spinner(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <span className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="Six cities logo" width="81" height="41" />
            </span>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Loading data... Please wait</h1>
            <div className="lds-spinner">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Spinner;
