import { default as bemCssModules } from 'bem-css-modules';
import { default as JobItemStyles } from './JobItem.module.scss';

import { TJob } from '../../types/shared/Job.types';
import JobItemOffert from '../JobItemOffert/JobItemOffert';

const styled = bemCssModules(JobItemStyles);

const JobItem = ({
	id,
	logo,
	company,
	new: newOffert,
	featured,
	position,
	postedAt,
	contract,
	location,
}: TJob) => {
	console.log(id);
	return (
		<div className={styled()}>
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
			<div className={styled('requirement')}>Hi</div>
		</div>
	);
};

// jobRootElement.innerHTML = `
//                         <p class="offert__company">${company}</p>
//                         ${
// 													newOffert
// 														? '<div class="status status--new">New!</div>'
// 														: ''
// 												}
//                         ${
// 													featured
// 														? '<div class="status status--featured">Featured</div>'
// 														: ''
// 												}
//                     </div>
//                     <h2 class="offert__title">${position}</h2>
//                     <ul class="offert__informations">
//                         <li class="offert__information">${postedAt}</li>
//                         <li class="offert__information">${contract}</li>
//                         <li class="offert__information">${location}</li>
//                     </ul>
//                 </div>
//             </div>
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
