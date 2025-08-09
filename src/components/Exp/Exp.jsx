import React from 'react'

function Exp({date, title, description, skills}) {
	return(
		<>
			<div className="experience">
				<div className="experience__wrapper">
					<div className="experience__box-date">
						<p>{date}</p>
					</div>
					<div className="experience__box-info">
						<p className="experience__box-job-title">{title}</p>
						<p className="experience__box-job-description">{description}</p>
						<div className="experience__box-job-skills">
							{skills.map((skill,index) => (
								<p className="experience__box-job-skill" key={index}>{skill}</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Exp