export interface IPlace{
	name: string;
	url: string;
}

export interface ICharacter{
	id: number;
	name: string;
	status: 'Alive' | 'Dead' | 'unknown' 
	species: string;
	gender: 'Male' | 'Female' | 'Genderless'| 'Unknown'
	origin: IPlace
	location: IPlace
	image: string;
	eppisode: [];
	url: string;
	created: string;
}