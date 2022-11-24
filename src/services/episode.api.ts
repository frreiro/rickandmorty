import { IEpisode } from '../interfaces/Episode/Episode';
import { IInfo } from '../interfaces/request';
import { fetchAxios } from './api';

async function getEpisode(): Promise<{info: IInfo, results:IEpisode[]}> {
	const response = await fetchAxios.get('/episode');
	return response.data;
}

export{
	getEpisode
};