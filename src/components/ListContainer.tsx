import React, { PropsWithChildren } from 'react';

export default function ListContainer({children}: PropsWithChildren){
	return (
		<div className='container-list'>
			{children}
		</div>
	);
}