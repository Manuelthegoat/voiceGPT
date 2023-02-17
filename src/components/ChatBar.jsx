import Footer from "./Footer";

import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { FiMic, FiSend } from "react-icons/fi";
import { Tooltip } from 'react-tooltip'

const ChatBar = ({ setQuery }) => {
	const [userInput, setUserInput] = useState("");

	const submit = () => {
		setQuery(userInput);
		setUserInput("")
	};

	// Update the text area
	const handleInput = (e) => {
		setUserInput((prev) => e.target.value);
	};

	return (
		<div className="chatbox__wrapper">
			<div className="chatbox">
				<TextareaAutosize
					maxRows={6}
					value={userInput}
					onChange={handleInput}
                    autoFocus={true}
				/>
				<div className="icon__wrapper send__icon__wrapper">
					<FiSend onClick={submit} className="send__icon message" />
                    <Tooltip anchorId="mic"/>
                    <FiMic onClick={undefined} className="send__icon" id="mic" data-tooltip-content="Coming soon"/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ChatBar;
