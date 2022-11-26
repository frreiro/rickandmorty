export interface ICharacterFilters{
	name?: string;
	status?: 'alive' | 'dead' | 'unknown' | 'All'
	species?: string;
	type?: string;
	gender?: 'female' | 'male' | 'genderless' | 'unknown' 
	page?: number;
}