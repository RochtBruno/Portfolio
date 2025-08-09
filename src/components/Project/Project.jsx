import React from 'react'

function Project({projectImg, title, description, links}) {
	const imgSrc = projectImg ? new URL(`../../assets/${projectImg}`, import.meta.url).href : "";
	return(
		<>
			<div className="project">
				<div className="project__wrapper">
					<div className="project__box-image">
						<img src={imgSrc} alt={title} />
					</div>
					<div className="project__box-info">
						<p className="project__box-project-title">{title}</p>
						<p className="project__box-project-description">{description}</p>
						<div className="project__box-project-links">
							{
								links && links.map((link,index) => (
									<a
									key={index}
									className="project__box-project-link" 
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									>{link.label}</a>
								))
							}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Project