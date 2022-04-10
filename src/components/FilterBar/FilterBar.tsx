import { default as bemCssModules } from 'bem-css-modules';
import { default as FilterBarStyles } from './FilterBar.module.scss';

const styled = bemCssModules(FilterBarStyles);

const FilterBar = () => {
	return <div className={styled()}></div>;
};

export default FilterBar;
