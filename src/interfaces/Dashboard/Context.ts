import { Dispatch } from 'react';

export interface IType{
	id: number;
	text: string;
}

export interface IDashboardContext{
	type: IType;
	setType: Dispatch<IType>
}