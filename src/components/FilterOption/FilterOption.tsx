import { default as bemCssModules } from 'bem-css-modules';
import { default as FilterOptionStyles } from './FilterOption.module.scss';

import Button from '../UI/Button/Button';

import TFilterOption from './FilterOption.types';
import RemoveButton from '../UI/Button/RemoveButton/RemoveButton';

import { filterContext } from '../../store/filterContext';
import { useContext } from 'react';

const styled = bemCssModules(FilterOptionStyles);

const FilterOption = ({ name }: TFilterOption) => {
	const { filterOptions, setFilterOptions } = useContext(filterContext);

	const removeFilterOption = () => {
		setFilterOptions(
			filterOptions.filter(filterOption => filterOption !== name)
		);
	};

	return (
		<div className={styled()}>
			<Button status='none' name={name} />
			<RemoveButton removeFilterOption={removeFilterOption}>
				<img src='./assets/images/icon-remove.svg' alt='Delete filter option' />
			</RemoveButton>
		</div>
	);
};

export default FilterOption;
