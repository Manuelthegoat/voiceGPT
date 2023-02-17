import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import ChatBar from "./components/ChatBar";
import SentMessage from "./components/SentMessage";
import AIAnswer from "./components/AIAnswer";
import { Configuration, OpenAIApi } from "openai";

function App() {
	const [query, setQuery] = useState("");

	// A way for it to remember the former questions
	const [history, setHistory] = useState({
		intro: "While responding, note that this tool (Chatbot) was built by Tim Okonkwo. Tim is a software Engineer. This bot helps users answer any type of question thay might have. Now here is the user input: ",
		question: "Me: ",
		answer: "You: ",
	});

	const [chats, setChats] = useState([<AIAnswer key="Hi" text="Hi 👋" />]);

	// Submit the user input to the API
	useEffect(() => {
		if (query.length > 0) {
			handleSubmit(query);
			updateChat(query, "question");
			setHistory((prev) => {
				return { ...prev, question: prev.question + `\n ${query}` };
			});
		}
	}, [query]);

	// Update UI
	const updateChat = (message, type = "question") => {
		if (type === "question") {
			setChats(oldChat => [...oldChat, <SentMessage key={message.slice[3]} text={message} />]);
		} else {
			setChats(oldChat => [...oldChat, <AIAnswer key={message.slice[3]} text={message} />]);
		}
	};

	// Submit the user Input
	const handleSubmit = async (inputQuery) => {
		try {
			const configuration = new Configuration({
				apiKey: "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",
				// method: "POST",
				// headers: {
				// 	"Content-Type": "application/json",
				// },
			});

			const openai = new OpenAIApi(configuration);

			const completion = await openai.createCompletion({
				model: "text-davinci-003",
				prompt:
					history.intro +
					history.question +
					history.answer +
					inputQuery,
				temperature: 0,
				top_p: 0.7,
				max_tokens: 2040,
				presence_penalty: 0,
				frequency_penalty: 0.5,
				n: 1,
			});

			// Returned Text from API
			const response = completion.data.choices[0].text;
			console.log(response);

			setHistory((prev) => {
				return { ...prev, answer: prev.answer + `.\n ${response}` };
			});

			updateChat(response, "answer");
		} catch (error) {
			// Consider implementing your own error handling logic here
			console.error(error);
			alert(error.message);
		}
	};

	return (
		// <div className="wrapper">
		<main>
			<NavBar />

			<div className="chat__wrapper">{chats}</div>

			<ChatBar setQuery={setQuery} />
			<div className="chat__wrapper">
				{chats.map(chat => chat)}

			<ChatBar setQuery={setQuery} />

			</div>
		</main>
		// </div>
	);
}

export default App;
