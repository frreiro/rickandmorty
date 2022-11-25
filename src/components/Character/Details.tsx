import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { GeoAltFill, UniversalAccessCircle, XLg, CheckLg, QuestionLg, GenderAmbiguous, Globe } from 'react-bootstrap-icons';


import {  getCharacters } from '../../services/charactes.api';
import { ICharacterFilters } from '../../interfaces/Character/request';
import { ICharacter, ICharactersDimensionData } from '../../interfaces/Character/character';


export default function CharacterDetails({character}: {character: ICharacter}) {
	const [allDimensions, setAllDimensions] = useState({
		alive: 0,
		dead: 0,
		unknown: 0
	} as ICharactersDimensionData );


	const dataPie = {
		labels: ['Dead', 'Alive', 'Unknow'],
		datasets: [
			{
				data: [allDimensions.dead, allDimensions.alive, allDimensions.unknown],
				backgroundColor: [
					'red',
					'green',
					'gray',
				],
			},
		],
	};
	

	useEffect(()=> {

		const statusfilters: Lowercase<ICharacter['status']>[] = ['alive', 'dead', 'unknown'] ;
		const filter = {} as ICharacterFilters;
		filter.name = character.name.split(' ')[0];

		(async () => {
			const newObject = {} as ICharactersDimensionData;
			for(const item of statusfilters){
				filter.status = item;
				try{
					const charactersData = await getCharacters(filter);
					newObject[item] = charactersData.info.count;
					setAllDimensions({...allDimensions, ...newObject});
				}catch(e){
					continue;
				}
			}
		})();

	}, []);


	function setStatusIcon(status: ICharacter['status']){
		if(status === 'Alive') return {element: <CheckLg className='icon text-success'/>, class: 'text-success'};
		if(status === 'Dead') return {element: <XLg className='icon text-danger'/>, class: 'text-danger'};
		if(status === 'unknown') return {element: <QuestionLg className='icon text-warning'/>, class:	'text-warning'};
	}

	
	return (
		<Card
			className='custom-card card-detail'>
			<img src={character.image}/>
			<CardBody>
				<section>
					<CardTitle tag='h4'>{character.name}</CardTitle>
					<div className='icon-text'>
						<GeoAltFill className='icon'/>
						<h6>location:</h6>
						<p className='text-muted'><small>{character.location.name}</small></p>
					</div>
					<div className='icon-text'>
						{setStatusIcon(character.status)?.element}
						<h6>status:</h6>
						<p className={setStatusIcon(character.status)?.class}><small>{character.status}</small></p>
					</div>
					<div className='icon-text'>
						<UniversalAccessCircle className='icon'/>
						<h6>specie:</h6>
						<p className='text-muted'><small>{character.species}</small></p>
					</div>
					<div className='icon-text'>
						<Globe className='icon'/>
						<h6>origin:</h6>
						<p className='text-muted'><small>{character.origin.name}</small></p>
					</div>
					<div className='icon-text'>
						<GenderAmbiguous className='icon'/>
						<h6>gender:</h6>
						<p className='text-muted'><small>{character.gender}</small></p>
					</div>
				</section>

				<div className='chart-container'>
					<CardTitle tag='h5' >Other dimensions</CardTitle>
					<div className='chart'>
						<Pie data={dataPie} 
							options={{
								maintainAspectRatio: false, 
								plugins: {
									legend: {
										position:'bottom',
										labels: {
											usePointStyle: true,
											boxHeight: 7,
										}		
									}
								}
							}}
						/>
					</div>
					
				</div>
			</CardBody>
		</Card>
	);
}