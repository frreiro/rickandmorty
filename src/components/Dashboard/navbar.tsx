import React, { useContext } from 'react';
import {PersonFill, GeoAltFill, TvFill} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import DashboardContext from '../../context/DashboardContext';
import {  IItemNav } from '../../interfaces/navbar';



export default function CustomNavbar(){

	const {setType, type} = useContext(DashboardContext);
	const navigate = useNavigate();

	function setNavChoice(type: IItemNav){
		setType({
			text: type.name,
			id: type.id
		});
		navigate(`/dashboard/${type.name.toLowerCase()}?page=1`);
	}

	const itemNav: IItemNav[] = [
		{
			id: 1,
			name: 'Characters',
			icon: <PersonFill className='icon'/>,
		},
		{
			id: 2,
			name: 'Locations',
			icon: <GeoAltFill className='icon'/>,
	
		},
		{
			id: 3,
			name: 'Episodes',
			icon: <TvFill className='icon'/>,
		}
	];

	return (
		<>
			<div className='nav-bar text-light'>
				{
					itemNav.map((item_nav) => {
						return (
							<div 
								key={item_nav.name} 
								className={`nav-icon ${type.id === item_nav.id ? 'text-dark' : ''}`} 
								onClick={() => setNavChoice(item_nav)}>
								{item_nav.icon}
								<p className='body '>
									<small>{item_nav.name}</small>
								</p>
							</div>
						);
					})
				}


			</div>
		</>
	);
}