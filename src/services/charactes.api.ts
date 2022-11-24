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



async function getSpecificCharacterAllDimensions(name : ICharacter['name']): Promise<{info: IInfo, results:ICharacter[]}> {
	const response = await fetchAxios.get(`/character?name=${name}`);
	return response.data;
}




export{
	getCharacters,
	getSpecificCharacterAllDimensions
};