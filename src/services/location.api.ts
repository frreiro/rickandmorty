import { ILocation } from '../interfaces/Location/Location';
import { IInfo } from '../interfaces/request';
import { fetchAxios } from './api';

async function getLocations(): Promise<{info: IInfo, results:ILocation[]}> {
	const response = await fetchAxios.get('/location');
	return response.data;
}

export{
	getLocations
};