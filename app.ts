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
