import React, { useEffect, useState } from 'react';
import CharacterCard from '../components/Character/Card';
import { ICharacter } from '../interfaces/Character/character';
import Dashboard from '../layouts/Dashboard';
import { getCharacters } from '../services/charactes.api';


export default function Characters() {
	const [characters, setCharaters] = useState<ICharacter[]>([]);


	useEffect(() => {
		(async() => {
			const charactersData = await getCharacters();
			setCharaters(charactersData.results);
		})();

	},[]); 



	const arr = [1,2,3,4,5,6];
	return (
		<Dashboard>
			{
				characters?.map((character) => {
					return <CharacterCard 
						key={character.id}
						character={character}
					/>;
				})
			}
		</Dashboard>
	);
}