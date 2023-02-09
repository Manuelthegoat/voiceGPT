import { HiMenuAlt2, HiPlus } from "react-icons/hi";

function NavBar() {
	return (
		<nav>
			<div className="nav__container">
				<HiMenuAlt2 className="icon"/>
				  New chat
				<HiPlus className="icon"/>
			</div>
		</nav>
	);
}

export default NavBar;
