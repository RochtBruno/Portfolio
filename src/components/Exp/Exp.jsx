import React from 'react'

function Exp({date, title, description, skills}) {
	const descriptionTopics = typeof description === 'string' && /[•\n]/.test(description)
		? description
			.split(/[•\n]+/)
			.map((item) => item.trim())
			.filter(Boolean)
		: []

	return(
		<>
			<div className="experience">
				<div className="experience__wrapper">
					<div className="experience__box-date">
						<p>{date}</p>
					</div>
					<div className="experience__box-info">
						<p className="experience__box-job-title">{title}</p>
						{descriptionTopics.length > 0 ? (
							<ul className="experience__box-job-topics">
								{descriptionTopics.map((topic, index) => (
									<li className="experience__box-job-topic" key={index}>{topic}</li>
								))}
							</ul>
						) : (
							<p className="experience__box-job-description">{description}</p>
						)}
						<div className="experience__box-job-skills">
							{Array.isArray(skills) && skills.map((skill,index) => (
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