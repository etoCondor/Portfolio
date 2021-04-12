import "./style.css";
import blast from "../../img/blast.gif";
const startPage = () => {
	const pressStart = <p>Press start button</p>;
	const startButton = <span>START</span>;
	return (
		<div className="startPage">
			{pressStart}
			<a href="https://imdb.etocondor.dev">{startButton}</a>
			<div className="blast">
				<img src={blast}></img>
			</div>
		</div>
	);
};
export default startPage;
