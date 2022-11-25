import { ILocation } from '../interfaces/Location/Location';
import { ILocationFilters } from '../interfaces/Location/request';
import { IInfo } from '../interfaces/request';
import { fetchAxios } from './api';


async function getSpecificLocation(id : ILocation['id']): Promise<ILocation> {
	const response = await fetchAxios.get(`/location/${id}`);
	return response.data;
}

async function getLocations(filter?: ILocationFilters): Promise<{info: IInfo, results:ILocation[]}> {
	const response = await fetchAxios.get('/location',{
		params: {
			...filter
		}
	});
	return response.data;
}

async function getLocationsByNumbers(locations: number[]): Promise<ILocation[]> {
	const response = await fetchAxios.get(`/location/${locations}`);
	return response.data;
}



export{
	getLocations,
	getSpecificLocation,
	getLocationsByNumbers
};