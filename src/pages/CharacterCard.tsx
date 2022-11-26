import React, { useContext, useEffect, useRef, useState } from 'react';


import { useQuery } from '../hooks/useQuery';
import CharacterCard from '../components/Character/Card';
import { getCharacters } from '../services/charactes.api';
import PaginationContainer from '../components/Pagination';
import { ICharacter } from '../interfaces/Character/character';
import CharactersFiltersContext from '../context/CharacterFilters';
import {toast} from 'react-toastify';



export default function Characters() {
	const [characters, setCharacters] = useState<ICharacter[]>([]);
	const pages = useRef<number>(0);

	const query = useQuery();
	const {charactersFilters, setCharactersFilters} = useContext(CharactersFiltersContext);
	const page = query.get('page');


	useEffect(() => {
		const filter = {...charactersFilters};
		if(page){
			
			filter.page = Number(page);
		}
		(async() => {
			try{
				const charactersData = await getCharacters(filter);
				pages.current = charactersData.info.pages;
				setCharacters(charactersData.results);
			}catch(e){
				toast.error('Could not find characters, try again');
			}
		})();

	},[page,charactersFilters]); 



	return (
		<>
			<main>
			
				{
					characters?.map((character) => {
						return <CharacterCard 
							key={character.id}
							character={character}
						/>;
					})
				}
			
			</main>
			<footer>
				<PaginationContainer 
					pages={pages.current}
					pageName={'characters'}/>
			</footer>
		</>
	);
}