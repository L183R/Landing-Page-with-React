import React from "react";
import Card from "./card.jsx";
import Jumbotron2 from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<Navbar />
		<div className="col-8 mx-auto text-center">
			<Jumbotron2 />
			<div className="row">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
		</>
	);
};

export default Home;
