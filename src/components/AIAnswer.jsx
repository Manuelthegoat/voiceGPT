import { GrRobot } from "react-icons/gr";
import dots from "../assets/images/dots.gif";
import { useState } from "react";
import TypeEffect from "./TypeEffect";
import { RxSpeakerLoud, RxSpeakerOff } from "react-icons/rx";
import { useEffect } from "react";

const AIAnswer = ({ text, loading, error }) => {
	const [doneTyping, setDoneTyping] = useState(false);

	const [speak, setSpeak] = useState(false);

	const msg = new SpeechSynthesisUtterance();
	msg.text = text;

	useEffect(() => {
		speak ? window.speechSynthesis.speak(msg) : " ";
	}, [speak]);



	const classname = "message__wrapper ai";

	return (
		<div className={loading ? classname + " loading" : classname}>
			<div className="icon__wrapper">
				<GrRobot className="ai__icon" />
			</div>
			{loading ? (
				<img src={dots} className="loader" />
			) : !text.length > 4 ? (
				<p className="error">An error occured. Please try again</p>
			) : doneTyping ? (
				<p className={error ? "error" : ""} dangerouslySetInnerHTML={{__html:text}}/>
			) : (
				<TypeEffect text={text} setDoneTyping={setDoneTyping} />
			)}

			<div>
				{!error ? speak ? (
					<RxSpeakerLoud
						className="voice__icon"
						onClick={() => setSpeak(!speak)}
					/>
				) : (
					<RxSpeakerOff
						className="voice__icon"
						onClick={() => setSpeak(!speak)}
					/>
				) : ""} 
			</div>
		</div>
	);
};

export default AIAnswer;
