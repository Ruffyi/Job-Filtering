import { default as bemCssModules } from 'bem-css-modules';
import { default as ButtonStyles } from './Button.module.scss';

import { useContext } from 'react';
import { filterContext } from '../../../store/filterContext';

import TButton from './Button.types';

const styled = bemCssModules(ButtonStyles);

bemCssModules.setSettings({
	modifierDelimiter: '--',
});

const Button = ({ status, name, children }: TButton) => {
	const { filterOptions, setFilterOptions } = useContext(filterContext);

	const textContent = children ? children : name;

	const addRequirementToFilterOptions = () => {
		if (typeof name !== 'string') return;

		if (filterOptions.includes(name)) return;

		setFilterOptions([...filterOptions, name]);
	};

	return (
		<button
			className={styled('', { [status]: true })}
			onClick={addRequirementToFilterOptions}
		>
			{textContent}
		</button>
	);
};

export default Button;
