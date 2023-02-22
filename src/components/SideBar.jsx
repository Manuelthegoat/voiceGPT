import { HiPlus, HiChatAlt, HiX } from "react-icons/hi";

import { BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";

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
							<a
								className="new__chat contact"
								href="https://twitter.com/timokonkwo_"
								target="_blank"
							>
								<BsTwitter className="icon tw" />
								Let's Connect
							</a>

							<a
								className="new__chat contact"
								href="https://wa.me/+2347034668957"
								target="_blank"
							>
								<BsWhatsapp className="icon wh" />
								Let's Chat
							</a>
							<a
								className="new__chat contact"
								href="https://linkedin.com/in/timokonkwo"
								target="_blank"
							>
								<BsLinkedin className="icon li" />
								Meet
							</a>
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
