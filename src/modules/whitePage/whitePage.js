import "./style.css";
import { useState, useEffect } from "react";

const WhitePage = (props) => {
	const textHello = `Hello and welcome to my portfolio page!`;
	const textAbout = "I`m Alexey aka Condor! 27 y.o.";
	const textStack = "I`m using HTML5, CSS3, JavaScript, React and Redux.";
	const textProjects = "I have several projects:";
	const [textForPrint, setTextForPrint] = useState("");
	const [textType, setTextType] = useState("hello");
	const [isTyping, setIsTyping] = useState(true);
	const [stackImages, setStackImages] = useState(false);
	const [projectsLinks, setProjectsLinks] = useState(false);
	const [really, setReally] = useState("");
	const { html, css, redux, react, js } = props.stackImages;

	useEffect(() => {
		setTimeout(() => {
			printText(textHello);
		}, 1500);
	}, [textHello]);

	useEffect(() => {
		switch (textType) {
			case "about":
				setProjectsLinks(false);
				setStackImages(false);
				printText(textAbout);
				break;
			case "stack":
				setProjectsLinks(false);
				printText(textStack);
				setTimeout(() => {
					setStackImages(true);
				}, (textStack.length + 5) * 50);
				break;
			case "projects":
				setStackImages(false);
				printText(textProjects);
				setTimeout(() => {
					setProjectsLinks(true);
				}, (textProjects.length + 5) * 50);

				break;
			default:
				break;
		}
	}, [textType]);

	const printText = (text) => {
		setIsTyping(true);
		let counter = 0;
		const interval = setInterval(() => {
			if (counter !== text.length + 1) {
				setTextForPrint(text.substr(0, counter++));
			} else {
				clearInterval(interval);
				setIsTyping(false);
			}
		}, 50);
	};

	return (
		<div className='whitePage'>
			<div className='upperPage'>
				<p>{textForPrint}</p>
				<p className='blink'>▊</p>
				{stackImages && (
					<div className='stackImages'>
						<img alt='html' src={html}></img>
						<img alt='css' src={css}></img>
						<img alt='js' src={js}></img>
						<img alt='react' src={react}></img>
						<img alt='redux' src={redux}></img>
					</div>
				)}
				{projectsLinks && (
					<div className='projectsLinks'>
						<a rel='noreferrer' target='_blank' href='http://panicteam.ru'>
							- PanicTeam.ru
						</a>

						<a rel='noreferrer' target='_blank' href='https://geokadrzn.ru'>
							- GeokadRzn.ru
						</a>

						<a
							rel='noreferrer'
							target='_blank'
							href='https://amazon.com'
							onClick={(e) => {
								e.preventDefault();
								window.open(
									"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
									"_blank",
								);
							}}
						>
							- Amazon.com
						</a>

						<a
							rel='noreferrer'
							target='_blank'
							href='https://imdb.etocondor.dev'
						>
							- IMDb films (like Netflix)
						</a>

						<p
							onClick={() =>
								really === ""
									? setReally("really? You are here right now!")
									: setReally("")
							}
						>
							- etoCondor.dev {really}
						</p>
					</div>
				)}
			</div>
			<div className='lowerPage'>
				<span
					onClick={() => {
						isTyping ? console.warn("wait!") : setTextType("about");
					}}
				>
					Tell me more about yourlself.
				</span>
				<span
					onClick={() => {
						isTyping ? console.warn("wait!") : setTextType("stack");
					}}
				>
					What stack do you use?
				</span>
				<span
					onClick={() => {
						isTyping ? console.warn("wait!") : setTextType("projects");
					}}
				>
					What about your projects?
				</span>
			</div>
		</div>
	);
};

export default WhitePage;
