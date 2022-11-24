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


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/dashboard' element={<Dashboard/>}>
					<Route path='characters' element={<Characters/>}/>
					<Route path='locations' element={<Locations/>}/>
					<Route path='episodes' element={<Episodes/>}/>

				</Route>
				<Route path='*' element={<Navigate to='/dashboard/characters'/>}/>

			</Routes>
		</BrowserRouter>		

	);
}

export default App;
