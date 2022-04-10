// TYPES
interface IJob {
	id: number;
	company: string;
	logo: string;
	new: boolean;
	featured: boolean;
	position: string;
	role: string;
	level: string;
	postedAt: string;
	contract: string;
	location: string;
	languages: string[];
	tools: string[];
}

enum EventTypes {
	'CLICK' = 'click',
	'INITIALLOADED' = 'DOMContentLoaded',
}

(() => {
	class JobListings {
		rootElement: HTMLDivElement;
		jobDataList: IJob[];
		filterOptions: string[] = [];
		filter = new JobFilter();

		constructor() {
			this.rootElement = document.querySelector('[data-root]');
			this.jobDataList = [];
			this.addEventListeners();
		}

		addEventListeners = () => {
			window.addEventListener(EventTypes.INITIALLOADED, this.fetchJobData);
		};

		fetchJobData = async () => {
			const response = await fetch('data/data.json', {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const data = await response.json();
			this.jobDataList = data;
			console.log(this.jobDataList);
			this.attachJobDataToHTML();
		};

		attachJobDataToHTML = () => {
			this.jobDataList.forEach(jobData => {
				this.rootElement.append(new Job(jobData).renderJobDataModel());
			});
			console.log(this.jobDataList);
			this.filterData();
			new JobFilter();
		};

		filterData() {
			console.log(this);
			const filteredData = this.jobDataList
				.filter(job => {
					const { role, level, languages, tools } = job;
					const requirments = [role, level, ...languages, ...tools];
					const mappedData = requirments.map(requirment =>
						this.filterOptions.includes(requirment)
					);
					const activeJobsElements = mappedData.filter(Boolean).length;
					return activeJobsElements === this.filterOptions.length && job;
				})
				.map(job => job.company);

			this.setFilteredJobs(filteredData);
		}

		setFilteredJobs = (filteredData: string[]) => {
			const allJobs = document.querySelectorAll('.job');
			allJobs.forEach(job => {
				job.classList.add('hide');
				const jobCompanyName =
					job.querySelector('.offert__company').textContent;
				if (filteredData.includes(jobCompanyName)) {
					job.classList.remove('hide');
					job.classList.add('active');
				}
			});
		};
	}

	class Job {
		job: IJob;
		constructor(job: IJob) {
			this.job = job;
		}
		renderJobDataModel() {
			const {
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
			} = this.job;

			const jobRootElement = document.createElement('div');
			const newJob = newOffert && 'job--new';
			jobRootElement.classList.add('job');
			if (newJob) {
				jobRootElement.classList.add(newJob);
			}

			jobRootElement.innerHTML = `
                <div class="offert">
                <div class="offert__image">
                    <img
                        class="img"
                        src=${logo}
                        alt="${company} logo"
                    />
                </div>
                <div class="offert__overview">
                    <div class="offert__name">
                        <p class="offert__company">${company}</p>
                        ${
													newOffert
														? '<div class="status status--new">New!</div>'
														: ''
												}
                        ${
													featured
														? '<div class="status status--featured">Featured</div>'
														: ''
												}
                    </div>
                    <h2 class="offert__title">${position}</h2>
                    <ul class="offert__informations">
                        <li class="offert__information">${postedAt}</li>
                        <li class="offert__information">${contract}</li>
                        <li class="offert__information">${location}</li>
                    </ul>
                </div>
            </div>
            <div class="job__requirement">
            ${[role, level, ...languages, ...tools]
							.map((requirement: string) => {
								return `<button class="btn btn--requirement" data-requirement=${requirement}>${requirement}</button>`;
							})
							.join('')}
            </div>
            `;
			return jobRootElement;
		}
	}

	class JobFilter {
		filterOptionsArea: NodeList;
		filterBar: HTMLDivElement;
		constructor() {
			this.filterOptionsArea = document.querySelectorAll('.job__requirement');
			this.filterBar = document.querySelector('.search');
			this.addEventListeners();
		}

		addEventListeners = () => {
			this.filterOptionsArea.forEach(filterOptionArea =>
				filterOptionArea.addEventListener('click', ({ target }) => {
					const currentTarget = target as HTMLButtonElement;
					if (currentTarget.classList.contains('btn')) {
						this.addFilterOption(currentTarget);
					}
				})
			);
		};

		addFilterOptionToFilterBar = (requirement: string) => {
			const filterOptionItem = document.createElement('div');
			filterOptionItem.classList.add('filter-option');
			filterOptionItem.dataset.filter = requirement;

			filterOptionItem.innerHTML = `
			<button class="btn">${requirement}</button>
					<button class="btn btn--filter" data-remove>
			 			<img src="./assets/images/icon-remove.svg" href="Delete filter option"/>
					</button>
			`;

			this.filterBar.append(filterOptionItem);
		};

		addFilterOption = (HTMLTarget: HTMLButtonElement) => {
			const currentHTMLTargetRequirement = HTMLTarget.dataset.requirement;

			if (this.filterOptions.includes(currentHTMLTargetRequirement)) return;

			// Filter Options Management
			this.filterOptions.push(currentHTMLTargetRequirement);
			this.addFilterOptionToFilterBar(currentHTMLTargetRequirement);

			// Filtering Data
			this.filterData();
		};

		// addFilterOptionToBar = (jobData: IJob[], option: string) => {
		// 	this.filterBar.innerHTML += `
		// 	<div class="filter-option" data-filter=${option}>
		// 		<button class="btn">${option}</button>
		// 		<button class="btn btn--filter" data-remove>
		// 			<img src="./assets/images/icon-remove.svg" href="Delete filter option"/>
		// 		</button>
		// 	</div>
		// 	`;
		// 	document.querySelectorAll('[data-remove]').forEach(deleteBtn => {
		// 		deleteBtn.addEventListener('click', e => {
		// 			const closestFilterOptionTarget = (
		// 				e.target as HTMLButtonElement
		// 			).closest('.filter-option') as HTMLDivElement;
		// 			closestFilterOptionTarget.remove();
		// 			(this.filterOptions = this.filterOptions.filter(
		// 				filterOption =>
		// 					filterOption !== closestFilterOptionTarget.dataset.filter
		// 			)),
		// 				this.filterData(jobData);
		// 		});
		// 	});
		// };

		// setFilterOption = (jobData: IJob[]) => {
		// 	this.filterOptionsArea.forEach(filterOptionArea =>
		// 		filterOptionArea.addEventListener('click', e => {
		// 			const target = e.target as HTMLButtonElement;
		// 			if (target.classList.contains('btn')) {
		// 				if (this.filterOptions.includes(target.textContent)) return;
		// 				this.filterOptions.push(target.textContent);
		// 				this.addFilterOptionToBar(jobData, target.textContent);
		// 			}
		// 			this.filterData(jobData);
		// 		})
		// 	);
		// };
	}

	const jobs = new JobListings();
})();
