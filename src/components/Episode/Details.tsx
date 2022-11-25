import React from 'react';

import 'chart.js/auto';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { PersonCircle, Bullseye, GlobeAmericas, TvFill, GeoAltFill } from 'react-bootstrap-icons';



import { IEpisode } from '../../interfaces/Episode/Episode';


export default function EpisodeDetails({episode}: {episode: IEpisode}) {


	
	return (
		<Card
			className='custom-card card-detail'>
			<CardBody>
				<section>
					<CardTitle tag='h4'>{episode.name}</CardTitle>
					<div className='icon-text'>
						<TvFill className='icon'/>
						<p><small>episode:</small></p>
						<p className='text-muted'><small>{episode.episode}</small></p>
					</div>
					<div className='icon-text'>
						<GeoAltFill className='icon'/>
						<p><small>release date:</small></p>
						<p className='text-muted'><small>{episode.air_date}</small></p>
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