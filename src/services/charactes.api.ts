import { ICharacter } from '../interfaces/Character/character';
import { ICharacterFilters } from '../interfaces/Character/request';
import { IInfo } from '../interfaces/request';
import { fetchAxios } from './api';

async function getCharacters(filter?:ICharacterFilters): Promise<{info: IInfo, results:ICharacter[]}> {
	const response = await fetchAxios.get('/character', {
		params: {
			...filter
		}
	});
	return response.data;
}


async function getCharacterByNumbers(characters: number[]): Promise<ICharacter[]> {
	const response = await fetchAxios.get(`/character/${characters}`);
	return response.data;
}



async function getSpecificCharacter(id : ICharacter['id']): Promise<ICharacter> {
	const response = await fetchAxios.get(`/character/${id}`);
	return response.data;
}


async function getCharacterNextPage( URL: string ): Promise<{info: IInfo, results:ICharacter[]}> {
	const response = await fetchAxios.get(`/character${URL}`);

	return response.data;
}







export{
	getCharacters,
	getSpecificCharacter,
	getCharacterNextPage,
	getCharacterByNumbers
};