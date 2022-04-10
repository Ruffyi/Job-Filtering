import { default as bemCssModules } from 'bem-css-modules';
import { default as ButtonStyles } from './../Button.module.scss';

import { TRoot } from '../../../../types/shared/Root.types';

const styled = bemCssModules(ButtonStyles);

const RemoveButton = ({ children }: TRoot) => {
	return <button className={styled('', { filter: true })}>{children}</button>;
};

export default RemoveButton;
