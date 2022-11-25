import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharacterCard from '../../components/Character/Card';
import DropDownComponent from '../../components/Dropdown';
import EpisodeCard from '../../components/Episode/Card';


import LocationDetails from '../../components/Location/Details';
import { ICharacter } from '../../interfaces/Character/character';
import { IEpisode } from '../../interfaces/Episode/Episode';
import { ILocation } from '../../interfaces/Location/Location';
import { getCharacterByNumbers } from '../../services/charactes.api';
import { getEpisodeByNumbers } from '../../services/episode.api';
import { getSpecificLocation } from '../../services/location.api';



export default function Location() {
	const [location, setLocation] = useState<ILocation>({} as ILocation);
	const [characters, setCharacters] = useState<ICharacter[]>([] as ICharacter[]);
	const [list, setList] = useState<'Residents'| 'Episodes'>('Residents');
	
	const [episodes, setEpisodes] = useState<IEpisode[]>([] as IEpisode[]);
	//TODO: episodes
	
	const {id} = useParams();
	
	useEffect(() => {
		(async() => {
			const locationData = await getSpecificLocation(Number(id));
			setLocation(locationData);
		})();

	},[]); 



	useEffect(() => {
		if(Object.keys(location).length > 0){
			const charactersNumbers = location.residents.map((resident) => Number(resident.split('/').at(-1)));
			(async() => {
				const charactersData = await getCharacterByNumbers(charactersNumbers);
				if(Array.isArray(charactersData)){
					setCharacters([...charactersData]);
				}else{
					setCharacters([charactersData]);
				}
			})();
		}
	},[location]);


	useEffect(() => {
		if(Object.keys(characters).length > 0){
			const episodesNumber = characters?.map((character) => Number(character.episode.at(-1)?.split('/').at(-1)));
			(async() => {
				const episodesData = await getEpisodeByNumbers(episodesNumber);
				if(Array.isArray(episodesData)){
					setEpisodes([...episodesData]);
				}else{
					setEpisodes([episodesData]);
				}
			})();
		}
	},[characters]);

	return (
		<>
			{
				Object.keys(location).length > 1 
					?
					<LocationDetails location={location}/>
					:
					<></>
			}

			<div className='list-detail'>
				<section>
					<DropDownComponent setValue={setList} value={list} texts={['Residents', 'Episodes']} />
				</section>
				<section className='list'>
					{
						list === 'Residents' ? 
							Object.keys(characters).length > 0 ?
								characters?.map((character) => {
									return <CharacterCard 
										key={character.id}
										character={character}
									/>;
								})
								: <></>

							: 
							Object.keys(episodes).length > 0 ?
								episodes?.map((episode) => {
									return <EpisodeCard 
										key={episode.id}
										episode={episode}
									/>;
								})
								: <></>
					}
				</section>
			</div>
		</>
	);
}