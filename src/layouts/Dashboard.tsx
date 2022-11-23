import React, { PropsWithChildren, useState } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { INavChoice } from '../interfaces/navbar';
import CharacterCard from '../components/Characters/Card';
import ListContainer from '../components/ListContainer';
import CustomNavbar from '../components/Dashboard/navbar';


export default function Dashboard({children}: PropsWithChildren){
	const [navChoice, setNavChoice] = useState<INavChoice>('Characters');


	return (
		<Card
			body
			className='dashboard-container'>
			<CustomNavbar navState={{navChoice, setNavChoice}}/>
			<CardBody>
				<CardTitle tag="h1">{navChoice}</CardTitle>
				<ListContainer>
					{children}
				</ListContainer>
			</CardBody>
		</Card>	
	);
} 