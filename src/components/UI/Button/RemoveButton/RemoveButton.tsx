import { default as bemCssModules } from 'bem-css-modules';
import { default as ButtonStyles } from './../Button.module.scss';

import { TRoot } from '../../../../types/shared/Root.types';
import TRemoveButton from './RemoveButton.types';

const styled = bemCssModules(ButtonStyles);

const RemoveButton = ({
	children,
	removeFilterOption,
}: TRoot & TRemoveButton) => {
	return (
		<button
			className={styled('', { filter: true })}
			onClick={removeFilterOption}
		>
			{children}
		</button>
	);
};

export default RemoveButton;
