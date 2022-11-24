import React from 'react';
import { GeoAltFill, UniversalAccessCircle, XLg, CheckLg, QuestionLg } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { ICharacter } from '../../interfaces/Character/character';

export default function CharacterCard({character}: {character: ICharacter}) {
	const navigate = useNavigate();

	function setStatusIcon(status: ICharacter['status']){
		if(status === 'Alive') return {element: <CheckLg className='icon text-success'/>, class: 'text-success'};
		if(status === 'Dead') return {element: <XLg className='icon text-danger'/>, class: 'text-danger'};
		if(status === 'unknown') return {element: <QuestionLg className='icon text-warning'/>, class:	'text-warning'};
	}
	


	return (
		<Card
			onClick={() => navigate(`/dashboard/characters/${character.id}`)}
			className='custom-card card-character'>
			<div className='img' style={{
				backgroundImage: `url(${character.image})`
			}}>
			</div>
			<CardBody>
				<CardTitle><strong>{character.name}</strong></CardTitle>
				<section>
					<p><small>location:</small></p>
					<div className='icon-text location'>
						<GeoAltFill className='icon'/>
						<p className='text-muted'><small>{character.location.name}</small></p>
					</div>
				</section>
				<article>
					<section>
						<p><small>status:</small></p>
						<div className='icon-text'>
							{setStatusIcon(character.status)?.element}
							<p className={setStatusIcon(character.status)?.class}><small>{character.status}</small></p>
						</div>
					</section>
					<section>
						<p><small>specie:</small></p>
						<div className='icon-text'>
							<UniversalAccessCircle className='icon'/>
							<p className='text-muted'><small>{character.species}</small></p>
						</div>
					</section>
				</article>
			</CardBody>
		</Card>
	);
}