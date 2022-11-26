import React, { useState } from 'react';
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';

export default function DropDownComponent({setValue, texts, headerText}: {setValue: any, texts: string[], headerText:  string}) {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen((prevState) => !prevState);

	return (
		<div className='justify-content-center'>
			<Dropdown isOpen={dropdownOpen} toggle={toggle} direction='down'>
				<DropdownToggle caret color='primary'>{headerText}</DropdownToggle>
				<DropdownMenu>
					{
						texts.map((text,index) => {
							return (
								<React.Fragment key={index}>
									<DropdownItem  onClick={() => setValue(text)}>{text}</DropdownItem>
									{
										index !== texts.length - 1 ? <DropdownItem divider /> : <></> 
									}
								</React.Fragment>

							);
						
						})
					}
				</DropdownMenu>
			</Dropdown>
		</div>
	);
}