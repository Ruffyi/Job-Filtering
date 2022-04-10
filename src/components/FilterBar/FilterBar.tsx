import { default as bemCssModules } from 'bem-css-modules';
import { default as FilterBarStyles } from './FilterBar.module.scss';

import { useContext } from 'react';
import { filterContext } from '../../store/filterContext';
import FilterOption from '../FilterOption/FilterOption';

const styled = bemCssModules(FilterBarStyles);

const FilterBar = () => {
	const { filterOptions } = useContext(filterContext);

	return (
		<div className={styled()}>
			{filterOptions.map(filterOption => {
				return <FilterOption name={filterOption} />;
			})}
		</div>
	);
};

export default FilterBar;
