import axios from 'axios';

const fetchAxios = axios.create({
	baseURL:'https://rickandmortyapi.com/api'
});

export {
	fetchAxios
};