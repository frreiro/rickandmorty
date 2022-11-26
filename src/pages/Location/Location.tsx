import React, { useEffect, useState } from 'react';
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
	const [episodes, setEpisodes] = useState<IEpisode[]>([] as IEpisode[]);
	const [list, setList] = useState<'Residents'| 'Episodes'>('Residents');
	const [status, setStatus] = useState<'Alive'|'Dead'|'Unknown'|'All'>('All');
	
	
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
				<section className='dropdown-container'>
					<DropDownComponent 
						setValue={setList} 
						texts={['Residents', 'Episodes']}
						headerText={list}/>
					{
						list === 'Residents' 
							? <DropDownComponent 
								setValue={setStatus} 
								texts={['All','Alive', 'Dead', 'Unknown']} 
								headerText={status && status !== 'All' ? status : 'Status'}/>
							: <></>

					}
				</section>
				<section className='list'>
					{
						list === 'Residents' ? 
							Object.keys(characters).length > 0 ?
								characters?.map((character) => {
									if(status === 'All'){
										return <CharacterCard 
											key={character.id}
											character={character}
										/>;
									}else{
										if(character.status === status){
											return <CharacterCard 
												key={character.id}
												character={character}
											/>;
										}
									}
								})
								: 
								<></>

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