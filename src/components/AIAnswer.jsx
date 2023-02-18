import { GrRobot } from "react-icons/gr";
import dots from "../assets/images/dots.gif";
import { useState } from "react";
import TypeEffect from "./TypeEffect";

const AIAnswer = ({ text, loading }) => {

	const [doneTyping, setDoneTyping] = useState(false)

	const classname = "message__wrapper ai";

	return (
		<div className={loading ? classname + " loading" : classname}>
			<div className="icon__wrapper">
				<GrRobot className="ai__icon" />
			</div>
			{loading ? (
				<img src={dots} className="loader" />
			) : !text.length > 0 ? <p className="error">An error occured. Please reload</p> : (
				doneTyping ? <p>{text}</p> : <TypeEffect text={text} setDoneTyping={setDoneTyping}/> 
			)}
		</div>
	);
};

export default AIAnswer;
