import React, { useEffect, useRef, useState } from 'react';
import { Filter } from 'react-bootstrap-icons';
import { useParams } from 'react-router-dom';
import CharacterCard from '../../components/Character/Card';


import DropDownComponent from '../../components/Dropdown';
import EpisodeDetails from '../../components/Episode/Details';
import LocationCard from '../../components/Location/Card';
import { ICharacter } from '../../interfaces/Character/character';
import { IEpisode } from '../../interfaces/Episode/Episode';
import { ILocation } from '../../interfaces/Location/Location';
import { getCharacterByNumbers } from '../../services/charactes.api';
import {  getSpecificEpisode } from '../../services/episode.api';
import { getLocationsByNumbers } from '../../services/location.api';



export default function Episode() {
	const [episode, setEpisode] = useState<IEpisode>({} as IEpisode);
	const [characters, setCharaters] = useState<ICharacter[]>({} as ICharacter[]);
	const [locations, setLocations] = useState<ILocation[]>({} as ILocation[]);
	const [list, setList] = useState<'Characters'| 'Locations'>('Characters');
	
	const {id} = useParams();
	
	useEffect(() => {
		(async() => {
			const episodeData = await getSpecificEpisode(Number(id));
			setEpisode(episodeData);
		})();

	},[]); 



	useEffect(() => {
		if(Object.keys(episode).length > 1){
			const charactersNumbers = episode.characters.map((character) => Number(character.split('/').at(-1)));
			(async() => {
				const charactersData = await getCharacterByNumbers(charactersNumbers);
				setCharaters(charactersData);
			})();
		}
	},[episode]);



	useEffect(() => {
		if(characters.length > 1){
			const locationsNumbers = characters.map((character) => Number(character.location.url.split('/').at(-1)));
			(async() => {
				const locationsData = await getLocationsByNumbers(locationsNumbers);
				setLocations(locationsData);
			})();
		}
	},[characters]);
	return (
		<>
			{
				Object.keys(episode).length > 1 
					?
					<EpisodeDetails episode={episode}/>
					:
					<></>
			}

			<div className='list-detail'>
				<section>
					<DropDownComponent setValue={setList} value={list} texts={['Characters', 'Locations']} />
				</section>
				<section className='list'>
					{
						list === 'Characters' ? 
							Object.keys(characters).length > 1 ?
								characters?.map((character) => {
									return <CharacterCard 
										key={character.id}
										character={character}
									/>;
								})
								: <></>

							:
							Object.keys(locations).length > 1 ?
								locations?.map((location) => {
									return <LocationCard 
										key={location.id}
										location={location}
									/>;
								})
								: <></>
					}
				</section>
			</div>
		</>
	);
}