import React, { PropsWithChildren } from 'react';

export default function ListContainer({children}: PropsWithChildren){
	return (
		<div>
			{children}
		</div>
	);
}