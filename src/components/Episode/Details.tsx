import React from 'react';

import 'chart.js/auto';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { PersonCircle, Bullseye, GlobeAmericas, TvFill, GeoAltFill } from 'react-bootstrap-icons';



import { IEpisode } from '../../interfaces/Episode/Episode';
import { ICharacter } from '../../interfaces/Character/character';
import { Bar } from 'react-chartjs-2';


export default function EpisodeDetails({episode, characters}: {episode: IEpisode, characters: ICharacter[]}) {
	
	function mapCharactersLastEpisodes(characters: ICharacter[], episode: IEpisode){
		return characters?.filter((character) => {
			if(character.episode.at(-1)?.endsWith(String(episode.id)) && character.status === 'Dead'){
				return true;
			}
		});
	}
	
	return (
		<Card
			className='custom-card card-detail'>
			<CardBody>
				<section>
					<CardTitle tag='h4'>{episode.name}</CardTitle>
					<div className='icon-text'>
						<TvFill className='icon'/>
						<h6>episode:</h6>
						<p className='text-muted'><small>{episode.episode}</small></p>
					</div>
					<div className='icon-text'>
						<GeoAltFill className='icon'/>
						<h6>release date:</h6>
						<p className='text-muted'><small>{episode.air_date}</small></p>
					</div>
				</section>

				<div className='chart-container'>
					<CardTitle tag='h5' >{'Episode Death\'s'}</CardTitle>
					<div className='chart'>
						{
							characters.length > 0 ? 

								<Bar data={{
									labels: ['Deaths'],
									datasets: [
										{
											data: [mapCharactersLastEpisodes(characters, episode).length],
											backgroundColor: '#7749F8' ,
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
											type:'linear', 
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