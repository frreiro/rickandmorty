import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { PersonCircle, Bullseye, GlobeAmericas } from 'react-bootstrap-icons';


import {  getCharacters } from '../../services/charactes.api';
import { ICharacterFilters } from '../../interfaces/Character/request';
import { ICharacter, ICharactersDimensionData } from '../../interfaces/Character/character';
import { ILocation } from '../../interfaces/Location/Location';


export default function LocationDetails({location}: {location: ILocation}) {
	//const [allDimensions, setAllDimensions] = useState({
	//	alive: 0,
	//	dead: 0,
	//	unknown: 0
	//} as ICharactersDimensionData );


	//const dataPie = {
	//	labels: ['Dead', 'Alive', 'Unknow'],
	//	datasets: [
	//		{
	//			data: [allDimensions.dead, allDimensions.alive, allDimensions.unknown],
	//			backgroundColor: [
	//				'red',
	//				'green',
	//				'gray',
	//			],
	//		},
	//	],
	//};
	
	//console.log(allDimensions);

	//useEffect(()=> {

	//	const statusfilters: Lowercase<ICharacter['status']>[] = ['alive', 'dead', 'unknown'] ;
	//	const filter = {} as ICharacterFilters;
	//	filter.name = character.name.split(' ')[0];

	//	(async () => {
	//		const newObject = {} as ICharactersDimensionData;
	//		for(const item of statusfilters){
	//			filter.status = item;
	//			try{
	//				const charactersData = await getCharacters(filter);
	//				newObject[item] = charactersData.info.count;
	//				setAllDimensions({...allDimensions, ...newObject});
	//			}catch(e){
	//				continue;
	//			}
	//		}
	//	})();

	//}, []);


	
	return (
		<Card
			className='custom-card card-detail'>
			<CardBody>
				<section>
					<CardTitle tag='h4'>{location.name}</CardTitle>
					<div className='icon-text'>
						<GlobeAmericas className='icon'/>
						<p><small>type:</small></p>
						<p className='text-muted'><small>{location.type}</small></p>
					</div>
					<div className='icon-text'>
						<Bullseye className='icon'/>
						<p><small>dimension:</small></p>
						<p className='text-muted'><small>{location.dimension}</small></p>
					</div>
					<div className='icon-text'>
						<PersonCircle className='icon'/>
						<p><small>residents:</small></p>
						<p className='text-muted'><small>{location.residents.length}</small></p>
					</div>
				</section>

				{/*<div className='chart-container'>
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
					
				</div>*/}
			</CardBody>
		</Card>
	);
}