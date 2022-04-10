import { default as bemCssModules } from 'bem-css-modules';
import { default as JobItemOffertStyles } from './JobItemOffert.module.scss';

import JobStatus from '../JobStatus/JobStatus';

import TJobItemOffert from './JobItemOffert.types';

const styled = bemCssModules(JobItemOffertStyles);

const JobItemOffert = ({
	logo,
	company,
	position,
	featured,
	newOffert,
	postedAt,
	contract,
	location,
}: TJobItemOffert) => {
	return (
		<div className={styled()}>
			<div className={styled('image')}>
				<img
					className='img'
					src={`./../../assets/images/${logo}`}
					alt={`${company} logo`}
				/>
			</div>
			<div className={styled('overview')}>
				<div className={styled('name')}>
					<p className={styled('company')}>{company}</p>
					{newOffert && <JobStatus status='new' />}
					{featured && <JobStatus status='featured' />}
				</div>
				<h2 className={styled('title')}>{position}</h2>
				<ul className={styled('informations')}>
					<li className={styled('information')}>{postedAt}</li>
					<li className={styled('information')}>{contract}</li>
					<li className={styled('information')}>{location}</li>
				</ul>
			</div>
		</div>
	);
};

export default JobItemOffert;
