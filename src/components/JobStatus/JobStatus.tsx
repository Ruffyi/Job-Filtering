import { default as bemCssModules } from 'bem-css-modules';
import { default as JobStatusStyles } from './JobStatus.module.scss';

import TJobStatus from './JobStatus.types';

const styled = bemCssModules(JobStatusStyles);

bemCssModules.setSettings({
	modifierDelimiter: '--',
});

const JobStatus = ({ status }: TJobStatus) => {
	return <div className={styled('', { [status]: true })}>{status}</div>;
};

export default JobStatus;
