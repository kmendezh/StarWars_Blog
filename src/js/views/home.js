import React, { useState, useEffect, useContext } from "react";
import "/workspace/StarWars_Blog/src/styles/home.css";

import { CardCharacter, CardPlanet, CardVehicle } from "/workspace/StarWars_Blog/src/js/component/cards.js";

import { Context } from "../store/appContext";

export const Home = () => {
	// Get Store
	const { store, actions } = useContext(Context);
	console.log("Home:");
	console.log(store.peopleArray);

	// Planet Array
	let planetCards = store.planetsArray.map(element => <CardPlanet key={element.result._id} planetInfo={element} />);

	// People Array
	let peopleCards = store.peopleArray.map(element => <CardCharacter key={element.result._id} peopleInfo={element} />);

	return (
		<div className="flexBox">
			<div className="flexHeader">
				<h1> Characters</h1>
				<i className="fab fa-jedi-order" style={{ color: "white", fontSize: "40px" }} />
			</div>

			<div className="flexContainer">{peopleCards}</div>

			<div className="flexHeader">
				<h1> Planets </h1>
				<i className="fas fa-globe-americas" style={{ color: "white", fontSize: "40px" }} />
			</div>

			<div className="flexContainer">{planetCards}</div>

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
