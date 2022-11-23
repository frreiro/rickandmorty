import React, { useEffect, useState } from 'react';


import CharacterCard from '../components/Character/Card';
import { ICharacter } from '../interfaces/Character/character';
import { getCharacters } from '../services/charactes.api';


export default function Characters() {
	const [characters, setCharaters] = useState<ICharacter[]>([]);

	useEffect(() => {
		(async() => {
			const charactersData = await getCharacters();
			setCharaters(charactersData.results);
		})();

	},[]); 



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
		</>
	);
}