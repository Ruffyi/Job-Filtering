import { default as bemCssModules } from 'bem-css-modules';
import { default as RootStyles } from './Root.module.scss';

import { TRoot } from '../../types/shared/Root.types';

const styled = bemCssModules(RootStyles);

const Root = ({ children }: TRoot) => {
	return <main className={styled()}>{children}</main>;
};

export default Root;
