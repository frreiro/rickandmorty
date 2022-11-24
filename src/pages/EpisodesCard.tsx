import React,{ useEffect, useState } from 'react';
import EpisodeCard from '../components/Episode/Card';
import { IEpisode } from '../interfaces/Episode/Episode';
import { getEpisode } from '../services/episode.api';



export default function Episodes() {
	const [episodes, setEpisodes] = useState<IEpisode[]>([]);


	useEffect(() => {
		(async() => {
			const episodeData = await getEpisode();
			setEpisodes(episodeData.results);
		})();

	},[]); 



	return (
		<>
			{
				episodes?.map((episode) => {
					return <EpisodeCard 
						key={episode.id}
						episode={episode}
					/>;
					
					
				})
			}
		</>
	);
}