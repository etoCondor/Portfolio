import React from "react";
import spinnerImg from "../../img/spinner.svg";
import "./style.css";

function Spinner() {
	return (
		<>
			<p className='spinnerP'>LOADING</p>
			<img className='spinner' alt='loading' src={spinnerImg} />
		</>
	);
}
export default Spinner;
