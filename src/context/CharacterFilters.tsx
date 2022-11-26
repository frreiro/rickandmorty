import React, { ReactNode } from 'react';
import { createContext, useState } from 'react';
import { ICharacterFIltersContext } from '../interfaces/Character/context';
import { ICharacterFilters } from '../interfaces/Character/request';


const CharactersFiltersContext = createContext({} as ICharacterFIltersContext);

export default CharactersFiltersContext;

export function CharactersFiltersProviders({ children }: {children: ReactNode}) {
	const [charactersFilters, setCharactersFilters] = useState({

	} as ICharacterFilters);
  
	return (
		<CharactersFiltersContext.Provider value={{ charactersFilters, setCharactersFilters }}>
			{children}
		</CharactersFiltersContext.Provider>
	);
}