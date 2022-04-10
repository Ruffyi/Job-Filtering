import { default as bemCssModules } from 'bem-css-modules';
import { default as JobListStyles } from './JobList.module.scss';

import { useContext } from 'react';
import { jobContext } from '../../store/jobContext';
import { filterContext } from '../../store/filterContext';
import JobItem from '../JobItem/JobItem';
import FilterBar from '../FilterBar/FilterBar';

const styled = bemCssModules(JobListStyles);

const JobList = () => {
	const { jobsData } = useContext(jobContext);
	const { filterOptions } = useContext(filterContext);

	const filterData = () => {
		const filteredData = jobsData.filter(jobData => {
			const { role, level, languages, tools } = jobData;
			const requirements = [role, level, ...languages, ...tools];
			const mappedData = requirements.map(requirement =>
				filterOptions.includes(requirement)
			);
			const activeJobsElements = mappedData.filter(Boolean).length;
			return activeJobsElements === filterOptions.length && jobData;
		});

		return filteredData;
	};

	return (
		<section className={styled()}>
			<FilterBar />
			{filterData().map(
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
