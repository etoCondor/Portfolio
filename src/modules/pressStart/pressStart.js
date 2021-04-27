import "./style.css";

const pressStart = (props) => {
	const { setCurrentPage, explosion } = props;
	return (
		<>
			<p className='pressStartButton blink'>Press start button</p>
			<span
				className='buttonStart'
				onClick={() => {
					explosion ? console.error("Game Over!") : setCurrentPage("whitePage");
				}}
			>
				START
			</span>
		</>
	);
};
export default pressStart;
