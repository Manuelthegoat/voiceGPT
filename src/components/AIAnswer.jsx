import { GrRobot } from "react-icons/gr";
import dots from "../assets/images/dots.gif";
import { useState } from "react";
import { RxSpeakerLoud, RxSpeakerOff } from "react-icons/rx";
import { useEffect } from "react";
import useInterval from "./useInterval";

const AIAnswer = ({ text, loading, error }) => {
	const [doneTyping, setDoneTyping] = useState(false);

	const [speak, setSpeak] = useState(false);

	const [type, setType] = useState("");

	const [count, setCount] = useState(0);

	const msg = new SpeechSynthesisUtterance();
	msg.text = text;

	useEffect(() => {
		speak ? window.speechSynthesis.speak(msg) : "";
	}, [speak]);

	// Implement typing effect
	useInterval(
		() => {
			if (count < text.length) {
				setType((prev) => prev + text.charAt(count));
				setCount((c) => c + 1);
			} else {
				setDoneTyping(true);
			}

		},
		doneTyping ? null : 20
	);

	const handleSpeak = () => {
		setSpeak(!speak);
	};
	// };

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
			) : (
				<div className="message">{text.trim()}</div>
			)}

			<div>
				{!error ? (
					speak ? (
						<RxSpeakerLoud
							className="voice__icon"
							onClick={handleSpeak}
						/>
					) : (
						<RxSpeakerOff
							className="voice__icon"
							onClick={handleSpeak}
						/>
					)
				) : (
					" "
				)}
			</div>
		</div>
	);
};

export default AIAnswer;
