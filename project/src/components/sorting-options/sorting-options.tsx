import { MouseEventHandler, useState } from 'react';
import { sortOffersAction } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SortTypes } from '../../types/types';

function SortingOptions(): JSX.Element {
  const [isOpenedSelect, setStateSelect] = useState(false);

  const activeSort = useAppSelector((state) => state.sortOffers);
  const dispatch = useAppDispatch();

  const changeSortOption = (selectedOption: SortTypes): void => {
    if (selectedOption !== activeSort) {
      dispatch(sortOffersAction(selectedOption));
    }
    setStateSelect(false); // Close pseudo-select
  };

  const handleSelectClick: MouseEventHandler<HTMLSpanElement> = (): void => (setStateSelect(!isOpenedSelect));

  return (
    <form className="places__sorting" method="get" action="">
      <span className="places__sorting-caption">Sort by</span>{' '}
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSelectClick}
      >
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom places__options--${isOpenedSelect ? 'opened' : 'closed'}`}>
        {Object.values(SortTypes).map((sortOption) => (
          <li className={`places__option${activeSort === sortOption ? ' places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => (changeSortOption(sortOption))}
            key={sortOption}
          >
            {sortOption}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingOptions;
