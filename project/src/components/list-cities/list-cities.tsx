import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changeCityAction } from '../../store/actions';
import { City, Cities, CityName, AppRoute } from '../../types/types';

type ListCitiesProps = {
  cities: Cities;
  currentCity: City;
}

const ListCities = ({ cities, currentCity }: ListCitiesProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleLocationChange = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    const selectedCityName = evt.currentTarget.textContent as CityName;
    const selectedCity = cities.find((city) => city.name === selectedCityName ) as City;

    dispatch(changeCityAction(selectedCity));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city.name}>
          <Link
            className={`locations__item-link tabs__item${city.name === currentCity.name ? ' tabs__item--active' : ''}`}
            to={AppRoute.Root}
            onClick={handleLocationChange}
          >
            <span>{city.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListCities;
