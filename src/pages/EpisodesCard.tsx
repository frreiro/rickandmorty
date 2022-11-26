import React,{ useEffect, useRef, useState } from 'react';
import EpisodeCard from '../components/Episode/Card';
import PaginationContainer from '../components/Pagination';
import { useQuery } from '../hooks/useQuery';
import { IEpisode } from '../interfaces/Episode/Episode';
import { IEpisodeFilter } from '../interfaces/Episode/request';
import { ILocationFilters } from '../interfaces/Location/request';
import { getEpisode } from '../services/episode.api';



export default function Episodes() {
	const [episodes, setEpisodes] = useState<IEpisode[]>([]);
	const pages = useRef<number>(1);


	const query = useQuery();
	const page = query.get('page');

	useEffect(() => {
		const filter = {} as IEpisodeFilter;
		if(page){
			
			filter.page = Number(page);
		}
		(async() => {
			const episodeData = await getEpisode(filter);
			pages.current = episodeData.info.pages;
			setEpisodes(episodeData.results);
		})();

	},[page]); 


	return (
		<>
			<main>
				{
					episodes?.map((episode) => {
						return <EpisodeCard 
							key={episode.id}
							episode={episode}
						/>;
					})
				}
			</main>
			<footer>
				<PaginationContainer 
					pages={pages.current} 
					pageName={'episodes'}
				/>
			</footer>
		</>
	);
}