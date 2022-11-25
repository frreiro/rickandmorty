import { IEpisode } from '../interfaces/Episode/Episode';
import { IInfo } from '../interfaces/request';
import { fetchAxios } from './api';

async function getEpisode(): Promise<{info: IInfo, results:IEpisode[]}> {
	const response = await fetchAxios.get('/episode');
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