import { createContext } from 'react';
import useFetch from '../hooks/useFetch';

import { TJob } from '../types/shared/Job.types';
import { TRoot } from '../types/shared/Root.types';

type TJobContext = {
	jobsData: TJob[];
	setJobsData: (jobsData: TJob[]) => void;
};

const jobContext = createContext<TJobContext>({
	jobsData: [],
	setJobsData: () => {},
});

const JobContextProvider = ({ children }: TRoot) => {
	const { data, setData } = useFetch<TJob>('./data/data.json');

	return (
		<jobContext.Provider value={{ jobsData: data, setJobsData: setData }}>
			{children}
		</jobContext.Provider>
	);
};

export default JobContextProvider;
