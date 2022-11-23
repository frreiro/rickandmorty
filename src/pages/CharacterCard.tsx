import React from 'react';
import Dashboard from '../layouts/Dashboard';

export default function CharacterCard() {
	return (
		<Dashboard>
			<div className='card-character'>
				<img src='https://picsum.photos/300/200' />
				<h1>Rick</h1>
				<p>location</p>
				
			</div>
		</Dashboard>
	);
}