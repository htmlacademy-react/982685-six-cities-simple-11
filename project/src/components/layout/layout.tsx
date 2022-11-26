import { MouseEvent } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function Layout(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const handleLogoutClick = (evt: MouseEvent<HTMLAnchorElement>): void => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <nav className="header__nav">
              {authorizationStatus === AuthorizationStatus.Auth ? (
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <div className="header__nav-profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper" />
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </div>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to={AppRoute.Root} onClick={handleLogoutClick}>
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                      <div className="header__avatar-wrapper user__avatar-wrapper" />
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                </ul>
              )}
            </nav>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
}

export default Layout;
