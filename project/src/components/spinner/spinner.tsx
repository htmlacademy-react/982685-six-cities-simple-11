import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import './spinner.css';

function Spinner(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Six cities simple: Loading data</title>
      </Helmet>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
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
          <section className="locations locations--login locations--current" />
        </div>
      </main>
    </div>
  );
}

export default Spinner;
