import Footer from "./Footer";

import { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { FiMic, FiSend } from "react-icons/fi";
import { FaStopCircle } from "react-icons/fa";

// Speech recognition
import regeneratorRuntime from "regenerator-runtime"; // Not sure why this is but errors occur without it

import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
import SpeechRecognition, {
	useSpeechRecognition,
} from "react-speech-recognition";
const appId = "3d21b3bc-9b56-43ce-a10b-b3a37ca791da";

const speechly = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(speechly);

const ChatBar = ({ setQuery }) => {
	const { transcript, resetTranscript, listening, browserSupportsSpeechRecognition } =
		useSpeechRecognition();

	const [userInput, setUserInput] = useState("");
	const [speaking, setSpeaking] = useState(false);

	useEffect(() => {
		setUserInput(prev => prev + " " + transcript);
	}, [transcript])

	const submit = () => {
		setQuery(userInput);
		resetTranscript()
		setUserInput("");
	};

	// Update the text area
	const handleInput = (e) => {
		setUserInput(e.target.value);
	};

	const handleMicrophone = (action) => {
		if (action === "start") {
			console.log("listening");
			SpeechRecognition.startListening({ continuous: true });
			setSpeaking(true);
			setUserInput()
		} else {
			console.log("end");
			SpeechRecognition.stopListening();
			setSpeaking(false);
		}
	};

	// Speech to text implementation

	return (
		<div className="chatbox__wrapper">
			<div className="chatbox">
				<TextareaAutosize
					maxRows={6}
					value={userInput} // userInput
					onChange={handleInput}
					autoFocus={true}
				/>
				<div className="icon__wrapper send__icon__wrapper">
					<FiSend onClick={submit} className="send__icon message" />
					{speaking ? (
						<FaStopCircle
							className="send__icon stop__recording"
							onClick={() => handleMicrophone("stop")}
						/>
					) : (
						<FiMic
							onClick={() => handleMicrophone("start")}
							className="send__icon"
							id="mic"
						/>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ChatBar;
