import {GrRobot} from "react-icons/gr"


const AIAnswer = () => {
	return (
		<div className="message__wrapper ai">
            <div className="icon__wrapper">
                <GrRobot className="ai__icon"/>
            </div>
			<p>
				AI Answers: Lorem ipsum dolor sit amet, consectetur adipisicing
				elit. Impedit odit sit laborum iste suscipit, quaerat facere
				porro quidem cumque.{" "}
			</p>
		</div>
	);
};

export default AIAnswer;
