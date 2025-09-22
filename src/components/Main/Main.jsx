import React from 'react'
import my_photo from "../../assets/foto__perfil.jpeg"
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
				<a className="main__description-btn" href="/Bruno_Rocha_curriculo.pdf" download="curriculo.pdf">
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