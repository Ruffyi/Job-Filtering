import { default as bemCssModules } from 'bem-css-modules';
import { default as ButtonStyles } from './Button.module.scss';

import { useContext } from 'react';
import { filterContext } from '../../../store/filterContext';

import TButton from './Button.types';

const styled = bemCssModules(ButtonStyles);

bemCssModules.setSettings({
	modifierDelimiter: '--',
});

const Button = ({ requirement }: TButton) => {
	const { filterOptions, setFilterOptions } = useContext(filterContext);

	const addRequirementToFilterOptions = () => {
		if (filterOptions.includes(requirement)) return;

		setFilterOptions([...filterOptions, requirement]);
	};

	return (
		<button
			className={styled('', { requirement: true })}
			onClick={addRequirementToFilterOptions}
		>
			{requirement}
		</button>
	);
};

export default Button;
