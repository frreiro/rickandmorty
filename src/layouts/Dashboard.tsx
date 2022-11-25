import { Outlet } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';
import React, { PropsWithChildren, useContext } from 'react';


import { INavChoice } from '../interfaces/navbar';
import ListContainer from '../components/ListContainer';
import CustomNavbar from '../components/Dashboard/navbar';
import DashboardContext from '../context/DashboardContext';


export default function Dashboard(){
	const {type} = useContext(DashboardContext);

	return (
		<main className='app-container'>
			<Card
				body
				className='dashboard-container'>
				<CustomNavbar/>
				<CardBody className='dashboard-body'>
					<CardTitle tag="h1">{type.text}</CardTitle>
					<ListContainer>
						<Outlet/>
					</ListContainer>
				</CardBody>
			</Card>	
		</main>

	);
} 