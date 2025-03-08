import { useEffect } from 'react';

export default function ChildComponent() {
	useEffect(() => {
		console.log('Component Mounted!');

		return () => {
			console.log('Cleanup before unmount');
		};
	});

	return <h1>I'm a child component</h1>;
}
