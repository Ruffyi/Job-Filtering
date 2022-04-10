import { default as bemCssModules } from 'bem-css-modules';
import { default as HeaderStyles } from './Header.module.scss';

const styled = bemCssModules(HeaderStyles);

const Header = () => {
	return <header className={styled()}></header>;
};

export default Header;
