import React, { ReactNode } from 'react';
import { createContext, PropsWithChildren, useState } from 'react';
import { IDashboardContext } from '../interfaces/Dashboard/Context';


const DashboardContext = createContext({} as IDashboardContext);
export default DashboardContext;

export function DashboardProvider({ children }: {children: ReactNode}) {
	const [type, setType] = useState({id: 1, text: 'Characters'});
  
	return (
		<DashboardContext.Provider value={{ type, setType }}>
			{children}
		</DashboardContext.Provider>
	);
}