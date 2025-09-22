import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from '../../assets/logo-no-bg.png'
import { IconContext } from "react-icons";


function Header({changeLanguage}) {
	return(
		<>
		<div className="header">
			<div className="header__logo">
				<img src={logo} alt="logo" />
			</div>
			
			<IconContext.Provider value={{ className: 'react-icons' }}>
				<div className="header__icons">
					<a target="a_blank" href="https://www.linkedin.com/in/bru-rocha/"><FaLinkedin /></a>
					<a target="a_blank" href="https://github.com/RochtBruno"><FaGithub /></a>
					<div className='lang-buttons'>
						<button className='lang-button' onClick={() => changeLanguage('en')}>English</button>
						<button className='lang-button' onClick={() => changeLanguage('pt')}>Português</button>
						<button className='lang-button' onClick={() => changeLanguage('fr')}>Français</button>
					</div>
				</div>
			</IconContext.Provider>;
		</div>
		</>
		
	)
}

export default Header;