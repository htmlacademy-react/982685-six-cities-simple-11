import { memo, MouseEvent, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/app-process/app-process';
import { getCity } from '../../store/app-process/selectors';
import { City } from '../../types/offers';
import { AppRoute, CitiesList, CityName } from '../../const';

const ListCities = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getCity);

  const handleCityClick = useCallback((evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    const selectedCityName = evt.currentTarget.textContent as CityName;

    if (selectedCityName !== currentCity.name) {
      const selectedCity = CitiesList.find(({ name }) => name === selectedCityName) as City;
      dispatch(changeCity(selectedCity));
    }
  }, [currentCity.name, dispatch]);

  return (
    <ul className="locations__list tabs__list">
      {CitiesList.map(({ name }) => (
        <li className="locations__item" key={name}>
          <Link
            className={`locations__item-link tabs__item${name === currentCity.name ? ' tabs__item--active' : ''}`}
            to={AppRoute.Root}
            onClick={handleCityClick}
          >
            <span>{name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default memo(ListCities);
