import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from '../../assets/logo-no-bg.png'
import { IconContext } from "react-icons";


function Header() {
	return(
		<>
		<div className="header">
			<div className="header__logo">
				<img src={logo} alt="logo" />
			</div>
			<IconContext.Provider value={{ className: 'react-icons' }}>
				<div className="header__icons">
					<a href=""><FaLinkedin /></a>
					<a href=""><FaGithub /></a>
				</div>
			</IconContext.Provider>;
		</div>
		</>
		
	)
}

export default Header;