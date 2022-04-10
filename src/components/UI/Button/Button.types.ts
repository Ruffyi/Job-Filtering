import { ReactNode } from 'react';

type TButton = {
	status: 'filter' | 'requirement' | 'none';
	name: string;
	children?: ReactNode;
};

export default TButton;
