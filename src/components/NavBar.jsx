import { useState } from "react";
import { HiMenuAlt2, HiPlus, HiChatAlt, HiX } from "react-icons/hi";
import SideBar from "./SideBar";

function NavBar() {
	const [menu, setMenu] = useState(false);

	
	const handleMenu = () => {
		setMenu(prev => !prev)
	}
	return (
		<div>
			<header>
				<nav>
					<div className="nav__container">
						<HiMenuAlt2
							onClick={() => setMenu(!menu)}
							className="icon menu__icon"
						/>
						New chat
						<HiPlus className="icon" />
					</div>
				</nav>
			</header>

			<SideBar menu={menu} handleMenu={handleMenu} />
		</div>
	);
}

export default NavBar;
