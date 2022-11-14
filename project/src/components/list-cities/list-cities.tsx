import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changeCityAction } from '../../store/actions';
import { City, CityName, AppRoute } from '../../types/types';
import { cities } from '../../const';

type ListCitiesProps = {
  currentCity: City;
}

const ListCities = ({ currentCity }: ListCitiesProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleCityClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    const selectedCityName = evt.currentTarget.textContent as CityName;

    if (selectedCityName !== currentCity.name) {
      const selectedCity = cities.find(({ name }) => name === selectedCityName) as City;
      dispatch(changeCityAction(selectedCity));
    }
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map(({ name }) => (
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

export default ListCities;
