import { default as bemCssModules } from 'bem-css-modules';
import { default as JobItemStyles } from './JobItem.module.scss';

import { TJob } from '../../types/shared/Job.types';

import JobItemOffert from '../JobItemOffert/JobItemOffert';
import JobItemRequirement from '../JobItemRequirement/JobItemRequirement';

const styled = bemCssModules(JobItemStyles);

bemCssModules.setSettings({
	modifierDelimiter: '--',
});

const JobItem = ({
	logo,
	company,
	new: newOffert,
	featured,
	position,
	postedAt,
	contract,
	location,
	role,
	level,
	languages,
	tools,
}: TJob) => {
	return (
		<div className={styled('', { new: newOffert })}>
			<JobItemOffert
				logo={logo}
				company={company}
				newOffert={newOffert}
				featured={featured}
				position={position}
				postedAt={postedAt}
				contract={contract}
				location={location}
			/>
			<JobItemRequirement
				role={role}
				level={level}
				languages={languages}
				tools={tools}
			/>
		</div>
	);
};

// jobRootElement.innerHTML = `
//             <div class="job__requirement">
//             ${[role, level, ...languages, ...tools]
// 							.map((requirement: string) => {
// 								return `<button class="btn btn--requirement" data-requirement=${requirement}>${requirement}</button>`;
// 							})
// 							.join('')}
//             </div>
//             `;
// return jobRootElement;
export default JobItem;
