import Typewriter from "typewriter-effect";

const TypeEffect = ({ text, setDoneTyping }) => {
	return (
		<Typewriter
			onInit={(typewriter) => {
				typewriter
					.start()
                    .changeDelay(1)
					.typeString(text)
					.pauseFor(500)
					.callFunction(() => {
						setDoneTyping(true);
					});
			}}
		/>
	);
};

export default TypeEffect;