import { useState } from "react";
import { GrRobot } from "react-icons/gr";
import dots from "../assets/images/dots.gif";

const AIAnswer = ({ text, loading }) => {
	const classname = "message__wrapper ai"
	return (
		<div className={loading ? classname + " loading" : classname}>
			<div className="icon__wrapper">
				<GrRobot className="ai__icon" />
			</div>
			{loading ? (
					<img src={dots} className="loader" />
			) : (
				<p>{text}</p>
			)}
		</div>
	);
};

export default AIAnswer;
