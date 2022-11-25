import React from 'react';
import '../styles/style.scss';
import Dashboard from '../layouts/Dashboard';
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate
} from 'react-router-dom';
import Characters from '../pages/CharacterCard';
import Locations from '../pages/LocationsCard';
import Episodes from '../pages/EpisodesCard';
import CharacterDetails from '../components/Character/Details';
import Character from '../pages/Character/Character';
import Location from '../pages/Location/Location';
import Episode from '../pages/Episode/Episode';
import { DashboardProvider } from '../context/DashboardContext';


function App() {
	return (
		<DashboardProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/dashboard' element={<Dashboard/>}>
						<Route path='characters' element={<Characters/>}/>
						<Route path='characters/:id' element={<Character/>}/>

						<Route path='locations' element={<Locations/>}/>
						<Route path='locations/:id' element={<Location/>}/>

						<Route path='episodes' element={<Episodes/>}/>
						<Route path='episodes/:id' element={<Episode/>}/>


					</Route>
					<Route path='*' element={<Navigate to='/dashboard/characters'/>}/>

				</Routes>
			</BrowserRouter>		
		</DashboardProvider>

	);
}

export default App;
