import React from 'react';
import { GeoAltFill, UniversalAccessCircle, XLg, CheckLg, QuestionLg } from 'react-bootstrap-icons';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { ICharacter } from '../../interfaces/Character/character';

export default function CharacterCard({character}: {character: ICharacter}) {


	function setStatusIcon(status: ICharacter['status']){
		if(status === 'Alive') return {element: <CheckLg className='icon text-success'/>, class: 'text-success'};
		if(status === 'Dead') return {element: <XLg className='icon text-danger'/>, class: 'text-danger'};
		if(status === 'unknown') return {element: <QuestionLg className='icon text-warning'/>, class:	'text-warning'};
	}
	


	return (
		<Card
			className='card-character'>
			<div className='img' style={{
				backgroundImage: `url(${character.image})`
			}}>
			</div>
			<CardBody>
				<CardTitle><strong>{character.name}</strong></CardTitle>
				<p><small>location:</small></p>
				<div>
					
					<div className='icon-text location'>
						<GeoAltFill className='icon'/>
						<p className='text-muted'><small>{character.location.name}</small></p>
					</div>
					<section>
						<div>
							<p><small>status:</small></p>
							<div className='icon-text'>
								{setStatusIcon(character.status)?.element}
								{/*<X className='icon'/>*/}
								<p className={setStatusIcon(character.status)?.class}><small>{character.status}</small></p>
							</div>
						</div>
						<div>
							<p><small>specie:</small></p>
							<div className='icon-text'>
								<UniversalAccessCircle className='icon'/>
								<p className='text-muted'><small>{character.species}</small></p>
							</div>
						</div>
					</section>
				</div>
			</CardBody>
		</Card>
	);
}