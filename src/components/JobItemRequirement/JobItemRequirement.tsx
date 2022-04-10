import { default as bemCssModules } from 'bem-css-modules';
import { default as JobItemRequirementStyles } from './JobItemRequirement.module.scss';

import Button from '../UI/Button/Button';

import TJobItemRequirement from './JobItemRequirement.types';

const styled = bemCssModules(JobItemRequirementStyles);

const JobItemRequirement = ({
	languages,
	tools,
	level,
	role,
}: TJobItemRequirement) => {
	return (
		<div className={styled()}>
			{[role, level, ...languages, ...tools].map(requirement => {
				return <Button requirement={requirement} />;
			})}
		</div>
	);
};

export default JobItemRequirement;
