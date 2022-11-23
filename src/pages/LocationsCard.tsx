import React,{ useEffect, useState } from 'react';
import LocationCard from '../components/Location/Card';
import { ILocation } from '../interfaces/Location/Location';

import { getLocations } from '../services/location.api';


export default function Locations() {
	const [locations, setLocations] = useState<ILocation[]>([]);


	useEffect(() => {
		(async() => {
			const locationsData = await getLocations();
			setLocations(locationsData.results);
		})();

	},[]); 



	return (
		<>
			{
				locations?.map((location) => {
					return <LocationCard 
						key={location.id}
						location={location}
					/>;
					
					
				})
			}
		</>
	);
}