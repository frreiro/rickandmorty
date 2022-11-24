import React from 'react';

import {useNavigate} from 'react-router-dom';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { useQuery } from '../hooks/useQuery';

export default function PaginationContainer({pages}:{pages:number}) {
	const navigate = useNavigate();
	const query = useQuery();
	const actualPage = Number(query.get('page'));

	function checkNextPages(actualPage: number, pagesTotal: number){
		const remainPages = [];

		if(actualPage > 1){
			remainPages.push(actualPage - 1);
		}
		for(let i = actualPage; i < pagesTotal; i++){
			if(remainPages.length < 4 ) remainPages.push(i);
			else break;
		}
		return remainPages;

	}

	const pagesArr = checkNextPages(actualPage,pages);

	return (
		<Pagination>
			{
				pagesArr.map((num) => {
					return (
						actualPage === num
							?
							<PaginationItem key={num} active onClick={() => navigate(`/dashboard/characters?page=${String(num)}`)}>
								<PaginationLink>{num}</PaginationLink>
							</PaginationItem>						
							:
							<PaginationItem key={num} onClick={() => navigate(`/dashboard/characters?page=${String(num)}`)}>
								<PaginationLink>{num}</PaginationLink>
							</PaginationItem>						
					);
				})
			}
		</Pagination>
	);
}