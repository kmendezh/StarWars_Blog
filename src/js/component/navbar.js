import React, { useState } from "react";
import { Link } from "react-router-dom";
import "/workspace/StarWars_Blog/src/styles/navbar.css";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export const Navbar = () => {
	// Variables needed to control the dropdown
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen(prevState => !prevState);

	return (
		<nav
			style={{
				backgroundColor: "black",
				height: "120px"
			}}
			className="navbar navbar-light mb-3">
			<Link to="/">
				<img src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-symbol.jpg" className="swImage" />
			</Link>
			<div className="ml-auto">
				<div className="ddicon dropdown">
					<Dropdown isOpen={dropdownOpen} toggle={toggle}>
						<DropdownToggle className="ddtext" caret>
							Favorites
							<span className="fa-stack">
								<i className="fas fa-heart fa-stack-1x" style={{ color: "white" }} />
								<i className="fa-stack-1x" style={{ color: "black", fontSize: "18px" }}>
									<span>
										<strong>0</strong>
									</span>
								</i>
							</span>
						</DropdownToggle>
						<DropdownMenu>
							<DropdownItem header>Header</DropdownItem>
							<DropdownItem>Some Action</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>
			</div>
		</nav>
	);
};
