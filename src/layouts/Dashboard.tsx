import { Outlet } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';
import React, { PropsWithChildren, useContext, useState } from 'react';


import { INavChoice } from '../interfaces/navbar';
import ListContainer from '../components/ListContainer';
import CustomNavbar from '../components/Dashboard/navbar';
import DashboardContext from '../context/DashboardContext';
import DropDownComponent from '../components/Dropdown';
import CharactersFiltersContext from '../context/CharacterFilters';
import { ICharacterFilters } from '../interfaces/Character/request';


export default function Dashboard(){
	const { charactersFilters,setCharactersFilters } = useContext(CharactersFiltersContext);

	
	const {type} = useContext(DashboardContext);

	function selectStatusCharacter(status:  ICharacterFilters['status']| 'All'){
		if(status == 'All') {
			const {status , ...filters} = charactersFilters;
			setCharactersFilters({...filters,page: 1} );
		}else{
			setCharactersFilters({...charactersFilters, status: status, page: 1} );
		}
	}

	function selectSpeciesCharacter(species:  ICharacterFilters['species']| 'All'){
		if(species == 'All') {
			const {species , ...filters} = charactersFilters;
			setCharactersFilters({...filters,page: 1} );
		}else{
			setCharactersFilters({...charactersFilters, species: species, page: 1} );
		}
	}

	return (
		<main className='app-container'>
			<Card
				body
				className='dashboard-container'>
				<CustomNavbar/>
				<CardBody className='dashboard-body'>
					<div className='header'>
						<CardTitle tag="h1">{type.text}</CardTitle>
						{
							type.id === 1 
								? 
								<div className='dropdown-container'>
									<DropDownComponent 
										setValue={selectStatusCharacter} 
										texts={['All','Alive', 'Dead' , 'Unknown']}
										headerText={charactersFilters.status && charactersFilters.status  !== 'All' ? charactersFilters.status : 'Status'}
									/>
									<DropDownComponent 
										setValue={selectSpeciesCharacter} 
										texts={['All','Human', 'Alien' , 'Mythological Creature', 'Disease', 'Robot',  'Unknown', 'Animal', 'Cronenberg', 'Humanoid', 'Poopybutthole', ]}
										headerText={ charactersFilters.species && charactersFilters.species !== 'All' ? charactersFilters.species : 'Species'}
									/>
								</div>
								: <></>

						}
					</div>
					<ListContainer>
						<Outlet/>
					</ListContainer>
				</CardBody>
			</Card>	
		</main>

	);
} 