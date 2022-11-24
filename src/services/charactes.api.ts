import { ICharacter } from '../interfaces/Character/character';
import { IInfo } from '../interfaces/request';
import { fetchAxios } from './api';

async function getCharacters(): Promise<{info: IInfo, results:ICharacter[]}> {
	const response = await fetchAxios.get('/character');
	return response.data;
}



async function getCharacterAllDimensions(name : ICharacter['name']): Promise<{info: IInfo, results:ICharacter[]}> {
	const response = await fetchAxios.get(`/character?name=${name}`);
	return response.data;
}




export{
	getCharacters
};