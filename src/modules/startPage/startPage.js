import "./style.css";
import blast from "../../img/blast.gif";
import explode from "../../img/explosion.gif";
import bg from "../../img/bg.png";
import html from "../../img/stack/html5.svg";
import css from "../../img/stack/css3.svg";
import redux from "../../img/stack/redux.svg";
import react from "../../img/stack/react.svg";
import js from "../../img/stack/js.svg";
import Spinner from "../spinner";
import PressStart from "../pressStart";
import { useState, useEffect } from "react";
import WhitePage from "../whitePage";
import GameOver from "../gameOver/gameOver";

const StartPage = () => {
	// Loading states
	const [loading, setLoading] = useState(true);
	const [blastLoaded, setBlastLoaded] = useState(false);
	const [explosionLoaded, setExplosionLoaded] = useState(false);
	const [bgLoaded, setBgLoaded] = useState(false);
	const [htmlLoaded, setHtmlLoaded] = useState(false);
	const [cssLoaded, setCssLoaded] = useState(false);
	const [reduxLoaded, setReduxLoaded] = useState(false);
	const [reactLoaded, setReactLoaded] = useState(false);
	const [jsLoaded, setJsLoaded] = useState(false);

	// Rest states
	const [blastClicker, setBlastClicker] = useState(0);
	const [explosion, setExplosion] = useState(false);
	const [currentPage, setCurrentPage] = useState("pressStart");

	useEffect(() => {
		const imageLoader = new Image();
		imageLoader.src = bg;
		imageLoader.onload = () => {
			setBgLoaded(true);
		};
		const blastoise = new Image();
		blastoise.src = blast;
		blastoise.onload = () => {
			setBlastLoaded(true);
		};
		const explosion = new Image();
		explosion.src = explode;
		explosion.onload = () => {
			setExplosionLoaded(true);
		};
		const htmlImg = new Image();
		htmlImg.src = html;
		htmlImg.onload = () => {
			setHtmlLoaded(true);
		};
		const cssImg = new Image();
		cssImg.src = css;
		cssImg.onload = () => {
			setCssLoaded(true);
		};
		const reduxImg = new Image();
		reduxImg.src = redux;
		reduxImg.onload = () => {
			setReduxLoaded(true);
		};
		const reactImg = new Image();
		reactImg.src = react;
		reactImg.onload = () => {
			setReactLoaded(true);
		};
		const jsImg = new Image();
		jsImg.src = js;
		jsImg.onload = () => {
			setJsLoaded(true);
		};
		if (
			bgLoaded &&
			blastLoaded &&
			explosionLoaded &&
			htmlLoaded &&
			cssLoaded &&
			reduxLoaded &&
			reactLoaded &&
			jsLoaded
		) {
			setLoading(false);
			document.querySelector(
				"body",
			).style.background = `url(${bg}) fixed bottom`;
			console.log("Want my contacts? Here you are! etoCondor@yandex.ru");
		}
	}, [
		bgLoaded,
		blastLoaded,
		explosionLoaded,
		htmlLoaded,
		cssLoaded,
		reduxLoaded,
		reactLoaded,
		// nextjsLoaded,
		jsLoaded,
	]);
	const stackImages = { html, css, redux, react, js };
	const handleBlastClick = () => {
		let newCounterValue = blastClicker;
		newCounterValue++;
		if (newCounterValue === 4) {
			setBlastClicker(0);
			setExplosion(true);
			setTimeout(() => {
				setCurrentPage("gameOver");
			}, 3000);
			return;
		}
		setBlastClicker(newCounterValue);
	};

	return loading ? (
		<Spinner />
	) : (
		<>
			<div className='startPage'>
				{currentPage === "pressStart" && (
					<PressStart setCurrentPage={setCurrentPage} explosion={explosion} />
				)}
				{currentPage === "whitePage" && <WhitePage stackImages={stackImages} />}
				{currentPage === "gameOver" && (
					<GameOver
						setCurrentPage={setCurrentPage}
						setExplosion={setExplosion}
					/>
				)}
				<div className='character'>
					{explosion ? (
						<img className='explode' alt='Explosion' src={explode}></img>
					) : (
						<img
							onClick={() => handleBlastClick()}
							alt='Blastoise'
							src={blast}
						></img>
					)}
				</div>
			</div>
		</>
	);
};
export default StartPage;
