import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useTranslation } from 'react-i18next';

function Contact(){
  const { t } = useTranslation();
	return(
		<>
		<section className="contact">
			<h2 className="contact__title">{t('contact.title', 'Get in touch')}</h2>
			<div className="contact__infos">
				<p className="contact__infos-location">{t('contact.location')}</p>
				<p className="contact__infos-email">{t('contact.email')}</p>
				<p className="contact__infos-telephone">{t('contact.phone')}</p>
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