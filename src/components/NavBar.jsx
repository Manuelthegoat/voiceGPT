import { HiMenuAlt2, HiPlus, HiChatAlt, HiX} from "react-icons/hi";
import SideBar from "./SideBar";

function NavBar() {
	return (
		<>
			<header>
				<nav>
					<div className="nav__container">
						<HiMenuAlt2 className="icon menu__icon" />
						New chat
						<HiPlus className="icon"/>
					</div>
				</nav>
			</header>

			<SideBar />
		</>
	);
}

export default NavBar;
