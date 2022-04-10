import JobList from './components/JobList/JobList';
import Header from './layouts/Header/Header';
import Root from './layouts/Root/Root';

import FilterContextProvider from './store/filterContext';
import JobContextProvider from './store/jobContext';

const App = () => {
	return (
		<JobContextProvider>
			<FilterContextProvider>
				<Root>
					<Header />
					<JobList />
				</Root>
			</FilterContextProvider>
		</JobContextProvider>
	);
};

export default App;
