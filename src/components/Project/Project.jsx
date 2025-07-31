import React from 'react'
import projectImg from '../../assets/project-1.png'

function Project() {
	return(
		<>
			<div className="project">
				<div className="project__wrapper">
					<div className="project__box-image">
						<img src={projectImg} alt="" />
					</div>
					<div className="project__box-info">
						<p className="project__box-project-title">Full stack developer - <span>42 rio</span></p>
						<p className="project__box-project-description">Experiência como desenvolvedor full stack no programa 42 Labs 
							fundamental para o meu desenvolvimento, proporcionando contato direto com problemas reais de empresas parceiras. 
							Através desse programa, pude aprimorar minhas hard skills em desenvolvimento de software (incluindo React.js, Node.js, 
							JavaScript/TypeScript, Python) e fortalecer minhas soft skills, atuando na resolução de problemas complexos. A vivência 
							com desafios que impactam diretamente negócios e empregos foi um passo crucial na minha carreira, preparando-me para o 
							mercado de trabalho em Engenharia de Software e desenvolvimento web full stack.</p>
						<div className="project__box-project-links">
							<a className="project__box-project-link" href="">Ver projeto</a>
							<a className="project__box-project-link" href="">Github</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Project