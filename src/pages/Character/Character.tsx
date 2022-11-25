import React, { useEffect, useRef, useState } from 'react';
import { Filter } from 'react-bootstrap-icons';
import { useParams } from 'react-router-dom';
import CharacterCard from '../../components/Character/Card';


import CharacterDetails from '../../components/Character/Details';
import EpisodeCard from '../../components/Episode/Card';
import PaginationContainer from '../../components/Pagination';
import { ICharacter } from '../../interfaces/Character/character';
import { ICharacterFilters } from '../../interfaces/Character/request';
import { IEpisode } from '../../interfaces/Episode/Episode';
import { getCharacters, getSpecificCharacter } from '../../services/charactes.api';
import { getEpisodeByNumbers } from '../../services/episode.api';



export default function Character() {
	const [character, setCharater] = useState<ICharacter>({} as ICharacter);
	const [episodes, setEpisodes] = useState<IEpisode[]>({} as IEpisode[]);
	
	
	const {id} = useParams();
	
	useEffect(() => {
		(async() => {
			const charactersData = await getSpecificCharacter(Number(id));
			setCharater(charactersData);
		})();

	},[]); 



	useEffect(() => {
		if(Object.keys(character).length > 1){
			const episodesNumbers = character.episode.map((episode) => Number(episode.split('/').at(-1)));
			(async() => {
				const episodesData = await getEpisodeByNumbers(episodesNumbers);
				setEpisodes(episodesData);
			})();
		}
	},[character]);


	return (
		<>
			{
				Object.keys(character).length > 1 
					?
					<CharacterDetails character={character}/>
					:
					<></>
			}
			<div className='list-detail'>
				<h3>Episodes:</h3>
				<div className='list'>
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
				</div>
			</div>
		</>
	);
}