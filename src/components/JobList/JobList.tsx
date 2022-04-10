import { default as bemCssModules } from 'bem-css-modules';
import { default as JobListStyles } from './JobList.module.scss';

import { useContext } from 'react';
import { jobContext } from '../../store/jobContext';
import JobItem from '../JobItem/JobItem';

const styled = bemCssModules(JobListStyles);

const JobList = () => {
	const { jobsData } = useContext(jobContext);

	return (
		<section className={styled()}>
			{jobsData.map(
				({
					id,
					logo,
					company,
					featured,
					new: newOffert,
					contract,
					location,
					postedAt,
					role,
					level,
					languages,
					tools,
					position,
				}) => {
					return (
						<JobItem
							id={id}
							company={company}
							logo={logo}
							featured={featured}
							new={newOffert}
							contract={contract}
							location={location}
							postedAt={postedAt}
							role={role}
							level={level}
							languages={languages}
							tools={tools}
							position={position}
						/>
					);
				}
			)}
		</section>
	);
};

export default JobList;
