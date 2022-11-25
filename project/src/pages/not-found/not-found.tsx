import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../types/types';

function NotFound(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Six cities simple: Page not found</title>
      </Helmet>

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
