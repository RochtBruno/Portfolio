import React from 'react'
import my_photo from "../../assets/foto__perfil.jpeg"

function Main(){
	return(
		<>
		<section className="main">
			<div className="main__description">
				<h1 className="main__description-title">Bruno Rocha</h1>
				<h2 className="main__description-subtitle">Full stack developer</h2>
				<p className="main__description-text">Sou Bruno Taveira, desenvolvedor full stack com foco em criar soluções web eficientes e escaláveis. 
					Tenho uma base sólida em JavaScript, React, Node.js, Java, Spring Boot e MongoDB, além de experiência prática com projetos full stack, 
					tanto acadêmicos quanto freelancers.Estudo Engenharia de Software na 42 Rio e já participei de formações complementares pela TripleTen 
					e Oracle Next Education (ONE), o que fortaleceu meu domínio do front-end e back-end.
					Sou movido pela curiosidade e pela vontade constante de aprender. Gosto de resolver problemas com código limpo, 
					pensar em usabilidade e trabalhar em equipe para construir produtos que realmente funcionem.</p>
				<button className="main__description-btn">Download CV</button>
			</div>
			<div className="main__photo">
				<img src={my_photo} alt="profile photo" />
			</div>
		</section>
		</>
	)
}

export default Main