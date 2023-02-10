import { HiMenuAlt2, HiPlus, HiChatAlt, HiX} from "react-icons/hi";

function NavBar() {
	return (
		<>
			<header>
				<nav>
					<div className="nav__container">
						<HiMenuAlt2 className="icon" />
						New chat
						<HiPlus className="icon" />
					</div>
				</nav>
			</header>

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

        {/* <HiX/> */}
			</div>
		</>
	);
}

export default NavBar;
