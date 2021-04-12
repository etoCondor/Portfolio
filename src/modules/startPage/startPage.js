import "./style.css";
import blast from "../../img/blast.gif";
import bg from "../../img/bg.png";
import Spinner from "../spinner";
import { useState, useEffect } from "react";

const StartPage = () => {
	const [loading, setLoading] = useState(true);
	const [blastLoaded, setBlastLoaded] = useState(false);
	const [bgLoaded, setBgLoaded] = useState(false);
	const pressStart = <p>Press start button</p>;
	const startButton = <span>START</span>;

	useEffect(() => {
		const imageLoader = new Image();
		imageLoader.src = bg;
		imageLoader.onload = () => {
			console.log("bgloaded");
			setBgLoaded(true);
		};
	}, []);
	useEffect(() => {
		const blastoise = new Image();
		blastoise.src = blast;
		blastoise.onload = () => {
			console.log("blastloaded");
			setBlastLoaded(true);
		};
	}, []);
	useEffect(() => {
		if (bgLoaded && blastLoaded) {
			setLoading(false);
			document.querySelector(
				"body",
			).style.background = `url(${bg}) fixed bottom`;
			console.log("finally loaded!");
		}
	}, [bgLoaded, blastLoaded]);

	return loading ? (
		<Spinner />
	) : (
		<>
			<div className="blackBg"></div>
			<div className="startPage">
				{pressStart}
				<a href="https://imdb.etocondor.dev">{startButton}</a>
				<div className="blast">
					<img alt="Blastoise" src={blast}></img>
				</div>
			</div>
		</>
	);
};
export default StartPage;
