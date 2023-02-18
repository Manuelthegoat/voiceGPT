import { GrGithub, GrTwitter, GrLinkedin } from "react-icons/gr";

import { BsSuitHeartFill } from "react-icons/bs";

const Footer = () => {
	return (
		<footer>
			<p>
				Made with <BsSuitHeartFill className="heart" /> by{" "}
				<a href="https://timokonkwo.com">Tim</a>
			</p>

			{/* <div className="footer__links">
				<a href="https://twitter.com/timokonkwo_" target="_blank">
					<GrTwitter className="icon" />
				</a>
				<a href="https//github.com/timokonkwo" target="_blank">
					<GrGithub className="icon" />
				</a>
				<a href="https://linkedin.com/in/timokonkwo" target="_blank">
					<GrLinkedin className="icon" />
				</a>
			</div> */}
		</footer>
	);
};
export default Footer;
