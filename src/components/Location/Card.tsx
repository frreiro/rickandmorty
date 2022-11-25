import React, { useContext } from 'react';
import { GeoAltFill, Hypnotize, Asterisk} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';
import DashboardContext from '../../context/DashboardContext';
import { ILocation } from '../../interfaces/Location/Location';

export default function LocationCard({location}: {location: ILocation}) {
	const navigate = useNavigate();
	

	const {setType} = useContext(DashboardContext);

	function clickCard(){
		setType({
			text:'Location',
			id: 2
		});
		navigate(`/dashboard/locations/${location.id}`);
	}

	return (
		<Card
			onClick={clickCard}
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