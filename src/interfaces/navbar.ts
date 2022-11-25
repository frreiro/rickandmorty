import { Dispatch, ReactElement, SetStateAction } from 'react';
import { Icon } from 'react-bootstrap-icons';

export type INavChoice = 'Characters' | 'Locations' | 'Episodes'


export interface IItemNav{
	id: number;
	name: INavChoice;
	icon: ReactElement<Icon>
}