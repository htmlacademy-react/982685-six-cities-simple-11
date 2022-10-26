import { Link } from 'react-router-dom';
import { AppRoute } from '../../types/types';
import Logo from '../../components/logo/logo';

function NotFound(): JSX.Element {
  return (
    <div className="page page--gray page--login">
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
            <h1 className="login__title">Error 404: Page not found</h1>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Root}>
                <span>Go to homepage</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
