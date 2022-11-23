import React from 'react';
import { GeoAltFill, UniversalAccessCircle, X } from 'react-bootstrap-icons';
import { Card, CardBody, CardTitle } from 'reactstrap';

export default function CharacterCard() {
	return (
		<Card
			className='card-character'
			style={{

			}}>
			<img src="https://picsum.photos/300/200"/>
			<CardBody>
				<CardTitle><strong>Rick</strong></CardTitle>
				<p><small>location:</small></p>
				<div>
					
					<div className='icon-text'>
						<GeoAltFill className='icon'/>
						<p className='text-muted'><small>Earth</small></p>
					</div>
					<section>
						<div>
							<p><small>status:</small></p>
							<div className='icon-text'>
								<X className='icon'/>
								<p className='text-muted'><small>Dead</small></p>
							</div>
						</div>
						<div>
							<p><small>specie:</small></p>
							<div className='icon-text'>
								<UniversalAccessCircle className='icon'/>
								<p className='text-muted'><small>Human</small></p>
							</div>
						</div>
					</section>
				</div>
			</CardBody>
		</Card>
	);
}