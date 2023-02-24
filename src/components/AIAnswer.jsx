import { GrRobot } from "react-icons/gr";
import dots from "../assets/images/dots.gif";
import { useState } from "react";
import { RxSpeakerLoud, RxSpeakerOff } from "react-icons/rx";
import { useEffect } from "react";
import useInterval from "./useInterval";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AIAnswer = ({ text, loading, error }) => {
	const [doneTyping, setDoneTyping] = useState(false);

	const [speak, setSpeak] = useState(false);

	const [type, setType] = useState("");

	const [count, setCount] = useState(0);

	const msg = new SpeechSynthesisUtterance();
	msg.text = text;

	useEffect(() => {
		// Cancel the speech running so as to take a new one
		if (speechSynthesis.speaking === true){
			speechSynthesis.cancel()
			speak ? speechSynthesis.speak(msg) : ""
		}
		else {
			speak ? speechSynthesis.speak(msg) : ""
		}

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

	// Implement copy to clip board on clicking the messsage
	const copyText = async (type) => {
		// Toast copied successfully
		toast.success("Copied text to Clipboard", {
			position: "bottom-center",
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
		return await navigator.clipboard.writeText(type);
	};

	// Dynmaic class name
	const classname = "message__wrapper ai";

	return (
		<div className={loading ? classname + " loading" : classname} >
			<div className="icon__wrapper">
				<GrRobot className="ai__icon" />
			</div>
			{loading ? (
				<img src={dots} className="loader" />
			) : text.length < 4 ? (
				<p className="error">
					{error = true}
					An error occured. Please try again.
				</p>
			) : (
				<>
					<div className="copyDiv" onClick={() => copyText(text)}>
						<p className="message">{type.trim()}</p>
						<ToastContainer limit={2}/>
					</div>
				</>
			)}

			<div>
				{!error ? (
					speak ? (
						<RxSpeakerLoud
							className="voice__icon"
							onClick={() => setSpeak(false)}
						/>
					) : (
						<RxSpeakerOff
							className="voice__icon"
							onClick={() => setSpeak(true)}
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
