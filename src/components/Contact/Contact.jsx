import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

function Contact(){
	return(
		<>
		<section className="contact">
			<h2 className="contact__title">Get in touch</h2>
			<div className="contact__infos">
				<p className="contact__infos-location">Rio de Janeiro, Brasil</p>
				<p className="contact__infos-email">bruno.taveira.r0.382@gmail.com</p>
				<p className="contact__infos-telephone">+55 24 99218-1476</p>
				<IconContext.Provider value={{ className: 'contact__icons' }}>
					<div className="contact__icons-wrapper">
						<a target="a_blank" href="https://www.linkedin.com/in/bru-rocha/"><FaLinkedin /></a>
						<a target="a_blank" href="https://github.com/RochtBruno"><FaGithub /></a>
					</div>
				</IconContext.Provider>;
			</div>
		</section>
		</>
	)
}

export default Contact