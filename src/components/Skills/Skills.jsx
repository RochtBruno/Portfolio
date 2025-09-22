import React from 'react'
import { IconContext } from "react-icons";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaSquareGit } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { useTranslation } from 'react-i18next';


function Skills(){
  const { t } = useTranslation();
	return(
		<>
			<IconContext.Provider value={{className: 'skills__icons'}}>
			<div className="skills">
				<h2 className="skills__title">{t('skills.title', 'Technologies')}</h2>
				<div className="skills__icons-wrapper">
					<IoLogoJavascript />
					<FaReact />
					<FaNode />
					<BiLogoPostgresql />
					<SiMongodb />
					<FaDocker />
					<FaSquareGit />
					<FaJava />
					<FaC />
					<TbBrandCpp />
				</div>
			</div>
			</IconContext.Provider>
		</>
	)
}

export default Skills;