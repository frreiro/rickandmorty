import React from 'react';
import { ToastContainer } from 'react-toastify';
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate
} from 'react-router-dom';
import '../styles/style.scss';
import 'react-toastify/dist/ReactToastify.css';


import Episodes from '../pages/EpisodesCard';
import Dashboard from '../layouts/Dashboard';
import Locations from '../pages/LocationsCard';
import Episode from '../pages/Episode/Episode';
import Characters from '../pages/CharacterCard';
import Location from '../pages/Location/Location';
import Character from '../pages/Character/Character';
import { DashboardProvider } from '../context/DashboardContext';
import { CharactersFiltersProviders } from '../context/CharacterFilters';





function App() {
	return (
		<DashboardProvider>
			<CharactersFiltersProviders>
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
			</CharactersFiltersProviders>
			<ToastContainer theme="dark"/>
		</DashboardProvider>

	);
}

export default App;
