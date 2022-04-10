import { default as bemCssModules } from 'bem-css-modules';
import { default as JobItemOffertStyles } from './JobItemOffert.module.scss';
import TJobItemOffert from './JobItemOffert.types';

const styled = bemCssModules(JobItemOffertStyles);

const JobItemOffert = ({
	logo,
	company,
	position,
	featured,
	newOffert,
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
					{newOffert && <div className='status status--new'>New!</div>}
					{featured && <div className='status status--featured'>Featured</div>}
				</div>
				<h2 className='offert__title'>{position}</h2>
				<ul className='offert__informations'>
					<li className='offert__information'></li>
					<li className='offert__information'></li>
					<li className='offert__information'></li>
				</ul>
			</div>
		</div>
	);
};

export default JobItemOffert;
