import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = <T>(url: string) => {
	const [data, setData] = useState<T[] | []>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	const fetchData = async () => {
		setLoading(true);
		try {
			const response = await axios(url, {
				method: 'GET',
			});
			const data = response.data;
			setData(data);
			setLoading(false);
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message);
			}
		}
	};

	useEffect(() => {
		fetchData();
	}, [url]);

	return { data, setData, loading, error } as const;
};

export default useFetch;
