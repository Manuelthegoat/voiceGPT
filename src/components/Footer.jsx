import { GrGithub, GrTwitter, GrLinkedin } from "react-icons/gr";

import {BsSuitHeartFill} from "react-icons/bs"

const Footer = () => {
	return (
		<footer>
			<p>
				Made with <BsSuitHeartFill className="heart"/> by <a href="https://timokonkwo.com">Tim Okonkwo</a>
			</p>

			<div className="footer__links">
				<GrGithub className="icon"/>
				<GrTwitter className="icon"/>
				<GrLinkedin className="icon"/>
			</div>
		</footer>
	);
};
export default Footer;
