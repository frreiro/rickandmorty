import React, { useEffect, useRef, useState } from 'react';


import { useQuery } from '../hooks/useQuery';
import CharacterCard from '../components/Character/Card';
import { getCharacters } from '../services/charactes.api';
import PaginationContainer from '../components/Pagination';
import { ICharacter } from '../interfaces/Character/character';
import { ICharacterFilters } from '../interfaces/Character/request';



export default function Characters() {
	const [characters, setCharacters] = useState<ICharacter[]>([]);
	const pages = useRef<number>(0);

	const query = useQuery();
	const page = query.get('page');


	useEffect(() => {
		const filter = {} as ICharacterFilters;
		if(page){
			filter.page = Number(page);
		}
		(async() => {
			const charactersData = await getCharacters(filter);
			pages.current = charactersData.info.pages;
			setCharacters(charactersData.results);
		})();

	},[page]); 



	return (
		<>
			
			{
				characters?.map((character) => {
					return <CharacterCard 
						key={character.id}
						character={character}
					/>;
				})
			}
			<PaginationContainer pages={pages.current}/>
			
		</>
	);
}