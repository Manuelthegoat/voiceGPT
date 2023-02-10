/** 
 * Implement auto resize chat area later
*/

import TextareaAutosize from 'react-textarea-autosize';
import {FiSend} from "react-icons/fi"

const ChatBar = () => {

    return <div className="chatbox__wrapper">
        <div className="chatbox">
            <TextareaAutosize/>
            <FiSend className="send__icon"/>
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    </div>
}

export default ChatBar