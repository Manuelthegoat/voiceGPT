import Footer from './Footer';

import TextareaAutosize from 'react-textarea-autosize';
import {FiSend} from "react-icons/fi"
import { useState } from 'react';

const ChatBar = ({setQuery}) => {

    const [userInput, setUserInput] = useState("")

    const submit = () => {
        setQuery(userInput)
    }

    // Update the text area
    const handleInput = (e) => {
        setUserInput(prev => e.target.value)
    }

    return <div className="chatbox__wrapper">
        <div className="chatbox">
            <TextareaAutosize 
                maxRows={6}
                value={userInput} 
                onChange={handleInput}
                />
            <FiSend onClick={submit} className="send__icon"/>
        </div>
        <Footer />
    </div>
}

export default ChatBar