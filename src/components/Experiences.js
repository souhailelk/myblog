import React from 'react'
function Experiences(props) {
    let experiencesComponents = []
    props.experiences.forEach(experience => {
        experiencesComponents.push(<div class="block px-4 py-2 font-sans text-lg text-left m-4">
            <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">{experience.jobTitle}</div>
            <div class="inline-block text-center m-1">{experience.startDate}</div>
            <div class="inline-block text-center m-1">-</div>
            <div class="inline-block text-center m-1">{experience.endDate}</div>
            <div class="uppercase"><a href={experience.companyLink}>{experience.companyName}</a></div>
            <div>{experience.description}</div>
        </div>)
    });
    return (
        <div class="block px-4 py-2 font-sans text-sm text-left">
            Experiences :
            {experiencesComponents}
        </div>
    )
}
export default Experiences;