import {HiPlus, HiChatAlt} from "react-icons/hi";


const SideBar = () => {
	return (
		<div className="nav__menu__wrapper">
			<div className="nav__menu">
				<div className="new__chat">
					<HiPlus /> New chat
				</div>
				<div className="chat__history">
					<div className="history">
						<HiChatAlt /> What is your name?
					</div>

					<div className="history">
						<HiChatAlt /> Write a code?
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
