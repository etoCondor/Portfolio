import "./style.css";

const GameOver = (props) => {
	const { setCurrentPage, setExplosion } = props;
	return (
		<div className='gameOver'>
			<p className='gameOverText blink'>Game Over</p>
			<span
				onClick={() => {
					setCurrentPage("pressStart");
					setExplosion(false);
				}}
				className='buttonRetry'
			>
				RETRY
			</span>
		</div>
	);
};
export default GameOver;
