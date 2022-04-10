import { default as bemCssModules } from 'bem-css-modules';
import { default as JobListStyles } from './JobList.module.scss';

const styled = bemCssModules(JobListStyles);

const JobList = () => {
	return <section className={styled()}></section>;
};

export default JobList;
