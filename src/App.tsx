import useFetch from './hooks/useFetch';

import Header from './layouts/Header/Header';
import Root from './layouts/Root/Root';

const App = () => {
	const { data } = useFetch('data/data.json');

	console.log(data);

	return (
		<Root>
			<Header />
		</Root>
	);
};

export default App;
