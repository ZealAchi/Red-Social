import { useState } from 'react';
export function useModal() {
	const [ modalShowing, setModalShowing ] = useState(true);
	const [ modalDisplay, setModalDisplay ] = useState('login');
	
	return{
		modalShowing,
		setModalShowing,
		modalDisplay,
		setModalDisplay
	};
}