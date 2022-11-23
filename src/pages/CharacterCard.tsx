import React from 'react';
import CharacterCard from '../components/Character/Card';
import Dashboard from '../layouts/Dashboard';


export default function Characters() {


	const arr = [1,2,3,4,5,6];
	return (
		<Dashboard>
			{
				arr.map((num) => {
					return <CharacterCard key={num} />;
				})
			}
		</Dashboard>
	);
}