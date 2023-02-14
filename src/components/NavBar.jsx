import { useState } from "react";
import { HiPlus, HiChatAlt, HiX, HiMenuAlt4, HiMenuAlt3, HiOutlineMenuAlt1 } from "react-icons/hi";
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
						<HiOutlineMenuAlt1
							onClick={() => setMenu(!menu)}
							className="icon menu__icon nav__icon__wrapper"
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
