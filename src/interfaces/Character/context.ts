import { Dispatch } from 'react';
import { ICharacterFilters } from './request';



export interface ICharacterFIltersContext{
	charactersFilters: ICharacterFilters
	setCharactersFilters: Dispatch<ICharacterFilters>
}