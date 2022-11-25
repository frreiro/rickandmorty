import React, { useContext } from 'react';
import { TvFill, Calendar, PersonFill} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';
import DashboardContext from '../../context/DashboardContext';
import { IEpisode } from '../../interfaces/Episode/Episode';

export default function EpisodeCard({episode}: {episode: IEpisode}) {
	const navigate = useNavigate();

	const {setType} = useContext(DashboardContext);

	function clickCard(){
		setType({
			text:'Episode',
			id: 3
		});
		navigate(`/dashboard/episodes/${episode.id}`);
	}

	return (
		<Card
			onClick={clickCard}
			className='custom-card card-episode'>
			<CardBody>
				<CardTitle><strong>{episode.name}</strong></CardTitle>
				<article>
					<section>
						<p><small>episode:</small></p>
						<div className='icon-text'>
							<TvFill className='icon'/>
							<p className='text-muted'><small>{episode.episode}</small></p>
						</div>
					</section>
					<section>
						<p><small>characters:</small></p>
						<div className='icon-text'>
							<PersonFill className='icon'/>
							<p className='text-muted'><small>{episode.characters.length}</small></p>
						</div>
					</section>
				</article>
				<section>
					<p><small>release date:</small></p>
					<div className='icon-text location'>
						<Calendar className='icon'/>
						<p className='text-muted'><small>{episode.air_date}</small></p>
					</div>
				</section>
			</CardBody>
		</Card>
	);
}