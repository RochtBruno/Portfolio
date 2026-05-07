import React from 'react'
import my_photo from "../../assets/foto_perfil_linkedin.png"
import resumePdf from "../../assets/Bruno_Rocha_JavaScript_Developer.pdf"
import { useTranslation } from 'react-i18next'

function Main(){
  const { t } = useTranslation();
	return(
		<>
		<section className="main">
			<div className="main__description">
				<h1 className="main__description-title">{t('main.name')}</h1>
				<h2 className="main__description-subtitle">{t('main.role')}</h2>
				<p className="main__description-text">{t('main.description')}</p>
				<a className="main__description-btn" href={resumePdf} download="curriculo.pdf">
					{t('main.download')}
				</a>
			</div>
			<div className="main__photo">
				<img src={my_photo} alt="profile photo" />
			</div>
		</section>
		</>
	)
}

export default Main