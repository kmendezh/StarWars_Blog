import React, { useState, useEffect, useContext } from "react";
import "/workspace/StarWars_Blog/src/styles/home.css";

import { CardCharacter, CardPlanet, CardVehicle } from "/workspace/StarWars_Blog/src/js/component/cards.js";

import { Context } from "../store/appContext";

export const Home = () => {
	// Get Store
	const { store, actions } = useContext(Context);

	return (
		<div className="flexBox">
			<div className="flexHeader">
				<h1> Characters</h1>
				<i className="fab fa-jedi-order" style={{ color: "white", fontSize: "40px" }} />
			</div>

			<div className="flexContainer">
				<CardCharacter title="Anakin" />
				<CardCharacter title="C3PO" />
				<CardCharacter title="Obi-Wan-Kenobi" />
				<CardCharacter title="Darth Vader" />
				<CardCharacter title="Yoda" />
				<CardCharacter title="Padme" />
			</div>

			<div className="flexHeader">
				<h1> Planets </h1>
				<i className="fas fa-globe-americas" style={{ color: "white", fontSize: "40px" }} />
			</div>

			<div className="flexContainer">
				<CardPlanet title="Tatooine" />
				<CardPlanet title="Coruscant" />
				<CardPlanet title="Naboo" />
				<CardPlanet title="Hoth" />
				<CardPlanet title="Mustafar" />
				<CardPlanet title="Kamino" />
			</div>

			<div className="flexHeader">
				<h1> Vehicles </h1>
				<i className="fas fa-fighter-jet" style={{ color: "white", fontSize: "40px" }} />
			</div>

			<div className="flexContainer">
				<CardVehicle title="X Wing" />
				<CardVehicle title="Millennium Falcon" />
				<CardVehicle title="TIE Fighter" />
				<CardVehicle title="Slave I" />
				<CardVehicle title="U Wing" />
				<CardVehicle title="Y Wing" />
			</div>
		</div>
	);
};
