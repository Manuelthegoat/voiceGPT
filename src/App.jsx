import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import ChatBar from "./components/ChatBar";
import SentMessage from "./components/SentMessage";
import AIAnswer from "./components/AIAnswer";

function App() {
	return (
		<>
			<NavBar />
			<main>
			<SentMessage />
			<AIAnswer />
			<ChatBar />
			</main>
		</>
		
	);
}

export default App;
