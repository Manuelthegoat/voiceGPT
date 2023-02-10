import Footer from './Footer';

import TextareaAutosize from "react-textarea-autosize";
import { FiSend } from "react-icons/fi";

const ChatBar = () => {
	return (
		<div className="chatbox__wrapper">
			<div className="chatbox">
				<TextareaAutosize maxRows={6} />
				<FiSend className="send__icon" />
			</div>

			<Footer />
		</div>
	);
};

export default ChatBar;
