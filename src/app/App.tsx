import React from 'react';
import '../styles/style.scss';
import Dashboard from '../layouts/Dashboard';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import CharacterCard from '../pages/CharacterCard';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<CharacterCard/>}/>
			</Routes>
		</BrowserRouter>		

	);
}

export default App;
