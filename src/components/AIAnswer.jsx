import { GrRobot } from "react-icons/gr";

const AIAnswer = ({text}) => {
	return (
		<div className="message__wrapper ai">
			<div className="icon__wrapper">
				<GrRobot className="ai__icon" />
			</div>
			<p>
				{text}
			</p>
		</div>
	);
};

export default AIAnswer;
