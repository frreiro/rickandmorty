import { Dispatch, ReactElement, SetStateAction } from 'react';
import { Icon } from 'react-bootstrap-icons';

export type INavChoice = 'Characters' | 'Locations' | 'Episodes'

export interface INavState{
	navChoice: INavChoice
	setNavChoice: Dispatch<SetStateAction<INavChoice>>
}

export interface ICustomNavBar{
	navState: INavState
}

export interface IItemNav{
	name: INavChoice;
	icon: ReactElement<Icon>
}