import { FiUser } from "react-icons/fi";

const SentMessage = ({text}) => {
	return (
		<div className="message__wrapper">
			<div className="icon__wrapper">
				<FiUser className="user__icon" />
			</div>
			<p>{text}</p>
		</div>
	);
};

export default SentMessage;
