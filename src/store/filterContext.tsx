import { createContext, useState } from 'react';
import { TRoot } from '../types/shared/Root.types';

type TFilterContext = {
	filterOptions: string[];
	setFilterOptions: (options: string[]) => void;
};

const filterContext = createContext<TFilterContext>({
	filterOptions: [],
	setFilterOptions: () => {},
});

const FilterContextProvider = ({ children }: TRoot) => {
	const [filterOptions, setFilterOptions] = useState<string[]>([]);

	return (
		<filterContext.Provider value={{ filterOptions, setFilterOptions }}>
			{children}
		</filterContext.Provider>
	);
};

export default FilterContextProvider;
