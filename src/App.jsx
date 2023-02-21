import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ChatBar from "./components/ChatBar";
import SentMessage from "./components/SentMessage";
import AIAnswer from "./components/AIAnswer";
import { Configuration, OpenAIApi } from "openai";
import { nanoid } from "nanoid";

function App() {
	const [query, setQuery] = useState("");

	// A way for it to remember the former questions
	const [history, setHistory] = useState({
		intro: "While responding, note that this artificial intelligence was built by Tim Okonkwo. Tim is a software Engineer. This AI helps users answer any type of question users might have. This AI can generate codes and many more.  Now here is the user input: ",
		question: "Me: ",
		answer: "You: ",
	});

	const [chats, setChats] = useState([
		<AIAnswer key="global@tim@softamplify" text="Hi 👋" />,
	]);

	const [loading, setLoading] = useState(false);

	// Submit the user input to the API
	useEffect(() => {
		if (query.length > 0) {
			updateChat(query, "question");
			handleSubmit(query.toLocaleLowerCase());
			setLoading(true);
			setHistory((prev) => {
				return { ...prev, question: prev.question + `\n ${query}` };
			});
		}
	}, [query]);

	// Update UI
	const updateChat = (message, type) => {
		if (type === "question") {
			setChats((oldChat) => [
				...oldChat,
				<SentMessage key={nanoid()} text={message} />,
			]);
		} else if (type === "answer") {
			setChats((oldChat) => [
				...oldChat,
				<AIAnswer key={nanoid()} text={message} />,
			]);
		} else if (type === "error") {
			setChats((oldChat) => [
				...oldChat,
				<AIAnswer
					key={nanoid()}
					error={true}
					text={message + ". Please try again"}
				/>,
			]);
		}
	};

	// Submit the user Input and call the API
	const handleSubmit = async (inputQuery) => {
		try {
			const configuration = new Configuration({
				apiKey: "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",
			});

			const openai = new OpenAIApi(configuration);

			const completion = await openai.createCompletion({
				model: "text-davinci-003",
				prompt:
					history.intro +
					history.question +
					history.answer +
					inputQuery,
				temperature: 0.2,
				top_p: 1,
				max_tokens: 3890,
				presence_penalty: 0,
				frequency_penalty: 0.5,
				// n: 1,
			});

			// Returned Text from API

			const response = completion.data.choices[0].text;

			// Validate response
			// if (response <= 2) {
			// 	updateChat("what do you mean?", "answer");
			// 	setLoading(false);

			// 	return;
			// }

			setHistory((prev) => {
				return { ...prev, answer: prev.answer + `.\n ${response}` };
			});

			updateChat(response, "answer");
			setLoading(false);
		} catch (error) {
			// Consider implementing your own error handling logic here
			setLoading(false);
			updateChat(error.message, "error");
			// alert(error.message);
		}
	};

	return (
		// <div className="wrapper">
		<main>
			<NavBar />

			<div className="chat__wrapper">
				{chats}
				{loading && <AIAnswer loading={loading} text="..." />}
			</div>

			<ChatBar setQuery={setQuery} />
		</main>
		// </div>
	);
}

export default App;
