import React from "react";
import { Link } from "react-router-dom";
import "/workspace/StarWars_Blog/src/styles/navbar.css";

export const Navbar = () => {
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
					<i className="fas fa-heart" style={{ color: "white", fontSize: "20px" }} />
					<button
						className="btn dropdown-toggle ddtext"
						type="button"
						id="dropdownMenu1"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenu1">
						<a className="dropdown-item" href="#!">
							Action
						</a>
						<a className="dropdown-item" href="#!">
							Another action
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
