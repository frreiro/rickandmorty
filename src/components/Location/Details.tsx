import 'chart.js/auto';
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { PersonCircle, Bullseye, GlobeAmericas } from 'react-bootstrap-icons';
import { Bar } from 'react-chartjs-2';


import { ICharacterFilters } from '../../interfaces/Character/request';
import { ILocation } from '../../interfaces/Location/Location';
import { getLocations } from '../../services/location.api';


export default function LocationDetails({location}: {location: ILocation}) {
	const [locationDimensions, setLocationDimensions] = useState({} as ILocation[]);
	const page = useRef({
		current: 1,
		total: 1
	});

	const filter = {} as ICharacterFilters;
	filter.name = location.name?.split(' ').at(0);


	useEffect(() => {
		(async() => {
			const dimensions = await getLocations(filter);
			page.current.total = dimensions.info.pages;
			setLocationDimensions(dimensions.results);
			page.current.current = page.current.current + 1; 
		})();
	},[]);

	
	
	useEffect(() => {
		
		if(page.current.total >= page.current.current){
			filter.page = page.current.current;
			(async() => {
				const dimensions = await getLocations(filter);
				setLocationDimensions([...locationDimensions, ...dimensions.results]);
				page.current.current = page.current.current + 1; 
			})();

		}
	},[page.current.current]);











	
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

				<div className='chart-container'>
					<CardTitle tag='h5' >Residents per dimensions</CardTitle>
					<div className='chart'>
						{
							locationDimensions.length > 0 ? 

								<Bar data={{
									labels: locationDimensions?.map((location) => {
										if(location.residents.length > 0){
											return location.name;
										}
									}),
									datasets: [
										{
											data:  locationDimensions?.map((location) => {
												if(location.residents.length > 0){
													return location.residents.length;
												}
											}),
											backgroundColor: locationDimensions?.map( () => '#7749F8' ),
										},
									],
								}} 
								options={{
									maintainAspectRatio: false, 
									plugins: {
										legend: {
											display: false,
										}		
									},
									indexAxis: 'y',
									scales: {
										x: {
											stacked: true,
											type: locationDimensions?.reduce((lValue, location) => location.residents.length > lValue ? location.residents.length : lValue  , -Infinity) > 100 ? 'logarithmic' : 'linear', 
											ticks: {
												
												
												font: {
													size: 8
												},
												callback(tickValue, index, ticks) {
													if( Number(tickValue) % 1 === 0 ) return tickValue;
												},	
												
											}

										},
										y:{
											beginAtZero: true,
											ticks: {

												font: {
													size: 8,
													
												},
												
											},
										}
									},
								}}
								/>

								: <></>
						}
					</div>
					
				</div>
			</CardBody>
		</Card>
	);
}