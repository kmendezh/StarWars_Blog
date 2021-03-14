import React from "react";
import { Link } from "react-router-dom";
import "/workspace/StarWars_Blog/src/styles/cards.css";

const urlImage = "https://sm.ign.com/ign_es/screenshot/default/mandalorian-baby-yoda-macarons_1nqk.jpg";
const urlPlanetImage = "https://i.pinimg.com/originals/e7/e6/6e/e7e66e9a5d91ee1b10cf2caa5d046590.jpg";
const urlVehicle = "https://i.pinimg.com/originals/13/ee/70/13ee7069b749b7cfb394bdab3687ae57.jpg";

export function CardCharacter(prop) {
	return (
		<div className="card mr-2" style={{ marginBottom: "20px" }}>
			<img
				className="card-img-top"
				src={urlImage}
				alt="Card image cap"
				style={{ width: "100%", height: "200px" }}
			/>
			<div className="card-body">
				<h4 className="card-title">{prop.title}</h4>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
				<div className="row">
					<div className="col-8">
						<Link to={"/cardInfo"}>
							<div className="btn btn-secondary"> More information </div>
						</Link>
					</div>
					<div className="col-4">
						<a href="#!" className="btn btn-secondary">
							<i className="fas fa-heart" style={{ color: "white", fontSize: "20px" }} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export function CardPlanet(prop) {
	return (
		<div className="card mr-2" style={{ marginBottom: "20px" }}>
			<img
				className="card-img-top"
				src={urlPlanetImage}
				alt="Card image cap"
				style={{ width: "100%", height: "200px" }}
			/>
			<div className="card-body">
				<h4 className="card-title">{prop.title}</h4>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
				<div className="row">
					<div className="col-8">
						<Link to={"/cardInfo"}>
							<div className="btn btn-secondary"> More information </div>
						</Link>
					</div>
					<div className="col-4">
						<a href="#!" className="btn btn-secondary">
							<i className="fas fa-heart" style={{ color: "white", fontSize: "20px" }} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export function CardVehicle(prop) {
	return (
		<div className="card mr-2" style={{ marginBottom: "20px" }}>
			<img
				className="card-img-top"
				src={urlVehicle}
				alt="Card image cap"
				style={{ width: "100%", height: "200px" }}
			/>
			<div className="card-body">
				<h4 className="card-title">{prop.title}</h4>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
				<div className="row">
					<div className="col-8">
						<Link to={"/cardInfo"}>
							<div className="btn btn-secondary"> More information </div>
						</Link>
					</div>
					<div className="col-4">
						<a href="#!" className="btn btn-secondary">
							<i className="fas fa-heart" style={{ color: "white", fontSize: "20px" }} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
