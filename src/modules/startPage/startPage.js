import "./style.css";
import blast from "../../img/blast.gif";
import explode from '../../img/explosion6.gif'
import bg from "../../img/bg.png";
import Spinner from "../spinner";
import PressStart from '../pressStart'
import { useState, useEffect } from "react";
import WhitePage from "../whitePage";

const StartPage = () => {
	// Loading states
	const [loading, setLoading] = useState(true);
	const [blastLoaded, setBlastLoaded] = useState(false);
	const [explosionLoaded, setExplosionLoaded] = useState(false)
	const [bgLoaded, setBgLoaded] = useState(false);
	// Rest states
	const [blastClicker, setBlastClicker] = useState(0);
	const [explosion, setExplosion] = useState(false)
	const [currentPage, setCurrentPage] = useState('pressStart')

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
		const explosion = new Image();
		explosion.src = explode;
		explosion.onload = () => {
			console.log("explosionloaded");
			setExplosionLoaded(true);
		};
	}, []);
	useEffect(() => {
		if (bgLoaded && blastLoaded && explosionLoaded) {
			setLoading(false);
			document.querySelector(
				"body",
			).style.background = `url(${bg}) fixed bottom`;
			console.log("finally loaded!");
		}
	}, [bgLoaded, blastLoaded, explosionLoaded]);

	const handleBlastClick = () => {
		let newCounterValue = blastClicker;
		newCounterValue++;
			if (newCounterValue === 4) {
				setBlastClicker(0);
				setExplosion(true)
				return
			}
		setBlastClicker(newCounterValue)
	}

	return loading ? (
		<Spinner />
	) : (
		<>
			<div className="startPage">
				{currentPage === 'pressStart' && <PressStart setCurrentPage={setCurrentPage}/>}
				{currentPage === 'whitePage' && <WhitePage/>}
				{explosion ? <div className='explosion'><img alt="Explosion" src={explode}></img></div> : <div className='blast'><img onClick={() => handleBlastClick()} alt="Blastoise" src={blast}></img></div> }
			</div>
			<div className="blackBg"></div>
		</>
	);
};
export default StartPage;
