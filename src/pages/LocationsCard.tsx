import React,{ useEffect, useRef, useState } from 'react';
import LocationCard from '../components/Location/Card';
import PaginationContainer from '../components/Pagination';
import { useQuery } from '../hooks/useQuery';
import { ILocation } from '../interfaces/Location/Location';
import { ILocationFilters } from '../interfaces/Location/request';

import { getLocations } from '../services/location.api';


export default function Locations() {
	const [locations, setLocations] = useState<ILocation[]>([]);
	const pages = useRef<number>(1);

	const query = useQuery();
	const page = query.get('page');

	useEffect(() => {
		const filter = {} as ILocationFilters;
		if(page){
			
			filter.page = Number(page);
		}
		(async() => {
			const locationsData = await getLocations(filter);
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
			<PaginationContainer 
				pages={pages.current} 
				pageName={'locations'}
			/>
		</>
	);
}