import JobList from './components/JobList/JobList';
import Header from './layouts/Header/Header';
import Root from './layouts/Root/Root';
import JobContextProvider from './store/jobContext';

const App = () => {
	return (
		<JobContextProvider>
			<Root>
				<Header />
				<JobList />
			</Root>
		</JobContextProvider>
	);
};

export default App;
