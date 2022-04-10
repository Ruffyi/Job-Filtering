import { default as bemCssModules } from 'bem-css-modules';
import { default as ButtonStyles } from './Button.module.scss';

import TButton from './Button.types';

const styled = bemCssModules(ButtonStyles);

bemCssModules.setSettings({
	modifierDelimiter: '--',
});

const Button = ({ requirement }: TButton) => {
	return (
		<button className={styled('', { requirement: true })}>{requirement}</button>
	);
};

export default Button;
