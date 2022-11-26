import { IEpisode } from '../interfaces/Episode/Episode';
import { IEpisodeFilter } from '../interfaces/Episode/request';
import { ILocationFilters } from '../interfaces/Location/request';
import { IInfo } from '../interfaces/request';
import { fetchAxios } from './api';

async function getEpisode(filter?: IEpisodeFilter): Promise<{info: IInfo, results:IEpisode[]}> {
	const response = await fetchAxios.get('/episode',{
		params: {
			...filter
		}
	});
	return response.data;
}

async function getEpisodeByNumbers(episodes: number[]): Promise<IEpisode[] | IEpisode> {
	const response = await fetchAxios.get(`/episode/${episodes}`);
	return response.data;
}

async function getSpecificEpisode(id : IEpisode['id']): Promise<IEpisode> {
	const response = await fetchAxios.get(`/episode/${id}`);
	return response.data;
}
export{
	getEpisode,
	getEpisodeByNumbers,
	getSpecificEpisode
};