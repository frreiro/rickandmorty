import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';


import LocationDetails from '../../components/Location/Details';
import { IEpisode } from '../../interfaces/Episode/Episode';
import { ILocation } from '../../interfaces/Location/Location';
import { getSpecificLocation } from '../../services/location.api';



export default function Location() {
	const [location, setLocation] = useState<ILocation>({} as ILocation);
	const [episodes, setEpisodes] = useState<IEpisode[]>({} as IEpisode[]);
	//TODO: characters
	
	const {id} = useParams();
	
	useEffect(() => {
		(async() => {
			const locationData = await getSpecificLocation(Number(id));
			setLocation(locationData);
		})();

	},[]); 



	//useEffect(() => {
	//	if(Object.keys(character).length > 1){
	//		const episodesNumbers = character.episode.map((episode) => Number(episode.split('/').at(-1)));
	//		(async() => {
	//			const episodesData = await getEpisodeByNumbers(episodesNumbers);
	//			setEpisodes(episodesData);
	//		})();
	//	}
	//},[character]);


	return (
		<>
			{
				Object.keys(location).length > 1 
					?
					<LocationDetails location={location}/>
					:
					<></>
			}
			{/*<h3>Episodes</h3>
			<div className='container-list'>
				{
					Object.keys(episodes).length > 1 ?
						episodes?.map((episode) => {
							return <EpisodeCard 
								key={episode.id}
								episode={episode}
							/>;
						})
						: <></>
				}
			</div>*/}
		</>
	);
}