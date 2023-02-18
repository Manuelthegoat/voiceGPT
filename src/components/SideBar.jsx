import { HiPlus, HiChatAlt, HiX } from "react-icons/hi";

const SideBar = ({ menu, handleMenu }) => {
	return (
		<div className={menu ? "sidebar__wrapper show" : "sidebar__wrapper"}>
			<div className="overlay">
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

					<div className="my__details">
						<div className="new__chat">
							hi
						</div>
					</div>
				</div>
			</div>
			</div>
			

			<div className="nav__icon__wrapper close__icon__wrapper">
				<HiX onClick={handleMenu} className="icon close__menu" />
			</div>
		</div>
	);
};
export default SideBar;
