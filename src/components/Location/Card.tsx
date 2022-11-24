import React from 'react';
import { GeoAltFill, Hypnotize, Asterisk} from 'react-bootstrap-icons';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { ILocation } from '../../interfaces/Location/Location';

export default function LocationCard({location}: {location: ILocation}) {


	return (
		<Card
			className='custom-card card-location'>
			<CardBody>
				<CardTitle><strong>{location.name}</strong></CardTitle>
				<section>
					<p><small>dimension:</small></p>
					<div className='icon-text'>
						<Hypnotize className='icon'/>
						<p className='text-muted'><small>{location.dimension}</small></p>
					</div>
				</section>
				<section>
					<p><small>residents:</small></p>
					<div className='icon-text'>
						<Asterisk className='icon'/>
						<p className='text-muted'><small>{location.residents.length}</small></p>
					</div>
				</section>
			</CardBody>
		</Card>
	);
}