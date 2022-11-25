import React, { useState } from 'react';
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';

export default function DropDownComponent({setValue, value, texts}: {setValue: any, value: any, texts: any[]}) {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen((prevState) => !prevState);

	return (
		<div className='justify-content-center'>
			<Dropdown isOpen={dropdownOpen} toggle={toggle} direction='down'>
				<DropdownToggle caret color='primary'>{value}</DropdownToggle>
				<DropdownMenu>
					{
						texts.map((text,index) => {
							return (
								<>
									<DropdownItem onClick={() => setValue(text)}>{text}</DropdownItem>
									{
										index !== texts.length - 1 ? <DropdownItem divider /> : <></> 
									}
								</>

							);
						
						})
					}
				</DropdownMenu>
			</Dropdown>
		</div>
	);
}