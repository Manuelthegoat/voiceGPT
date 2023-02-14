import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import ChatBar from "./components/ChatBar";
import SentMessage from "./components/SentMessage";
import AIAnswer from "./components/AIAnswer";

function App() {
	return (
		// <div className="wrapper">
		<main>
			<NavBar />

				<SentMessage />
				<AIAnswer />
				<ChatBar />
		</main>
		// </div>
	);
}

export default App;
