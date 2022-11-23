import React from 'react';
import {PersonFill, GeoAltFill, TvFill} from 'react-bootstrap-icons';
import { ICustomNavBar, IItemNav, INavState } from '../../interfaces/navbar';



export default function CustomNavbar({navState}: ICustomNavBar){

	function setNavChoice(type: INavState['navChoice']){
		navState.setNavChoice(type);
	}

	const itemNav: IItemNav[] = [{
		name: 'Characters',
		icon: <PersonFill className='icon'/>,
	},
	{
		name: 'Locations',
		icon: <GeoAltFill className='icon'/>,
	
	},
	{
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
							<div key={item_nav.name} className={`nav-icon ${navState.navChoice === item_nav.name ? 'text-dark' : ''}`} 
								onClick={() => setNavChoice(item_nav.name)}>
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